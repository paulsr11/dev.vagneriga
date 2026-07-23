'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

interface SupporterItem {
  name: string;
  src: string;
  urls: {
    lv: string;
    en: string;
    de: string;
  };
}

/** 8 sponsor logos with order & language-specific URLs requested by user */
const SUPPORTERS_DATA: SupporterItem[] = [
  {
    name: 'EKII',
    src: '/images/sponsors/ekii.png',
    urls: {
      lv: 'https://ekii.lv/',
      en: 'https://ekii.lv/index.php?page=news',
      de: 'https://ekii.lv/index.php?page=news',
    },
  },
  {
    name: 'Auswärtiges Amt',
    src: '/images/sponsors/auswaertiges-amt.png',
    urls: {
      lv: 'https://www.auswaertiges-amt.de/en',
      en: 'https://www.auswaertiges-amt.de/en',
      de: 'https://www.auswaertiges-amt.de/de',
    },
  },
  {
    name: 'Deutsche Botschaft Riga',
    src: '/images/sponsors/german-embassy.png',
    urls: {
      lv: 'https://riga.diplo.de/lv-lv',
      en: 'https://riga.diplo.de/lv-de',
      de: 'https://riga.diplo.de/lv-de',
    },
  },
  {
    name: 'Messerschmitt Stiftung',
    src: '/images/sponsors/messerschmitt-stiftung.png',
    urls: {
      lv: 'https://messerschmitt-stiftung.com/',
      en: 'https://messerschmitt-stiftung.com/',
      de: 'https://messerschmitt-stiftung.com/',
    },
  },
  {
    name: 'Richard Wagner Verband Frankfurt',
    src: '/images/sponsors/richard-wagner-verband.png',
    urls: {
      lv: 'https://www.rwv-ffm.de/',
      en: 'https://www.rwv-ffm.de/',
      de: 'https://www.rwv-ffm.de/',
    },
  },
  {
    name: 'Rīgas dome',
    src: '/images/sponsors/riga.png',
    urls: {
      lv: 'https://www.riga.lv/lv',
      en: 'https://www.riga.lv/lv',
      de: 'https://www.riga.lv/lv',
    },
  },
  {
    name: 'Schwenk',
    src: '/images/sponsors/schwenk.png',
    urls: {
      lv: 'https://schwenk.lv/',
      en: 'https://schwenk.lv/en/',
      de: 'https://schwenk.lv/en/',
    },
  },
  {
    name: 'Latvijas Valsts Meži',
    src: '/images/sponsors/latvijas-valsts-mezi.png',
    urls: {
      lv: 'https://www.lvm.lv/',
      en: 'https://www.lvm.lv/',
      de: 'https://www.lvm.lv/',
    },
  },
];

type Settings = Record<string, unknown> | null;

const footerLabels: Record<string, { lv: string; en: string; de: string }> = {
  mus_atbalsta: { lv: 'MŪS ATBALSTA', en: 'OUR SUPPORTERS', de: 'UNSERE FÖRDERER' },
  kontakti: { lv: 'KONTAKTI', en: 'CONTACTS', de: 'KONTAKTE' },
  teatra_vieta: { lv: 'Teātra atrašanās vieta', en: 'Theatre location', de: 'Theaterstandort' },
  pasta_adrese: { lv: 'Pasta adrese', en: 'Postal address', de: 'Postadresse' },
  epasts: { lv: 'E-pasts', en: 'E-mail', de: 'E-Mail' },
  talrunis: { lv: 'Tālrunis', en: 'Phone', de: 'Telefon' },
  finansejums: { lv: 'FINANSĒJUMS', en: 'FUNDRAISING', de: 'FUNDRAISING' },
  sponsori: { lv: 'Sponsori', en: 'Sponsors', de: 'Sponsoren' },
  ziedojumi: { lv: 'Ziedojumi', en: 'Donations', de: 'Spenden' },
  biedriba: { lv: 'BIEDRĪBA', en: 'ASSOCIATION', de: 'VEREIN' },
  par_mums: { lv: 'Par mums', en: 'About us', de: 'Über uns' },
  jaunumi: { lv: 'Jaunumi', en: 'News', de: 'Neuigkeiten' },
  galerija: { lv: 'Galerija', en: 'Gallery', de: 'Galerie' },
  kontakti_menu: { lv: 'Kontakti', en: 'Contacts', de: 'Kontakte' },
  noteikumi: { lv: 'NOTEIKUMI', en: 'TERMS', de: 'BESTIMMUNGEN' },
  privatuma_politika: { lv: 'Privātuma politika', en: 'Privacy policy', de: 'Datenschutzerklärung' },
  sikdatnu_politika: { lv: 'Sīkdatņu politika', en: 'Cookie policy', de: 'Cookie-Richtlinie' },
};

/** Footer navigation link columns */
const FOOTER_LINKS = {
  finansejums: [
    { labelKey: 'sponsori', href: '/sponsori' },
    { labelKey: 'ziedojumi', href: '/ziedojumi' },
  ],
  biedriba: [
    { labelKey: 'par_mums', href: '/biedriba' },
    { labelKey: 'jaunumi', href: '/jaunumi' },
    { labelKey: 'galerija', href: '/galerija' },
  ],
  noteikumi: [
    { labelKey: 'kontakti_menu', href: '/kontakti' },
    { labelKey: 'privatuma_politika', href: '/privatums' },
    { labelKey: 'sikdatnu_politika', href: '/sikdatnes' },
  ],
} as const;

