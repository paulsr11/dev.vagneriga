'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const translations = {
  lv: {
    message: 'Mēs izmantojam sīkdatnes, lai uzlabotu jūsu lietošanas pieredzi un analizētu vietnes trafiku.',
    accept: 'Piekrītu',
    settings: 'Sīkdatņu politika',
    policyHref: '/lv/sikdatnes',
  },
  en: {
    message: 'We use cookies to enhance your experience and analyze site traffic.',
    accept: 'Accept',
    settings: 'Cookie Policy',
    policyHref: '/en/sikdatnes',
  },
  de: {
    message: 'Wir verwenden Cookies, um Ihr Erlebnis zu verbessern und den Website-Verkehr zu analysieren.',
    accept: 'Akzeptieren',
    settings: 'Cookie-Richtlinie',
    policyHref: '/de/sikdatnes',
  },
};

export default function CookieConsent({ lang }: { lang: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const currentLang = (lang || 'lv') as 'lv' | 'en' | 'de';
  const t = translations[currentLang] || translations.lv;

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    // Check if we're on the cookie policy page itself - don't show popup there
    if (window.location.pathname.includes('/sikdatnes')) {
      return;
    }

    const consent = localStorage.getItem('cookie-consent');
    console.log('Cookie consent status:', consent); // Debug log

    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        console.log('Showing cookie consent popup'); // Debug log
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    console.log('Accepting cookies'); // Debug log
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Here you would typically trigger analytics scripts
    window.dispatchEvent(new Event('cookie-consent-accepted'));
  };

  if (!isVisible) {
    console.log('Cookie consent not visible'); // Debug log
    return null;
  }

  console.log('Rendering cookie consent popup'); // Debug log

  return (
    <div className="fixed bottom-6 right-6 z-[9999] max-w-[320px] w-[calc(100vw-48px)] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-lg p-5 border border-gray-100 transition-all duration-500">
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 leading-normal" style={{ fontSize: 'var(--body)' }}>
          {t.message}
        </p>
        <div className="flex items-center justify-between gap-4">
          <Link 
            href={t.policyHref}
            className="text-gray-500 hover:text-black transition-colors underline underline-offset-4"
            style={{ fontSize: 'var(--ui-label)' }}
          >
            {t.settings}
          </Link>
          <button
            onClick={handleAccept}
            className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-accent transition-colors cursor-pointer"
            style={{ fontSize: 'var(--ui-label)', letterSpacing: 'var(--tracking-widest)' }}
          >
            {t.accept.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}
