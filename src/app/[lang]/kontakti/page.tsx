import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/wp';

export const metadata: Metadata = {
  title: 'Kontakti - Vagneriga',
  description: 'Rīgas Riharda Vāgnera biedrības kontakti un rekvizīti',
};

export default async function KontaktiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (['lv', 'en', 'de'].includes(lang) ? lang : 'lv') as 'lv' | 'en' | 'de';

  const pageSubtitle = {
    lv: 'Rīgas Riharda Vāgnera biedrība',
    en: 'Riga Richard Wagner Society',
    de: 'Rigaer Richard-Wagner-Gesellschaft'
  }[currentLang];

  const pageTitle = {
    lv: 'SAZINĀTIES AR MUMS',
    en: 'CONTACT US',
    de: 'KONTAKTIEREN SIE UNS'
  }[currentLang];

  const labels = {
    theatreAddress: { lv: 'Teātra adrese', en: 'Theatre location', de: 'Theateradresse' },
    postalAddress: { lv: 'Pasta adrese', en: 'Postal address', de: 'Postadresse' },
    phone: { lv: 'Tālrunis', en: 'Phone', de: 'Telefon' },
    email: { lv: 'E-pasts', en: 'E-mail', de: 'E-Mail' },
    teamTitle: { 
      lv: 'BIEDRĪBAS VADĪBA UN PROJEKTA VADĪTĀJI', 
      en: 'MANAGEMENT & PROJECT MANAGERS', 
      de: 'VORSTAND & PROJEKTLEITUNG' 
    },
    orgDetailsTitle: { 
      lv: 'Rekvizīti', 
      en: 'Organisation Details', 
      de: 'Organisation Details' 
    },
    regNo: { lv: 'Reģistrācijas Nr.', en: 'Registration No.', de: 'Reg.-Nr.' },
    bank: { lv: 'Banka', en: 'Bank', de: 'Bank' },
    swift: 'SWIFT / BIC',
    iban: { lv: 'Konts', en: 'IBAN', de: 'IBAN' },
  };

  const teamMembers = [
    {
      name: 'Māris Gailis',
      role: { lv: 'Valdes priekšsēdētājs', en: 'Chairman of the Board', de: 'Vorstandsvorsitzender' }[currentLang],
      email: 'maris@mg.lv'
    },
    {
      name: 'Signe Viška',
      role: { lv: 'Projekta vadītāja (Latvija)', en: 'Project Manager (Latvia)', de: 'Projektleiterin (Lettland)' }[currentLang],
      email: 'signe.viska@vagneriga.lv'
    },
    {
      name: 'Dr. Konrad Winckler',
      role: { lv: 'Projekta vadītājs (Vācija)', en: 'Project Manager (Germany)', de: 'Projektleiter (Deutschland)' }[currentLang],
      email: 'pm@vagneriga.lv'
    }
  ];

  const mainPhone = '+371 26549664';
  const mainEmail = 'info@vagneriga.lv';
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.974644644124!2d24.10844431603244!3d56.94822298089024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd166000001%3A0x2600505500000000!2sRiharda%20V%C4%81gnera%20iela%204%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1050!5e0!3m2!1slv!2slv!4v1690000000000!5m2!1slv!2slv";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - 50/50 Split */}
      <section className="vag-container bg-white pb-12 pt-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          
          {/* Left Column: Title & Locations */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <p className="mb-3 text-xs font-bold tracking-[0.2em] uppercase text-[#B49661]">
                {pageSubtitle}
              </p>
              <h1 className="mb-10 text-[#002142] font-serif text-3xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-wide leading-tight">
                {pageTitle}
              </h1>
              
              <div className="space-y-6">
                {/* Theatre Location */}
                <div className="flex items-start gap-4">
                  <span className="text-[#B49661] text-xl mt-1 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </span>
                  <div>
                    <p className="font-bold text-[#002142] uppercase tracking-wider text-xs mb-1 font-sans">
                      {labels.theatreAddress[currentLang]}
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 font-sans font-medium">
                      Riharda Vāgnera iela 4, Rīga, LV-1050
                    </p>
                  </div>
                </div>

                {/* Postal Address */}
                <div className="flex items-start gap-4">
                  <span className="text-[#B49661] text-xl mt-1 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  <div>
                    <p className="font-bold text-[#002142] uppercase tracking-wider text-xs mb-1 font-sans">
                      {labels.postalAddress[currentLang]}
                    </p>
                    <p className="text-base sm:text-lg text-gray-800 font-sans font-medium">
                      Balasta dambis 66A, Rīga, LV-1048
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="text-[#B49661] text-xl mt-1 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </span>
                  <div>
                    <p className="font-bold text-[#002142] uppercase tracking-wider text-xs mb-1 font-sans">
                      {labels.phone[currentLang]}
                    </p>
                    <a href={`tel:${mainPhone.replace(/\s+/g, '')}`} className="text-base sm:text-lg text-gray-800 hover:text-[#B49661] transition-colors font-sans font-medium">
                      {mainPhone}
                    </a>
                  </div>
                </div>

                {/* General Email */}
                <div className="flex items-start gap-4">
                  <span className="text-[#B49661] text-xl mt-1 shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  <div>
                    <p className="font-bold text-[#002142] uppercase tracking-wider text-xs mb-1 font-sans">
                      {labels.email[currentLang]}
                    </p>
                    <a href={`mailto:${mainEmail}`} className="text-base sm:text-lg text-gray-800 hover:text-[#B49661] transition-colors font-sans font-medium">
                      {mainEmail}
                    </a>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Right Column: Google Maps iFrame */}
            <div className="w-full lg:w-1/2 min-h-[360px] lg:min-h-[440px] relative overflow-hidden rounded-[var(--card-radius)] border border-gray-200 shadow-md">
              <iframe 
                src={mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Team Members Contacts Section */}
      <section className="py-16 bg-[#F9F9F9] border-t border-gray-200">
        <div className="vag-container">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-[#002142] font-serif text-2xl sm:text-3xl font-normal uppercase tracking-wider">
              {labels.teamTitle[currentLang]}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="font-serif font-bold text-[#002142] text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#B49661] mb-4 font-sans">
                    {member.role}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-sm font-sans font-bold text-[#002142] hover:text-[#B49661] transition-colors inline-flex items-center gap-2"
                  >
                    <span>✉ {member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisation Details Section (Requisites) */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="vag-container max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="text-[#002142] font-serif text-2xl sm:text-3xl font-normal uppercase tracking-wider">
              {labels.orgDetailsTitle[currentLang]}
            </h2>
          </div>

          <div className="bg-gray-50 p-8 sm:p-10 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-[#002142] font-serif text-xl sm:text-2xl font-bold mb-6 border-b border-gray-200 pb-4">
              Rigas Riharda Vagnera biedriba
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans">
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">
                  {labels.regNo[currentLang]}
                </span>
                <span className="font-bold text-gray-900 text-base">40008232307</span>
              </div>

              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">
                  {labels.bank[currentLang]}
                </span>
                <span className="font-bold text-gray-900 text-base">Swedbank Latvia</span>
              </div>

              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">
                  {labels.swift}
                </span>
                <span className="font-bold text-gray-900 text-base">HABALV22</span>
              </div>

              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">
                  {labels.iban[currentLang]}
                </span>
                <span className="font-mono font-bold text-[#002142] text-lg select-all">LV85HABA0551039565078</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
