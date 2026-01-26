'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuLabels: Record<string, { [key: string]: string }> = {
  jaunumi: { lv: 'JAUNUMI', en: 'NEWS', de: 'NEUIGKEITEN' },
  galerija: { lv: 'GALERIJA', en: 'GALLERY', de: 'GALERIE' },
  biedriba: { lv: 'BIEDRĪBA', en: 'ASSOCIATION', de: 'VEREIN' },
  sponsori: { lv: 'SPONSORI', en: 'SPONSORS', de: 'SPONSOREN' },
  kontakti: { lv: 'KONTAKTI', en: 'CONTACTS', de: 'KONTAKTE' },
  sakums: { lv: 'Sākums', en: 'Home', de: 'Startseite' },
  muzejs: { lv: 'Muzejs', en: 'Museum', de: 'Museum' },
  nams: { lv: 'Nams', en: 'House', de: 'Haus' },
  pasakumi: { lv: 'Pasākumi', en: 'Events', de: 'Veranstaltungen' },
  ziedojumi: { lv: 'Ziedojumi', en: 'Donations', de: 'Spenden' },
};

const SECONDARY_MENU_KEYS = ['jaunumi', 'galerija', 'biedriba', 'sponsori', 'kontakti'];
const PRIMARY_MENU_KEYS = ['sakums', 'muzejs', 'nams', 'pasakumi', 'ziedojumi'];

const MENU_HREFS: Record<string, string> = {
  sakums: '',
  jaunumi: '/jaunumi',
  galerija: '/galerija',
  biedriba: '/biedriba',
  sponsori: '/sponsori',
  kontakti: '/kontakti',
  muzejs: '/muzejs',
  nams: '/nams',
  pasakumi: '/pasakumi',
  ziedojumi: '/ziedojumi',
};

export default function Header({ lang }: { lang: string }) {
  const pathname = usePathname();

  const getLanguagePath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split('/');
    segments[1] = targetLang;
    return segments.join('/');
  };

  const currentLang = lang || 'lv';

  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <div className="vag-container flex h-28 items-center">
        {/* 1st Column: Logo (20%) */}
        <div className="flex w-[20%] items-center justify-start">
          <Link href={`/${currentLang}`} className="relative h-16 w-40">
            <Image
              src="https://dev.vagneriga.lv/wp-content/uploads/2025/09/VR_logo_grey.png"
              alt="Vagneriga Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* 2nd Column: Menus (60%) */}
        <div className="flex w-[60%] flex-col items-center justify-center">
          {/* Top Menu: All Caps */}
          <nav className="flex items-center gap-6 mb-2">
            {SECONDARY_MENU_KEYS.map((key) => (
              <Link
                key={key}
                href={`/${currentLang}${MENU_HREFS[key]}`}
                className="font-bold tracking-widest text-[#212121] hover:text-accent transition-colors"
                style={{ fontSize: 'var(--ui-label)' }}
              >
                {menuLabels[key][currentLang]}
              </Link>
            ))}
          </nav>
          
          {/* Bottom Menu: Sentence Case with "/" */}
          <nav className="flex items-center font-medium text-[#212121]" style={{ fontSize: 'var(--body)' }}>
            {PRIMARY_MENU_KEYS.map((key, index) => (
              <div key={key} className="flex items-center">
                <Link
                  href={`/${currentLang}${MENU_HREFS[key]}`}
                  className="hover:text-accent transition-colors"
                >
                  {menuLabels[key][currentLang]}
                </Link>
                {index < PRIMARY_MENU_KEYS.length - 1 && (
                  <span className="mx-3 text-gray-300">/</span>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* 3rd Column: Lang + Social (20%) */}
        <div className="flex w-[20%] flex-col items-end justify-center gap-3">
          {/* Upper Line: Language Selector */}
          <div className="flex items-center gap-2 font-bold" style={{ fontSize: 'var(--ui-label)' }}>
            <Link 
              href={getLanguagePath('lv')}
              className={`cursor-pointer transition-colors ${currentLang === 'lv' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
            >
              LV
            </Link>
            <span className="text-gray-300">/</span>
            <Link 
              href={getLanguagePath('en')}
              className={`cursor-pointer transition-colors ${currentLang === 'en' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
            >
              EN
            </Link>
            <span className="text-gray-300">/</span>
            <Link 
              href={getLanguagePath('de')}
              className={`cursor-pointer transition-colors ${currentLang === 'de' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
            >
              DE
            </Link>
          </div>

          {/* Bottom Line: Social Buttons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#212121] hover:text-accent transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" className="text-[#212121] hover:text-accent transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
