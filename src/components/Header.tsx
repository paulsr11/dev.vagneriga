'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CMS_MEDIA_BASE } from '@/lib/constants';

const navLabels: Record<string, { lv: string; en: string; de: string }> = {
  jaunumi: { lv: 'JAUNUMI', en: 'NEWS', de: 'NEUIGKEITEN' },
  galerija: { lv: 'GALERIJA', en: 'GALLERY', de: 'GALERIE' },
  biedriba: { lv: 'BIEDRĪBA', en: 'ASSOCIATION', de: 'VEREIN' },
  sponsori: { lv: 'SPONSORI', en: 'SPONSORS', de: 'SPONSOREN' },
  kontakti: { lv: 'KONTAKTI', en: 'CONTACTS', de: 'KONTAKTE' },
  sakums: { lv: 'Sākums', en: 'Home', de: 'Start' },
  muzejs: { lv: 'Muzejs', en: 'Museum', de: 'Museum' },
  nams: { lv: 'Nams', en: 'House', de: 'Haus' },
  pasakumi: { lv: 'Pasākumi', en: 'Events', de: 'Veranstaltungen' },
  ziedojumi: { lv: 'Ziedojumi', en: 'Donations', de: 'Spenden' },
  par_mums: { lv: 'Par mums', en: 'About us', de: 'Über uns' },
  telpu_noma: { lv: 'Telpu noma', en: 'Room rental', de: 'Raumvermietung' },
};

const FACEBOOK_URL = 'https://www.facebook.com/GesamtkunstWerk21/?locale=lv_LV';
const INSTAGRAM_URL = 'https://www.instagram.com/wagneriga.lv/';

