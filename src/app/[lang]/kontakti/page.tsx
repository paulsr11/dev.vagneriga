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
  teatra_adrese: { lv: 'Teātra adrese', en: 'Theatre location', de: 'Theateradresse' },
  pasta_adrese: { lv: 'Pasta adrese', en: 'Postal address', de: 'Postadresse' },
  epasts: { lv: 'E-pasts', en: 'E-mail', de: 'E-Mail' },
  komanda: { lv: 'Biedrības vadība un projekta vadītāji', en: 'Management & Project Managers', de: 'Vorstand & Projektleitung' },
  rekviziti: { lv: 'Rekvizīti', en: 'Organisation Details', de: 'Organisation Details' },
  reg_nr: { lv: 'Reģ. Nr.', en: 'Registration No.', de: 'Reg.-Nr.' },
  banka: { lv: 'Banka', en: 'Bank', de: 'Bank' },
  swift: { lv: 'Swift', en: 'Swift', de: 'Swift' },
  konts: { lv: 'Konts', en: 'IBAN', de: 'IBAN' },
};

export default async function KontaktiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (['lv', 'en', 'de'].includes(lang) ? lang : 'lv') as 'lv' | 'en' | 'de';

  const [page, faqs] = await Promise.all([
    getPageBySlug('kontakti'),
    getFAQs()
  ]);
  const acf = page?.acf || {};

  const heroData = {
    title: currentLang === 'lv' ? "SAZINĀTIES AR MUMS" : currentLang === 'de' ? "KONTAKTIEREN SIE UNS" : "CONTACT US",
    subtitle: currentLang === 'lv' ? "Rīgas Riharda Vāgnera biedrība" : currentLang === 'de' ? "Rigaer Richard-Wagner-Gesellschaft" : "Riga Richard Wagner Society",
    phone: acf.phone || "+371 26549664",
    theatreAddress: "Riharda Vāgnera iela 4, Rīga, LV-1050",
    postalAddress: "Balasta dambis 66A, Rīga, LV-1048",
    email: acf.email || "info@vagneriga.lv",
    map_url: acf.map_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.974644644124!2d24.10844431603244!3d56.94822298089024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd166000001%3A0x2600505500000000!2sRiharda%20V%C4%81gnera%20iela%204%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1050!5e0!3m2!1slv!2slv!4v1690000000000!5m2!1slv!2slv"
  };

  const teamMembers = [
    {
      name: 'Māris Gailis',
      role: currentLang === 'lv' ? 'Valdes priekšsēdētājs' : currentLang === 'de' ? 'Vorstandsvorsitzender' : 'Chairman of the Board',
      email: 'maris@mg.lv'
    },
    {
      name: 'Signe Viška',
      role: currentLang === 'lv' ? 'Projekta vadītāja (Latvija)' : currentLang === 'de' ? 'Projektleiterin (Lettland)' : 'Project Manager (Latvia)',
      email: 'signe.viska@vagneriga.lv'
    },
    {
      name: 'Dr. Konrad Winckler',
      role: currentLang === 'lv' ? 'Projekta vadītājs (Vācija)' : currentLang === 'de' ? 'Projektleiter (Deutschland)' : 'Project Manager (Germany)',
      email: 'pm@vagneriga.lv'
    }
  ];

  const rekviziti = [
    {
      title: "Rigas Riharda Vagnera biedriba",
      details: [
        { label: labels.reg_nr[currentLang], value: "40008232307" },
        { label: labels.banka[currentLang], value: "Swedbank Latvia" },
        { label: labels.swift[currentLang], value: "HABALV22" },
        { label: labels.konts[currentLang], value: "LV85HABA0551039565078" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - 50/50 Split (Same aspect ratio as Sponsors & Association) */}
      <section className="vag-container bg-white pb-6 pt-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Details Column */}
          <div className="w-full md:w-1/2 text-left">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{heroData.subtitle}</p>
            <h1 className="mb-8 text-black tracking-tight uppercase">{heroData.title}</h1>
            
            <div className="space-y-6">
              {/* Theatre Location */}
              <div className="flex items-start gap-4">
                <span className="text-accent text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm mb-1">{labels.teatra_adrese[currentLang]}</p>
                  <p className="text-base sm:text-lg text-gray-700">{heroData.theatreAddress}</p>
                </div>
              </div>

              {/* Postal Address */}
              <div className="flex items-start gap-4">
                <span className="text-accent text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm mb-1">{labels.pasta_adrese[currentLang]}</p>
                  <p className="text-base sm:text-lg text-gray-700">{heroData.postalAddress}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="text-accent text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm mb-1">{labels.talrunis[currentLang]}</p>
                  <a href={`tel:${heroData.phone.replace(/\s+/g, '')}`} className="text-base sm:text-lg text-gray-700 hover:text-accent transition-colors">{heroData.phone}</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="text-accent text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <div>
                  <p className="font-bold text-black uppercase tracking-wider text-sm mb-1">{labels.epasts[currentLang]}</p>
                  <a href={`mailto:${heroData.email}`} className="text-base sm:text-lg text-gray-700 hover:text-accent transition-colors">{heroData.email}</a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Map Column */}
          <div className="w-full md:w-1/2 relative aspect-[4/3] w-full min-h-[280px] sm:min-h-[340px] md:min-h-[380px] overflow-hidden rounded-[var(--card-radius)] border border-gray-100 shadow-xl">
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

      {/* Team Members Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="vag-container">
          <div className="mb-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{labels.komanda[currentLang]}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-black font-serif text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-xs text-accent font-bold uppercase tracking-wider mb-4">{member.role}</p>
                </div>
                <a href={`mailto:${member.email}`} className="text-gray-700 hover:text-accent font-medium text-sm transition-colors">
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rekviziti Section (Original Design restored) */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{labels.rekviziti[currentLang]}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="max-w-2xl mx-auto">
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
      <FAQSection items={faqs} lang={currentLang} />
    </main>
  );
}
