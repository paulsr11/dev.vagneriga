'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

/** Keep the 7 current sponsor logos from public/images/sponsors. */
const SUPPORTERS = [
  '/images/sponsors/german-embassy.png',
  '/images/sponsors/auswaertiges-amt.png',
  '/images/sponsors/messerschmitt-stiftung.png',
  '/images/sponsors/richard-wagner-verband.png',
  '/images/sponsors/riga.png',
  '/images/sponsors/schwenk.png',
  '/images/sponsors/latvijas-valsts-mezi.png',
];

type Settings = Record<string, unknown> | null;

const footerLabels: Record<string, { lv: string; en: string; de: string }> = {
  mus_atbalsta: { lv: 'MŪS ATBALSTA', en: 'OUR SUPPORTERS', de: 'UNSERE FÖRDERER' },
  kontakti: { lv: 'KONTAKTI', en: 'CONTACTS', de: 'KONTAKTE' },
  adrese: { lv: 'Riharda Vāgnera iela 4, Rīga, LV-1050', en: 'Riharda Vagnera iela 4, Riga, LV-1050', de: 'Riharda-Vagnera-Str. 4, Riga, LV-1050' },
  epasts: { lv: 'E-pasts', en: 'E-mail', de: 'E-Mail' },
  talrunis: { lv: 'Tālrunis', en: 'Phone', de: 'Telefon' },
  nams: { lv: 'NAMS', en: 'HOUSE', de: 'HAUS' },
  biedriba: { lv: 'BIEDRĪBA', en: 'ASSOCIATION', de: 'VEREIN' },
  noteikumi: { lv: 'NOTEIKUMI', en: 'TERMS', de: 'BESTIMMUNGEN' },
  pasakumi: { lv: 'Pasākumi', en: 'Events', de: 'Veranstaltungen' },
  muzejs: { lv: 'Muzejs', en: 'Museum', de: 'Museum' },
  telpu_noma: { lv: 'Telpu noma', en: 'Room rental', de: 'Raumvermietung' },
  par_mums: { lv: 'Par mums', en: 'About us', de: 'Über uns' },
  jaunumi: { lv: 'Jaunumi', en: 'News', de: 'Neuigkeiten' },
  ziedojumi: { lv: 'Ziedojumi', en: 'Donations', de: 'Spenden' },
  bilesu_iegade: { lv: 'Biļešu iegāde', en: 'Ticket purchase', de: 'Ticketkauf' },
  privatuma_politika: { lv: 'Privātuma politika', en: 'Privacy policy', de: 'Datenschutzerklärung' },
  sikdatnu_politika: { lv: 'Sīkdatņu politika', en: 'Cookie policy', de: 'Cookie-Richtlinie' },
};

const FOOTER_LINKS = {
  nams: [
    { labelKey: 'pasakumi', href: '/pasakumi' },
    { labelKey: 'muzejs', href: '/muzejs' },
    { labelKey: 'telpu_noma', href: '/telpu-noma' },
  ],
  biedriba: [
    { labelKey: 'par_mums', href: '/par-mums' },
    { labelKey: 'jaunumi', href: '/jaunumi' },
    { labelKey: 'ziedojumi', href: '/ziedojumi' },
  ],
  noteikumi: [
    { labelKey: 'bilesu_iegade', href: '/biletes' },
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
      <section className="bg-white py-12 text-center">
        <div className="vag-container">
          <h2 className="mb-10 font-bold tracking-[0.04em] text-black">{footerLabels.mus_atbalsta[currentLang]}</h2>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale transition-all hover:grayscale-0">
            {SUPPORTERS.map((src, i) => (
              <div key={src} className="relative h-12 w-32 md:w-36 lg:w-40">
                <Image src={src} alt={`Supporter ${i + 1}`} fill className="object-contain" sizes="160px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main dark footer */}
      <div className="bg-[#1b1c20] py-16 text-white">
        <div className="vag-container flex flex-wrap gap-y-10">
          <div className="w-full md:w-[40%] pr-8">
            <h5 className="mb-6 tracking-[0.1em] text-gray-300">{footerLabels.kontakti[currentLang]}</h5>
            <div className="space-y-3 leading-relaxed text-gray-300">
              <p>{footerLabels.adrese[currentLang]}</p>
              <p>{footerLabels.epasts[currentLang]}:</p>
              <p>{footerLabels.talrunis[currentLang]}: +371 26549664</p>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-1 text-white hover:text-accent transition-colors"
              >
                <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-1 text-white hover:text-accent transition-colors"
              >
                <Instagram className="h-3 w-3" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.1em] text-gray-300">{footerLabels.nams[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.nams.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors">
                  {footerLabels[link.labelKey][currentLang]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.1em] text-gray-300">{footerLabels.biedriba[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.biedriba.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors">
                  {footerLabels[link.labelKey][currentLang]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.1em] text-gray-300">{footerLabels.noteikumi[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.noteikumi.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors">
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
      <div className="bg-[#efefef] py-5 text-center text-[#333]">
        <p className="text-sm">© Rīgas Vāgnera Nams {year}.</p>
      </div>
    </footer>
  );
}