export default function Header({ lang }: { lang: string }) {
  const currentLang = (lang || 'lv') as 'lv' | 'en' | 'de';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCondensed(window.scrollY > 50);
    };
    onScroll(); // initial
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('header-condensed', condensed);
    return () => document.body.classList.remove('header-condensed');
  }, [condensed]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const getHref = (path: string) => `/${currentLang}${path || ''}`;

  const mainNav = [
    { key: 'jaunumi', href: '/jaunumi' },
    { key: 'galerija', href: '/galerija' },
    { key: 'biedriba', href: '/biedriba' },
    { key: 'sponsori', href: '/sponsori' },
    { key: 'kontakti', href: '/kontakti' },
  ];

  const secondaryNav = [
    { key: 'sakums', href: '' },
    { key: 'muzejs', href: '/muzejs' },
    { key: 'nams', href: '/nams' },
    { key: 'pasakumi', href: '/pasakumi' },
    { key: 'ziedojumi', href: '/ziedojumi' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full bg-white transition-all duration-200 ${condensed ? 'header-condensed' : ''}`}>
      <div className={`vag-container flex items-center transition-all duration-200 ${condensed ? 'h-12 lg:h-[67px]' : 'h-20 lg:h-28'}`}>
        {/* Left: Logo */}
        <div className="flex w-[20%] items-center justify-start">
          <Link href={getHref('')} className={`relative w-32 lg:w-40 transition-all duration-200 ${condensed ? 'h-10 lg:h-12' : 'h-12 lg:h-16'}`}>
            <Image
              src={`${CMS_MEDIA_BASE}/wp-content/uploads/2025/09/VR_logo_grey.png`}
              alt="Vagneriga"
              fill
              className="object-contain object-left"
              sizes="160px"
              priority
            />
          </Link>
        </div>

        {/* Center: Main nav + secondary nav - desktop only (60% width) */}
        <div className="hidden lg:flex w-[60%] flex-col items-center justify-center">
          <nav className={`flex items-center gap-6 transition-all duration-200 ${condensed ? 'mb-1' : 'mb-2'}`}>
            {mainNav.map((item) => (
              <Link
                key={item.key}
                href={getHref(item.href)}
                className="font-bold tracking-widest text-[#212121] hover:text-accent transition-colors"
                style={{ fontSize: 'var(--ui-label)' }}
              >
                {navLabels[item.key][currentLang]}
              </Link>
            ))}
          </nav>
          <nav className="flex items-center font-medium text-[#212121]" style={{ fontSize: 'var(--body)' }}>
            {secondaryNav.map((item, i) => (
              <span key={item.key} className="flex items-center">
                <Link href={getHref(item.href)} className="hover:text-accent transition-colors">
                  {navLabels[item.key][currentLang]}
                </Link>
                {i < secondaryNav.length - 1 && <span className="mx-3 text-gray-300">/</span>}
              </span>
            ))}
          </nav>
        </div>

        {/* Right: Lang + social - desktop */}
        <div className="hidden lg:flex flex-col items-end justify-center gap-3 w-[20%]">
          <div className="flex items-center gap-2 font-bold" style={{ fontSize: 'var(--ui-label)' }}>
            <Link className={currentLang === 'lv' ? 'cursor-pointer text-black' : 'cursor-pointer text-gray-400 hover:text-black transition-colors'} href="/lv">LV</Link>
            <span className="text-gray-300">/</span>
            <Link className={currentLang === 'en' ? 'cursor-pointer text-black' : 'cursor-pointer text-gray-400 hover:text-black transition-colors'} href="/en">EN</Link>
            <span className="text-gray-300">/</span>
            <Link className={currentLang === 'de' ? 'cursor-pointer text-black' : 'cursor-pointer text-gray-400 hover:text-black transition-colors'} href="/de">DE</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-[#212121] hover:text-accent transition-colors" aria-label="Facebook">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[#212121] hover:text-accent transition-colors" aria-label="Instagram">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* Mobile: hamburger + lang */}
        <div className="flex flex-1 lg:hidden items-center justify-end gap-4">
          <div className="flex items-center gap-2 font-bold" style={{ fontSize: 'var(--ui-label)' }}>
            <Link className={currentLang === 'lv' ? 'text-black' : 'text-gray-400 hover:text-black'} href="/lv">LV</Link>
            <span className="text-gray-300">/</span>
            <Link className={currentLang === 'en' ? 'text-black' : 'text-gray-400 hover:text-black'} href="/en">EN</Link>
            <span className="text-gray-300">/</span>
            <Link className={currentLang === 'de' ? 'text-black' : 'text-gray-400 hover:text-black'} href="/de">DE</Link>
          </div>
          <button
            type="button"
            className={`hamburger-btn flex flex-col justify-center gap-1 w-10 h-10 p-2 ${mobileOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 lg:hidden z-40 bg-black/30 transition-all duration-300 ${condensed ? 'top-12' : 'top-20'} ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed right-0 bottom-0 w-[min(320px,85vw)] lg:hidden z-50 bg-white shadow-xl overflow-y-auto transition-all duration-300 ease-out ${condensed ? 'top-12' : 'top-20'} ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col py-6 px-6">
          {/* Secondary nav first (Sākums, Muzejs, etc.) */}
          <div className="space-y-2 pb-4 border-b border-gray-100">
            {secondaryNav.map((item) => (
              <Link
                key={item.key}
                href={getHref(item.href)}
                className="block py-2 text-[#212121] hover:text-accent"
                style={{ fontSize: 'var(--body)' }}
                onClick={() => setMobileOpen(false)}
              >
                {navLabels[item.key][currentLang]}
              </Link>
            ))}
          </div>
          {/* Main nav second */}
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={getHref(item.href)}
              className="block py-4 font-bold uppercase tracking-widest text-[#212121] border-b border-gray-100"
              style={{ fontSize: 'var(--ui-label)' }}
              onClick={() => setMobileOpen(false)}
            >
              {navLabels[item.key][currentLang]}
            </Link>
          ))}
          <div className="flex gap-4 pt-6 mt-4 border-t border-gray-100">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-[#212121] hover:text-accent" aria-label="Facebook">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-[#212121] hover:text-accent" aria-label="Instagram">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
