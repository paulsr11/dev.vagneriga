import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_SUPPORTERS = [
  "https://dev.vagneriga.lv/wp-content/uploads/2025/09/logo_1_lat_2-300x59-1.png",
  "https://dev.vagneriga.lv/wp-content/uploads/2025/09/images_lvm_lvm_logo_lat_1_png_1722109029_fit_1024_768-300x153-1.png",
  "https://dev.vagneriga.lv/wp-content/uploads/2025/09/SCHWENK19_Basislogo-4c-300x31-1.png",
  "https://dev.vagneriga.lv/wp-content/uploads/2025/09/VR_logo_grey.png"
];

const footerLabels: Record<string, { [key: string]: string }> = {
  mus_atbalsta: { lv: 'Mūs atbalsta', en: 'Our supporters', de: 'Wir werden unterstützt von' },
  kontakti: { lv: 'Kontakti', en: 'Contacts', de: 'Kontakte' },
  adrese: { lv: 'Riharda Vāgnera iela 4, Rīga, LV-1050', en: 'Riharda Vagnera iela 4, Riga, LV-1050', de: 'Riharda-Vagnera-Str. 4, Riga, LV-1050' },
  epasts: { lv: 'E-pasts', en: 'E-mail', de: 'E-Mail' },
  talrunis: { lv: 'Tālrunis', en: 'Phone', de: 'Telefon' },
  nams: { lv: 'Nams', en: 'House', de: 'Haus' },
  biedriba: { lv: 'Biedrība', en: 'Association', de: 'Verein' },
  noteikumi: { lv: 'Noteikumi', en: 'Terms', de: 'Bestimmungen' },
  pasakumi: { lv: 'Pasākumi', en: 'Events', de: 'Veranstaltungen' },
  muzejs: { lv: 'Muzejs', en: 'Museum', de: 'Museum' },
  telpu_noma: { lv: 'Telpu noma', en: 'Room rental', de: 'Raumvermietung' },
  par_mums: { lv: 'Par mums', en: 'About us', de: 'Über uns' },
  jaunumi: { lv: 'Jaunumi', en: 'News', de: 'Neuigkeiten' },
  ziedojumi: { lv: 'Ziedojumi', en: 'Donations', de: 'Spenden' },
  bilesu_iegade: { lv: 'Biļešu iegāde', en: 'Ticket purchase', de: 'Ticketkauf' },
  privatuma_politika: { lv: 'Privātuma politika', en: 'Privacy policy', de: 'Datenschutzerklärung' },
  sidatnu_politika: { lv: 'Sīkdatņu politika', en: 'Cookie policy', de: 'Cookie-Richtlinie' },
  autortiesibas: { lv: '© Rīgas Vāgnera Nams', en: '© Riga Vagner House', de: '© Rigaer Wagner-Haus' },
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
    { labelKey: 'sidatnu_politika', href: '/sikdatnes' },
  ],
};

interface FooterProps {
  settings?: any;
  lang: string;
}

export default function Footer({ settings, lang }: FooterProps) {
  const currentLang = lang || 'lv';
  
  const sponsors = settings?.sponsors?.length > 0 
    ? settings.sponsors.map((s: any) => s.logo) 
    : DEFAULT_SUPPORTERS;

  return (
    <footer className="w-full">
      {/* Supporters Section */}
      <section 
        className="vag-container text-center"
        style={{ paddingBlock: 'var(--section-padding)' }}
      >
        <h2 className="mb-12 tracking-[0.1em] text-black">{footerLabels.mus_atbalsta[currentLang]}</h2>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-70 grayscale transition-all hover:grayscale-0">
          {sponsors.map((src: string, i: number) => (
            <div key={i} className="relative h-12 w-48">
              <Image
                src={src}
                alt={`Supporter ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Main Footer (Dark) */}
      <div className="bg-[#111111] py-16 text-white">
        <div 
          className="vag-container flex flex-wrap gap-y-10"
        >
          {/* 1st Column: Kontakti (40%) */}
          <div className="w-full md:w-[40%] pr-8">
            <h5 className="mb-6 tracking-[0.2em] text-gray-400">{footerLabels.kontakti[currentLang]}</h5>
            <div className="space-y-3 leading-relaxed text-gray-300">
              <p>{footerLabels.adrese[currentLang]}</p>
              <p>
                {footerLabels.epasts[currentLang]}: <a href="mailto:info@vagneriga.lv" className="hover:text-accent transition-colors">info@vagneriga.lv</a>
              </p>
              <p>{footerLabels.talrunis[currentLang]}: +371 26549664</p>
            </div>
            
            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-800 text-white hover:bg-accent hover:text-black transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-800 text-white hover:bg-accent hover:text-black transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* 2nd Column: Nams (20%) */}
          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.2em] text-gray-400">{footerLabels.nams[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.nams.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors">
                  {footerLabels[link.labelKey][currentLang]}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3rd Column: Biedrība (20%) */}
          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.2em] text-gray-400">{footerLabels.biedriba[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.biedriba.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors">
                  {footerLabels[link.labelKey][currentLang]}
                </Link>
              ))}
            </nav>
          </div>

          {/* 4th Column: Noteikumi (20%) */}
          <div className="w-1/2 md:w-[20%]">
            <h5 className="mb-6 tracking-[0.2em] text-gray-400">{footerLabels.noteikumi[currentLang]}</h5>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.noteikumi.map((link) => (
                <Link key={link.labelKey} href={`/${currentLang}${link.href}`} className="text-gray-300 hover:text-accent transition-colors">
                  {footerLabels[link.labelKey][currentLang]}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="vag-container mt-16 border-t border-gray-800 pt-8 text-gray-500" style={{ fontSize: '12px' }}>
          <p>{footerLabels.autortiesibas[currentLang]} {new Date().getFullYear()}.</p>
        </div>
      </div>
    </footer>
  );
}