const EU_SUPPORT_TEXT: Record<'lv' | 'en' | 'de', { line1: string; line2: string; line3: string }> = {
  lv: {
    line1: 'SIA "Vāgnera teātris" reģ. nr. 42103100440 Atveseļošanas fonda ietvaros veic ieguldījumu komercdarbības procesu uzlabošanā.',
    line2: 'Atbalstāmā darbība: jaunu digitālu risinājumu izstrāde',
    line3: 'Risinājums: e-komercija, mājaslapas izstrāde',
  },
  en: {
    line1: 'SIA "Vāgnera teātris" reg. no. 42103100440 is investing in business process improvement within the Recovery Fund.',
    line2: 'Supported activity: development of new digital solutions',
    line3: 'Solution: e-commerce, website development',
  },
  de: {
    line1: 'SIA "Vāgnera teātris" Reg.-Nr. 42103100440 investiert im Rahmen des Aufbau- und Resilienzfonds in die Verbesserung von Geschäftsprozessen.',
    line2: 'Geförderte Tätigkeit: Entwicklung neuer digitaler Lösungen',
    line3: 'Lösung: E-Commerce, Website-Entwicklung',
  },
};

const FACEBOOK_URL = 'https://www.facebook.com/GesamtkunstWerk21/?locale=lv_LV';
const INSTAGRAM_URL = 'https://www.instagram.com/wagneriga.lv/';

export default function Footer({
  settings: _settings,
  lang,
}: {
  settings: Settings;
  lang: string;
}) {
  const currentLang: 'lv' | 'en' | 'de' = lang === 'en' || lang === 'de' ? lang : 'lv';
  const year = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Supporters strip */}
      <section className="bg-white py-12 text-center border-t border-gray-100">
        <div className="vag-container">
          <h2 className="mb-10 font-bold tracking-[0.04em] text-black">{footerLabels.mus_atbalsta[currentLang]}</h2>
          <div className="flex flex-col gap-10 items-center justify-center">
            {/* First Row: 4 logos (EKII, Auswärtiges Amt, German Embassy, Messerschmitt) */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {SUPPORTERS_DATA.slice(0, 4).map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.urls[currentLang]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sponsor.name}
                  className="relative transition-all duration-300 opacity-85 hover:opacity-100 hover:scale-105 inline-block"
                  style={{ height: '80px', width: '220px' }}
                >
                  <Image src={sponsor.src} alt={sponsor.name} fill className="object-contain" sizes="220px" />
                </a>
              ))}
            </div>
            {/* Second Row: 4 logos (Frankfurt, Riga, Schwenk, LVM) */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {SUPPORTERS_DATA.slice(4).map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.urls[currentLang]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sponsor.name}
                  className="relative transition-all duration-300 opacity-85 hover:opacity-100 hover:scale-105 inline-block"
                  style={{ height: '80px', width: '220px' }}
                >
                  <Image src={sponsor.src} alt={sponsor.name} fill className="object-contain" sizes="220px" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main dark footer */}
      <div className="bg-[#1b1c20] py-16 text-white">
        <div className="vag-container flex flex-wrap gap-y-10">
          {/* Contacts Column */}
          <div className="w-full md:w-[40%] pr-8">
            <h5 className="mb-6 tracking-[0.1em] text-gray-300">{footerLabels.kontakti[currentLang]}</h5>
            <div className="space-y-3 leading-relaxed text-gray-300 font-sans text-sm">
              <p>
                <span className="font-semibold text-white">{footerLabels.teatra_vieta[currentLang]}:</span> Riharda Vāgnera iela 4, Rīga, LV-1050
              </p>
              <p>
                <span className="font-semibold text-white">{footerLabels.pasta_adrese[currentLang]}:</span> Balasta dambis 66A, Rīga, LV-1048
              </p>
              <p>
                <span className="font-semibold text-white">{footerLabels.epasts[currentLang]}:</span> info@vagneriga.lv
              </p>
              <p>
                <span className="font-semibold text-white">{footerLabels.talrunis[currentLang]}:</span> +371 26549664
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1 text-white hover:text-accent transition-colors"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1 text-white hover:text-accent transition-colors"
              >
                <Instagram className="h-4 w-4" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* Fundraising Column */}
          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.1em] text-gray-300">{footerLabels.finansejums[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.finansejums.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors text-sm">
                  {footerLabels[link.labelKey][currentLang]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Association Column */}
          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.1em] text-gray-300">{footerLabels.biedriba[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.biedriba.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors text-sm">
                  {footerLabels[link.labelKey][currentLang]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Terms Column */}
          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.1em] text-gray-300">{footerLabels.noteikumi[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.noteikumi.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors text-sm">
                  {footerLabels[link.labelKey][currentLang]}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="vag-container mt-10 border-t border-white/10 pt-8">
          <div className="rounded-md border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
              <div className="relative h-20 w-56 shrink-0">
                <Image
                  src="/images/eu-sponsorship/eu-logo.png"
                  alt="EU / National plan"
                  fill
                  className="object-contain object-left"
                  style={{ filter: 'invert(1) grayscale(1) brightness(1.2)' }}
                  sizes="224px"
                />
              </div>
              <div className="space-y-2 text-sm leading-relaxed text-gray-200">
                <p>{EU_SUPPORT_TEXT[currentLang].line1}</p>
                <p>{EU_SUPPORT_TEXT[currentLang].line2}</p>
                <p>{EU_SUPPORT_TEXT[currentLang].line3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#efefef] py-5 text-[#333]">
        <div className="vag-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 font-sans">
          <p>© Rīgas Vāgnera Nams {year}. Visas tiesības aizsargātas.</p>
          <p className="flex items-center gap-1.5">
            <span>Izstrādāts / Made by</span>
            <a
              href="https://webwoork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black hover:text-[#af9f66] underline transition-colors"
            >
              webwoork.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
