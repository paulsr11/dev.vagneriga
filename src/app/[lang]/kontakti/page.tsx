import { Metadata } from 'next';
import { getPageBySlug, getTranslatedField, getFAQs } from '@/lib/wp';
import FAQSection from '@/components/blocks/FAQSection';

export const metadata: Metadata = {
  title: 'Kontakti - Vagneriga',
  description: 'Rīgas Riharda Vāgnera nama kontakti',
};

const labels: Record<string, { [key: string]: string }> = {
  talrunis: { lv: 'Tālrunis', en: 'Phone', de: 'Telefon' },
  adrese: { lv: 'Adrese', en: 'Address', de: 'Adresse' },
  epasts: { lv: 'E-pasts', en: 'E-mail', de: 'E-Mail' },
  darba_laiki: { lv: 'Darba laiki', en: 'Working hours', de: 'Öffnungszeiten' },
  biedribas_darba_laiki: { lv: 'Biedrības darba laiki', en: 'Association working hours', de: 'Öffnungszeiten des Vereins' },
  muzeja_darba_laiki: { lv: 'Muzeja darba laiki', en: 'Museum working hours', de: 'Öffnungszeiten des Museums' },
  biedribas_kontakti: { lv: 'Biedrības kontakti', en: 'Association contacts', de: 'Kontakte des Vereins' },
  muzeja_kontakti: { lv: 'Muzeja kontakti', en: 'Museum contacts', de: 'Kontakte des Museums' },
  rekviziti: { lv: 'Rekvizīti', en: 'Requisites', de: 'Bankverbindung' },
};

export default async function KontaktiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const [page, faqs] = await Promise.all([
    getPageBySlug('kontakti'),
    getFAQs()
  ]);
  const acf = page?.acf || {};

  const heroData = {
    title: getTranslatedField(acf, 'hero_title', lang, "Kontakti"),
    subtitle: getTranslatedField(acf, 'hero_subtitle', lang, "Rīgas Riharda Vāgnera nams"),
    phone: acf.phone || "+371 26549664",
    address: getTranslatedField(acf, 'address', lang, "Riharda Vāgnera iela 4, Rīga, LV-1050"),
    email: acf.email || "info@vagneriga.lv",
    map_url: acf.map_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.974644644124!2d24.10844431603244!3d56.94822298089024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd166000001%3A0x2600505500000000!2sRiharda%20V%C4%81gnera%20iela%204%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1050!5e0!3m2!1slv!2slv!4v1690000000000!5m2!1slv!2slv"
  };

  const workingHours = acf.working_hours || {
    biedriba: [
      { day: lang === 'lv' ? "Pirmdiena – Piektdiena" : lang === 'en' ? "Monday – Friday" : "Montag – Freitag", time: "09:00 – 19:00" },
      { day: lang === 'lv' ? "Sestdiena" : lang === 'en' ? "Saturday" : "Samstag", time: "09:00 – 19:00" },
      { day: lang === 'lv' ? "Svētdiena" : lang === 'en' ? "Sunday" : "Sonntag", time: "09:00 – 19:00" },
    ],
    muzejs: [
      { day: lang === 'lv' ? "Pirmdiena – Piektdiena" : lang === 'en' ? "Monday – Friday" : "Montag – Freitag", time: "09:00 – 19:00" },
      { day: lang === 'lv' ? "Sestdiena" : lang === 'en' ? "Saturday" : "Samstag", time: "09:00 – 19:00" },
      { day: lang === 'lv' ? "Svētdiena" : lang === 'en' ? "Sunday" : "Sonntag", time: "09:00 – 19:00" },
    ]
  };

  const rekviziti = acf.rekviziti || [
    {
      title: lang === 'lv' ? "Rīgas Riharda Vāgnera biedrība" : "Riga Richard Wagner Association",
      details: [
        { label: "Reģ. Nr.", value: "40008232307" },
        { label: "Banka", value: "Swedbank Latvia" },
        { label: "Swift", value: "HABALV22" },
        { label: "Konts", value: "LV85HABA0551039565078" }
      ]
    },
    {
      title: lang === 'lv' ? "SIA Rīgas Riharda Vāgnera Nams" : "SIA Riga Richard Wagner House",
      details: [
        { label: "Reģ. Nr.", value: "40008232307" },
        { label: "Banka", value: "Swedbank Latvia" },
        { label: "Swift", value: "HABALV22" },
        { label: "Konts", value: "LV85HABA0551039565078" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - 50/50 Split */}
      <section className="vag-container bg-white pb-6">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 pt-12 pb-16 md:pt-16 md:pb-24 pr-6 md:pr-12 lg:pr-20 bg-white flex flex-col">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{heroData.subtitle}</p>
            <h1 className="mb-12 text-black tracking-tight uppercase">{heroData.title}</h1>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-accent text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm mb-1">{labels.talrunis[lang]}</p>
                  <a href={`tel:${heroData.phone.replace(/\s+/g, '')}`} className="text-lg text-gray-700 hover:text-accent transition-colors">{heroData.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm mb-1">{labels.adrese[lang]}</p>
                  <p className="text-lg text-gray-700">{heroData.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-accent text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm mb-1">{labels.epasts[lang]}</p>
                  <a href={`mailto:${heroData.email}`} className="text-lg text-gray-700 hover:text-accent transition-colors">{heroData.email}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 min-h-[400px] md:min-h-0 relative overflow-hidden rounded-[var(--card-radius)] border border-gray-100 shadow-sm">
            <iframe 
              src={heroData.map_url} 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Darba laiki Section */}
      <section className="py-24 bg-white">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{labels.darba_laiki[lang]}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            {/* Biedriba */}
            <div className="space-y-12">
              <div>
                <h3 className="text-black text-sm font-bold tracking-widest uppercase mb-8 border-b border-gray-100 pb-4">{labels.biedribas_darba_laiki[lang]}</h3>
                <div className="space-y-4">
                  {workingHours.biedriba.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-bold text-black">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-black text-sm font-bold tracking-widest uppercase mb-6">{labels.biedribas_kontakti[lang]}</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">{labels.talrunis[lang]}: <span className="font-bold text-black">+371 26549664</span></p>
                  <p className="text-gray-700">{labels.epasts[lang]}: <span className="font-bold text-black">info@vagneriga.lv</span></p>
                </div>
              </div>
            </div>

            {/* Muzejs */}
            <div className="space-y-12">
              <div>
                <h3 className="text-black text-sm font-bold tracking-widest uppercase mb-8 border-b border-gray-100 pb-4">{labels.muzeja_darba_laiki[lang]}</h3>
                <div className="space-y-4">
                  {workingHours.muzejs.map((item: any, i: number) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-bold text-black">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-black text-sm font-bold tracking-widest uppercase mb-6">{labels.muzeja_kontakti[lang]}</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">{labels.talrunis[lang]}: <span className="font-bold text-black">+371 26549664</span></p>
                  <p className="text-gray-700">{labels.epasts[lang]}: <span className="font-bold text-black">info@vagneriga.lv</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rekviziti Section */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{labels.rekviziti[lang]}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            {rekviziti.map((org: any, index: number) => (
              <div key={index} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-black font-serif text-xl mb-8">{org.title}</h3>
                <div className="space-y-4">
                  {org.details.map((detail: any, i: number) => (
                    <div key={i} className="flex justify-between border-b border-gray-50 pb-2 last:border-0">
                      <span className="text-gray-500 text-sm uppercase tracking-wider">{detail.label}</span>
                      <span className="text-black font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={faqs} lang={lang} />
    </main>
  );
}
