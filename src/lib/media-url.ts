/** Upgrade legacy / mixed CMS media URLs so browsers and next/image accept them. */
export function normalizeCmsMediaUrl(url: string | undefined | null): string {
  if (!url || typeof url !== 'string') return '';
  let u = url.trim();
  if (u.startsWith('//')) u = `https:${u}`;
  u = u.replace(/^http:\/\/dev2\.vagneriga\.lv/i, 'https://dev2.vagneriga.lv');
  u = u.replace(/^http:\/\/dev\.vagneriga\.lv/i, 'https://dev.vagneriga.lv');
  u = u.replace(/^http:\/\/www\.vagneriga\.lv/i, 'https://www.vagneriga.lv');
  u = u.replace(/^http:\/\/vagneriga\.lv/i, 'https://vagneriga.lv');
  return u;
}

const VAGNERIGA_MEDIA_HOSTS = new Set([
  'dev.vagneriga.lv',
  'dev2.vagneriga.lv',
  'vagneriga.lv',
  'www.vagneriga.lv',
]);

/**
 * Same-origin proxy path so the browser never hits WordPress for uploads.
 * Requires `/api/wp-media/[...path]` route (server fetch with Basic auth).
 */
export function proxiedUploadSrc(url: string | undefined | null): string {
  const n = normalizeCmsMediaUrl(url || '');
  if (!n) return '';
  let parsed: URL;
  try {
    parsed = new URL(n);
  } catch {
    return n;
  }
  if (!VAGNERIGA_MEDIA_HOSTS.has(parsed.hostname.toLowerCase())) return n;
  if (!parsed.pathname.startsWith('/wp-content/uploads/')) return n;
  return `/api/wp-media${parsed.pathname}`;
}

/** Rewrite embedded WP upload URLs in HTML for WpContent and similar. */
export function rewriteWordPressUploadsInHtml(html: string): string {
  if (!html) return html;
  const rewrittenAbsolute = html.replace(
    /https?:\/\/(?:www\.|dev2\.|dev\.)?vagneriga\.lv(\/wp-content\/uploads\/[^"'>\s]+)/gi,
    '/api/wp-media$1',
  );

  // Many legacy WP entries store relative `/wp-content/uploads/...` urls.
  // Route them through the same proxy for consistent fallback handling.
  return rewrittenAbsolute.replace(
    /(^|["'(=\s])\/wp-content\/uploads\/(?!\?)([^"')<\s]*)/gi,
    '$1/api/wp-media/wp-content/uploads/$2',
  );
}

export const DEFAULT_WP_CARD_IMAGE =
  'https://dev.vagneriga.lv/wp-content/uploads/2025/09/20210830_VacijasVestnieciba_VagneraZale_039-650x433-1.jpg';

/** Featured image from WP `_embed` with https / host fixes. */
export function wpFeaturedImageUrl(
  entity: { _embedded?: { 'wp:featuredmedia'?: Array<{ source_url?: string }> } },
  fallback: string = DEFAULT_WP_CARD_IMAGE,
): string {
  const raw = entity._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const resolved = normalizeCmsMediaUrl(raw) || normalizeCmsMediaUrl(fallback) || fallback;
  return proxiedUploadSrc(resolved) || resolved;
}

/** Same as {@link wpFeaturedImageUrl} but returns `undefined` when WP has no featured image. */
export function wpFeaturedImageUrlOptional(
  entity: { _embedded?: { 'wp:featuredmedia'?: Array<{ source_url?: string }> } },
): string | undefined {
  const raw = entity._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const n = normalizeCmsMediaUrl(raw);
  if (!n) return undefined;
  return proxiedUploadSrc(n) || n;
}
