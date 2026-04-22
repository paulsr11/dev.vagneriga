import { NextResponse } from 'next/server';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Proxies `/wp-content/uploads/*` from WordPress with server credentials.
 * Browsers load same-origin `/api/wp-media/...` so uploads can stay non-public on WP/nginx.
 */
const UPLOAD_PATH_PREFIX = '/wp-content/uploads/';
const GENERIC_FALLBACK_IMAGE = '/images/faq/faq-default.jpg';
const EXTENSION_FALLBACKS = ['.jpg', '.jpeg', '.png', '.webp'];

function localAliasForMissingUpload(pathname: string): string | null {
  const lower = pathname.toLowerCase();
  const file = lower.split('/').pop() || '';

  if (file.includes('ekii')) return '/images/sponsors/ekii.png';
  if (file.includes('aa_2017') || file.includes('auswaertiges')) return '/images/sponsors/auswaertiges-amt-official.png';
  if (file.includes('boriga') || file.includes('riga')) return '/images/sponsors/riga.png';
  if (file.includes('logo_1_lat') || file.includes('lvm')) return '/images/sponsors/latvijas-valsts-mezi.png';
  if (file.includes('deutscher-bundestag') || file.includes('german-embassy')) return '/images/sponsors/german-embassy.png';
  if (file.includes('schwenk')) return '/images/sponsors/schwenk.png';
  if (file.includes('messerschmitt')) return '/images/sponsors/messerschmitt-stiftung.png';
  if (file.includes('richard') || file.includes('wagner-verband')) return '/images/sponsors/richard-wagner-verband.png';

  return null;
}

function mediaAuthHeader(): string {
  const user = process.env.WP_AUTH_USER || 'headless';
  const pass = process.env.WP_AUTH_PASS || 'vagner-headless-2026';
  return `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`;
}

function mediaOrigins(): string[] {
  const primary = process.env.WP_MEDIA_FETCH_ORIGIN?.replace(/\/$/, '');
  if (primary) return [primary, 'https://dev.vagneriga.lv', 'https://dev2.vagneriga.lv', 'https://vagneriga.lv'];
  return ['https://dev.vagneriga.lv', 'https://dev2.vagneriga.lv', 'https://vagneriga.lv'];
}

function contentTypeFromPath(localPath: string): string {
  if (localPath.endsWith('.png')) return 'image/png';
  if (localPath.endsWith('.webp')) return 'image/webp';
  if (localPath.endsWith('.svg')) return 'image/svg+xml';
  return 'image/jpeg';
}

function uniquePaths(paths: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of paths) {
    if (!p || seen.has(p)) continue;
    seen.add(p);
    out.push(p);
  }
  return out;
}

function buildCandidatePaths(pathname: string): string[] {
  const decoded = pathname.replace(/%20/gi, ' ');
  const candidates = [pathname, decoded];

  const addVariants = (basePath: string) => {
    const extMatch = basePath.match(/\.[a-z0-9]+$/i);
    if (!extMatch) return;
    const ext = extMatch[0].toLowerCase();
    const baseNoExt = basePath.slice(0, -ext.length);
    const noSize = baseNoExt.replace(/-\d{2,5}x\d{2,5}$/i, '');
    const noScaled = noSize.replace(/-scaled$/i, '');
    const stems = uniquePaths([baseNoExt, noSize, noScaled]);
    for (const stem of stems) {
      for (const fallbackExt of EXTENSION_FALLBACKS) {
        candidates.push(`${stem}${fallbackExt}`);
      }
    }
  };

  addVariants(pathname);
  if (decoded !== pathname) addVariants(decoded);
  return uniquePaths(candidates);
}

async function fetchLocalAsset(localPath: string): Promise<NextResponse | null> {
  try {
    const diskPath = join(process.cwd(), 'public', localPath.replace(/^\/+/, ''));
    const data = await readFile(diskPath);
    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': contentTypeFromPath(localPath),
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return null;
  }
}

export async function GET(req: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  const pathname = `/${path.join('/')}`;
  if (!pathname.startsWith(UPLOAD_PATH_PREFIX)) {
    return new NextResponse('Forbidden', { status: 403 });
  }
  if (pathname.includes('..') || pathname.includes('\\')) {
    return new NextResponse('Bad request', { status: 400 });
  }

  const candidatePaths = buildCandidatePaths(pathname);
  let lastStatus = 502;
  for (const origin of mediaOrigins()) {
    const host = new URL(origin).hostname;
    for (const candidatePath of candidatePaths) {
      const url = `${origin}${candidatePath}`;
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: mediaAuthHeader(),
            Host: host,
          },
          signal: AbortSignal.timeout(20_000),
        });
        lastStatus = res.status;
        if (res.ok && res.body) {
          const ct = res.headers.get('content-type') || 'application/octet-stream';
          return new NextResponse(res.body, {
            status: 200,
            headers: {
              'Content-Type': ct,
              'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
            },
          });
        }
      } catch {
        lastStatus = 502;
      }
    }
  }

  // If variant lookups fail, also try local public mirror path.
  for (const candidatePath of candidatePaths) {
    const localMirror = await fetchLocalAsset(candidatePath);
    if (localMirror) {
      return localMirror;
    }
  }

  // Use local aliases for common historical sponsor logos referenced in old WP HTML.
  const aliased = localAliasForMissingUpload(pathname);
  if (aliased) {
    const localAliasResponse = await fetchLocalAsset(aliased);
    if (localAliasResponse) return localAliasResponse;
  }

  // Last-resort fallback so posts never render broken image icons.
  const genericFallback = await fetchLocalAsset(GENERIC_FALLBACK_IMAGE);
  if (genericFallback) return genericFallback;

  return new NextResponse('Not found', { status: lastStatus === 404 ? 404 : 502 });
}
