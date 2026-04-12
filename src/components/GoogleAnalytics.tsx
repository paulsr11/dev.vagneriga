'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-Y30BPR93H2';

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    // Check initial consent
    const consent = localStorage.getItem('cookie-consent');
    setHasConsent(consent === 'accepted');

    // Listen for consent event from CookieConsent component
    const handleConsent = () => {
      setHasConsent(true);
    };

    window.addEventListener('cookie-consent-accepted', handleConsent);
    return () => window.removeEventListener('cookie-consent-accepted', handleConsent);
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
