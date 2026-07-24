import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore internal Next.js assets, API, admin, and static files
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return;
  }

  // Redirect /de or /de/* -> /en or /en/*
  if (pathname === '/de' || pathname.startsWith('/de/')) {
    const targetPath = pathname === '/de' ? '/en' : pathname.replace(/^\/de\//, '/en/');
    const url = request.nextUrl.clone();
    url.pathname = targetPath;
    return NextResponse.redirect(url);
  }

  // Redirect /lv or /lv/* -> /en or /en/*
  if (pathname === '/lv' || pathname.startsWith('/lv/')) {
    const targetPath = pathname === '/lv' ? '/en' : pathname.replace(/^\/lv\//, '/en/');
    const url = request.nextUrl.clone();
    url.pathname = targetPath;
    return NextResponse.redirect(url);
  }

  // Redirect root / -> /en
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    return NextResponse.redirect(url);
  }

  // Ensure any other path without /en is prefixed with /en
  if (!pathname.startsWith('/en/') && pathname !== '/en') {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url);
  }

  return;
}

export const config = {
  matcher: [
    '/((?!_next|api|admin|favicon.ico).*)',
    '/',
  ],
};
