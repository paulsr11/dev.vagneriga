import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Known active top-level frontend routes under /[lang]/
const KNOWN_ROUTES = new Set([
  'rebuilding',
  'donations',
  'jaunumi',
  'galerija',
  'sponsori',
  'biedriba',
  'kontakti',
  'muzejs',
  'nams',
  'pasakumi',
  'privatums',
  'sikdatnes',
]);

// 1-to-1 Explicit 301 Permanent Redirect Map for legacy / WP URLs
const EXACT_301_MAP: Record<string, string> = {
  // Legacy Latvian URLs (no language prefix)
  '/par-projektu': '/en/rebuilding',
  '/par-biedribu': '/en/biedriba',
  '/ziedot': '/en/donations',
  '/donate': '/en/donations',
  '/spenden': '/en/donations',
  '/ziedojumi': '/en/donations',
  '/jaunumi': '/en/jaunumi',
  '/sponsori': '/en/sponsori',
  '/foto-galerija': '/en/galerija',
  '/vagnera-teatris': '/en/nams',
  '/pasakumi': '/en/pasakumi',
  '/komanda': '/en/biedriba',
  '/stipendiati': '/en/biedriba',
  '/vagners-riga': '/en/rebuilding',
  '/iepirkumi': '/en/jaunumi',
  '/projekta-vizija': '/en/rebuilding',
  '/aktualitates': '/en/jaunumi',

  // Legacy English URLs (/en/*)
  '/en/about-project': '/en/rebuilding',
  '/en/about-society': '/en/biedriba',
  '/en/donate': '/en/donations',
  '/en/ziedojumi': '/en/donations',
  '/en/news': '/en/jaunumi',
  '/en/sponsors': '/en/sponsori',
  '/en/photo-gallery': '/en/galerija',
  '/en/wagner-theater': '/en/nams',
  '/en/events': '/en/pasakumi',
  '/en/team': '/en/biedriba',
  '/en/scholarship-holders': '/en/biedriba',
  '/en/wagner-in-riga': '/en/rebuilding',
  '/en/project-vision': '/en/rebuilding',

  // Legacy German URLs (/de/*)
  '/de/uber-das-projekt': '/en/rebuilding',
  '/de/uber-die-gesellschaft': '/en/biedriba',
  '/de/spenden': '/en/donations',
  '/de/donate': '/en/donations',
  '/de/ziedojumi': '/en/donations',
  '/de/nachrichten': '/en/jaunumi',
  '/de/sponsoren': '/en/sponsori',
  '/de/foto-galerie': '/en/galerija',
  '/de/the-wagner-theater': '/en/nams',
  '/de/veranstaltungen': '/en/pasakumi',
  '/de/mannschaft': '/en/biedriba',
  '/de/stipendiaten': '/en/biedriba',
  '/de/richard-wagner-in-riga': '/en/rebuilding',
  '/de/vision': '/en/rebuilding',

  // Localized route mappings under /lv/ or /de/ if requested directly
  '/lv/ziedojumi': '/en/donations',
  '/lv/donate': '/en/donations',
  '/lv/spenden': '/en/donations',
  '/lv/par-projektu': '/en/rebuilding',
  '/lv/par-biedribu': '/en/biedriba',
  '/lv/vagnera-teatris': '/en/nams',
  '/lv/vagners-riga': '/en/rebuilding',
  '/lv/komanda': '/en/biedriba',
  '/lv/stipendiati': '/en/biedriba',
};

export function middleware(request: NextRequest) {
  let { pathname } = request.nextUrl;

  // Ignore internal Next.js assets, API, admin, and static files with extensions
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Strip trailing slash if present (except root '/')
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // 1. Check exact 301 Redirect Map
  if (EXACT_301_MAP[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = EXACT_301_MAP[pathname];
    return NextResponse.redirect(url, 301);
  }

  // 2. Check for legacy news article post slugs (single segment after language or root)
  const segments = pathname.split('/').filter(Boolean);

  if (
    segments.length === 1 &&
    !KNOWN_ROUTES.has(segments[0]) &&
    segments[0] !== 'en' &&
    segments[0] !== 'de' &&
    segments[0] !== 'lv'
  ) {
    // Unprefixed legacy post slug -> redirect to /en/jaunumi/[slug]
    const url = request.nextUrl.clone();
    url.pathname = `/en/jaunumi/${segments[0]}`;
    return NextResponse.redirect(url, 301);
  }

  if (
    segments.length === 2 &&
    (segments[0] === 'en' || segments[0] === 'de' || segments[0] === 'lv') &&
    !KNOWN_ROUTES.has(segments[1])
  ) {
    // Prefixed legacy post slug -> redirect to /en/jaunumi/[slug]
    const url = request.nextUrl.clone();
    url.pathname = `/en/jaunumi/${segments[1]}`;
    return NextResponse.redirect(url, 301);
  }

  // 3. Enforce English-only primary routing (redirect /de/*, /lv/* -> /en/*)
  if (pathname === '/de' || pathname.startsWith('/de/')) {
    const targetPath = pathname === '/de' ? '/en' : pathname.replace(/^\/de\//, '/en/');
    const url = request.nextUrl.clone();
    url.pathname = targetPath;
    return NextResponse.redirect(url, 301);
  }

  if (pathname === '/lv' || pathname.startsWith('/lv/')) {
    const targetPath = pathname === '/lv' ? '/en' : pathname.replace(/^\/lv\//, '/en/');
    const url = request.nextUrl.clone();
    url.pathname = targetPath;
    return NextResponse.redirect(url, 301);
  }

  // 4. Redirect root / -> /en
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    return NextResponse.redirect(url, 301);
  }

  // 5. Ensure any other path without /en is prefixed with /en
  if (!pathname.startsWith('/en/') && pathname !== '/en') {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url, 301);
  }

  return;
}

export const config = {
  matcher: [
    '/((?!_next|api|admin|favicon.ico).*)',
    '/',
  ],
};
