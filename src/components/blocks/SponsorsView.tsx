'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Award, Building2, HeartHandshake, ShieldCheck, Users } from 'lucide-react';

interface SupportItem {
  title: string;
  image: string;
  badge?: string;
  text: string;
}

interface PartnerLogo {
  name: string;
  category: string;
  src: string;
}

interface SponsorsViewProps {
  lang: string;
  heroData: {
    title: string;
    subtitle: string;
    text: string;
    image: string;
  };
}

const labels: Record<string, Record<string, string>> = {
  atbalsta: { lv: 'Galvenie Līdzfinansētāji', en: 'Main Co-Funders', de: 'Hauptförderer' },
  partneri: { lv: 'Stratēģiskie Partneri', en: 'Strategic Partners', de: 'Strategische Partner' },
  biedribas: { lv: 'Vāgnera Biedrības', en: 'Wagner Societies', de: 'Wagner-Gesellschaften' },
  ziedotaji: { lv: 'Meceenāti un Ziedotāji', en: 'Donors & Patrons', de: 'Förderer & Spender' },
  uznemumi: { lv: 'Atbalstītāju Uzņēmumi', en: 'Corporate Donors', de: 'Partnerunternehmen' },
  privatpersonas: { lv: 'Privātpersonas', en: 'Private Donors', de: 'Privatpersonen' },
  searchPlaceholder: { lv: 'Meklēt ziedotāju vai uzņēmumu...', en: 'Search donor or company...', de: 'Spender oder Unternehmen suchen...' },
  noResults: { lv: 'Nekas netika atrasts pēc pieprasījuma', en: 'No matching donors found', de: 'Keine Spender gefunden' },
};

const MAIN_SUPPORTERS: Record<string, SupportItem[]> = {
  lv: [
    {
      title: 'Vācijas Ārlietu Ministrija',
      image: '/images/sponsors/auswaertiges-amt.png',
      badge: '5 000 000 € Līdzfinansējums',
      text: 'Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050, atjaunojot un restaurējot Rīgas Vāgnera namu” 5 000 000 eiro apmērā līdzfinansē Vācijas Ārlietu ministrija.'
    },
    {
      title: 'Emisijas Kvotu Izsolīšanas Instruments (EKII)',
      image: '/wp-content/uploads/2025/09/LOGO_EKII-pa-labi_CMYK-300x253.png',
      badge: '15 000 000 € Piešķīrums',
      text: 'Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050” 15 000 000 eiro apmērā finansē EKII. Mērķis: samazināt CO2 emisijas vismaz par 78 982 kgCO2/gadā.'
    }
  ],
  en: [
    {
      title: 'Federal Foreign Office of Germany',
      image: '/images/sponsors/auswaertiges-amt.png',
      badge: '€5,000,000 Grant',
      text: 'The project for greenhouse gas emission reduction and restoration of the Wagner House in Riga is co-financed with €5,000,000 by the Federal Foreign Office of Germany.'
    },
    {
      title: 'Emission Allowance Auctioning Instrument (EKII)',
      image: '/wp-content/uploads/2025/09/LOGO_EKII-pa-labi_CMYK-300x253.png',
      badge: '€15,000,000 Allocation',
      text: 'The environmental restoration and energy efficiency project at Riharda Vagnera Street 4 is funded with €15,000,000 through the emission allowance auctioning instrument.'
    }
  ],
  de: [
    {
      title: 'Auswärtiges Amt der Bundesrepublik Deutschland',
      image: '/images/sponsors/auswaertiges-amt.png',
      badge: '5.000.000 € Kofinanzierung',
      text: 'Das Projekt zur Reduzierung von Treibhausgasemissionen und zur Wiederherstellung des Wagner-Hauses in Riga wird mit 5.000.000 Euro vom Auswärtigen Amt kofinanziert.'
    },
    {
      title: 'Versteigerungsinstrument für Emissionsquoten (EKII)',
      image: '/wp-content/uploads/2025/09/LOGO_EKII-pa-labi_CMYK-300x253.png',
      badge: '15.000.000 € Förderung',
      text: 'Das Energieeffizienz- und Sanierungsprojekt im Wagner-Haus Riga wird im Umfang von 15.000.000 Euro aus dem EKII gefördert.'
    }
  ]
};

const STRATEGIC_PARTNERS: PartnerLogo[] = [
  { name: 'SCHWENK Latvija', category: 'Ģenerālsponsors', src: '/images/sponsors/schwenk.png' },
  { name: 'Rīgas Valstspilsētas Pašvaldība', category: 'Pašvaldības atbalsts', src: '/images/sponsors/riga.png' },
  { name: 'Messerschmitt Stiftung', category: 'Dibināšanas fonds', src: '/images/sponsors/messerschmitt-stiftung.png' },
  { name: 'Vācijas Vēstniecība Rīgā', category: 'Diplomātiskais atbalsts', src: '/images/sponsors/german-embassy.png' },
  { name: 'Richard-Wagner-Verband', category: 'Starptautiskā apvienība', src: '/images/sponsors/richard-wagner-verband.png' },
  { name: 'Latvijas Valsts Meži', category: 'Valsts partneris', src: '/images/sponsors/latvijas-valsts-mezi.png' },
];

const WAGNER_SOCIETIES = [
  { name: 'Richard Wagner Association Berlin-Brandenburg', location: 'Vācija / Germany' },
  { name: 'Richard Wagner Association Coburg', location: 'Vācija / Germany' },
  { name: 'Richard Wagner Association Freiburg', location: 'Vācija / Germany' },
  { name: 'Richard Wagner Association Minden', location: 'Vācija / Germany' },
];

const CORPORATE_DONORS = [
  'City Invest SIA',
  'Ellex Kļaviņš ZAB',
  'Grenardi SIA',
  'Investīciju risinājumi SIA',
  'Inženieru centrs Komforts SIA',
  'JCI Latvia Biedrība',
  'Nordic Partners AS',
  'Omnium Plus SIA',
  'Association of the Four Baltic Noble Corporations',
  'SKG Nordic SIA',
  'Sudraba Arhitektūra SIA',
  'SZK T SIA',
  'SZK un Partneri SIA',
  'Latvijas valsts meži',
  'Valsts kultūrkapitāla fonds',
  'Verttex SIA',
];

const PRIVATE_DONORS = [
  'Āboliņš Gundars', 'Amoliņš Atis', 'Anča Santa', 'Ančs Māris', 'Antāns Andris', 'Avramenko Jeļena',
  'Baklāne Anda', 'Bauze Vaiva', 'Bauer-Schultze Uta Rosa', 'Bayer Harriet Manuela (Dr.)',
  'Belkius Alexandra & Pankrath Klaus-Rüdiger', 'Berger Andreas', 'Bjorks Igors', 'Bluķe Dace',
  'Bossong Franz', 'Breže Andris', 'Broka Baiba', 'Cālītis Pauls Juris', 'Caune Anita', 'Caune Dainis',
  'Čeže Mikus', 'Cine Radmila', 'Čivžele Jana', 'Daudziņa Zane', 'Daudziņš Vilis', 'Domburs Jānis',
  'Draper Charles', 'Dripe Jānis', 'Dundurs Sigits', 'Fabian Sell (Dr.)', 'Firth Denys', 'France Richard',
  'Gabrāne Rebeka', 'Gaile Barbara', 'Gaile Zaiga', 'Gailis Gatis', 'Gailis Māris', 'Gailis Mārtiņs',
  'Gauert Jürgen', 'Geck Sabine', 'Ģelzis Kristaps', 'Giles Martin', 'Gorshkov Timofei', 'Grosa Silvija',
  'Grundwald Peter', 'Hartmann Gabriele Gloria', 'Heinrihsons Ivars', 'Hermanis Alvis', 'Hunt Colin',
  'Ihnow Barbara', 'Irbe Jānis', 'Jākobsons Jānis', 'Kalniņa Ilze', 'Kalniņš Māris', 'Kalniņš Silvija',
  'Kaugure Laima', 'Kirke Frančeska', 'Kirta Nora', 'Kļaviņa Elita', 'Kļaviņš Filips Klāvs', 'Klotiņš Arnolds',
  'Kocherscheid Karl', 'Kovisārs Indulis', 'Kovisārs Pēteris', 'Kusiņš Gunārs', 'Kühne Beatrice (Dr.)',
  'Kupsch-Petzel Heidrun Roswith', 'Lāce Māra', 'Laiviņa Gundega', 'Lichtfeld Brigitte Clara Hedwig',
  'Lielā Dace', 'Liepa Lauris', 'Lorence Renāte', 'Lorenzen-Schmidt Jutta Petra Hilde', 'Luhaera Ilze',
  'Mattes Herta (Dr.)', 'Mähs Angelika', 'McDonald Ieva', 'Messer-Krol Ulrike', 'Miķelsons Kārlis',
  'Mitrēvics Jānis', 'Mkrtchyan Ovik', 'Moeller J. Dr. u. Sigri', 'Mora Maira', 'Muižnieks Indriķis',
  'Neiburga Andra', 'Orrell Margaret', 'Pabrika Diana', 'Pasternaka Kristine', 'Petraškēvičs Juris',
  'Pikāns Andis', 'Pīlēna Ilze', 'Procevska Olga', 'Putāne Agita', 'Putāns Andris', 'Putnina Gaile Maija',
  'Putniņš Didzis', 'Rāvis Guntis', 'Razuma Regīna', 'Riķe Inese', 'Riņķe Astrīda', 'Raddek-Zeretzke Eva',
  'Romans Pauls', 'Roth Thomas', 'Rubene Vija', 'Rubenis Ojārs', 'Rudzāte Daiga', 'Siksne Baiba',
  'Sīlis Andis', 'Sīlis Georgs', 'Schultze Wilfried Alfred Friedrich', 'Skelton Peter', 'Skopiņa Laine',
  'Skujiņa Ligita', 'Slaņķis Māris', 'Smeltere Asnāte', 'Šmite Andra', 'Southern David', 'Spinga Marika',
  'Šteimane Inga', 'Stradiņš Pēteris', 'Strode Aleksandra', 'Supe Ilze', 'Svece Artis', 'Tauriņa Agnese',
  'Tomsone Lolita', 'Upatniece Ilze', 'Upatnieks Gunārs', 'Vaivode Gunda', 'Veisberga Ruta',
  'Verhoustinska Henrieta', 'Vērpe Edgars', 'Vilks Andris', 'Viktorovs Rauls', 'Viktorova Marika',
  'Von Heydebreck H.-G. (Dr.) und M.', 'Walter Ita Marianne', 'Woodhead David', 'Zālīte Margita Margo',
  'Zandersone Iluta', 'Zariņa Guna', 'Zariņš Kristaps', 'Zariņš Reinis', 'Zemzare Ingrīda',
  'Znotiņš Kaspars', 'Zuzāns Jānis', 'Zvirgzdiņš Vitālijs'
];

export default function SponsorsView({ lang = 'lv', heroData }: SponsorsViewProps) {
  const currentLang = (['lv', 'en', 'de'].includes(lang) ? lang : 'lv') as 'lv' | 'en' | 'de';
  const t = (key: string) => labels[key]?.[currentLang] || labels[key]?.lv || '';
  const mainSupporters = MAIN_SUPPORTERS[currentLang] || MAIN_SUPPORTERS.lv;

  const [searchQuery, setSearchQuery] = useState('');

  // Filtered Private Donors
  const filteredDonors = useMemo(() => {
    if (!searchQuery.trim()) return PRIVATE_DONORS;
    const q = searchQuery.toLowerCase().trim();
    return PRIVATE_DONORS.filter(name => name.toLowerCase().includes(q));
  }, [searchQuery]);

  // Filtered Corporate Donors
  const filteredCompanies = useMemo(() => {
    if (!searchQuery.trim()) return CORPORATE_DONORS;
    const q = searchQuery.toLowerCase().trim();
    return CORPORATE_DONORS.filter(name => name.toLowerCase().includes(q));
  }, [searchQuery]);

  // Split private donors into two balanced columns
  const midPoint = Math.ceil(filteredDonors.length / 2);
  const col1 = filteredDonors.slice(0, midPoint);
  const col2 = filteredDonors.slice(midPoint);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* 1. HERO SECTION (With subheading formatted identically to Biedrība page) */}
      <section className="vag-container pt-8 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2 text-left">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
              {heroData.subtitle}
            </p>
            <h1 className="mb-6 text-black tracking-tight uppercase">
              {heroData.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed font-sans max-w-xl mb-8">
              {heroData.text}
            </p>

            {/* Quick Metrics Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#af9f66]">€21M+</div>
                <div className="text-xs text-gray-500 font-sans uppercase tracking-wider mt-1">Piesaistīti fondi</div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-black">140+</div>
                <div className="text-xs text-gray-500 font-sans uppercase tracking-wider mt-1">Meceenāti</div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-black">2028</div>
                <div className="text-xs text-gray-500 font-sans uppercase tracking-wider mt-1">Atklāšanas gads</div>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="w-full lg:w-1/2">
            <div 
              className="relative aspect-[4/3] w-full overflow-hidden shadow-xl border border-gray-100 group rounded-[var(--card-radius)]"
            >
              <Image 
                src={heroData.image}
                alt={heroData.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#af9f66] text-black text-xs font-bold uppercase tracking-wider rounded mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Kultūras Mantojuma Glābšana
                </div>
                <p className="text-sm opacity-90 font-serif italic">Rīgas Riharda Vāgnera Teātris, Riharda Vāgnera ielā 4, Rīgā</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALVENIE LĪDZFINANSĒTĀJI */}
      <section className="py-20 bg-[#F9F9F9] border-t border-b border-gray-200">
        <div className="vag-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">Valsts un Starptautiskais Atbalsts</p>
            <h2 className="text-black uppercase tracking-[0.2em]">
              {t('atbalsta')}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {mainSupporters.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 md:p-10 border border-gray-200 border-t-4 border-t-[#af9f66] shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 rounded-[var(--card-radius)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="relative h-20 w-48 shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-contain object-left" sizes="200px" />
                    </div>
                    {item.badge && (
                      <span className="inline-block bg-[#af9f66]/10 text-[#af9f66] border border-[#af9f66]/30 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-black font-serif text-xl font-bold mb-4 text-left leading-snug">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left font-sans whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STRATĒĢISKIE PARTNERI */}
      <section className="py-20 bg-white">
        <div className="vag-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">Institucionālais un Korporatīvais Atbalsts</p>
            <h2 className="text-black uppercase tracking-[0.2em]">
              {t('partneri')}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {STRATEGIC_PARTNERS.map((partner, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 border border-gray-200 rounded-xl flex flex-col items-center justify-center text-center h-36 hover:border-[#af9f66] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-16 w-full mb-2 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image src={partner.src} alt={partner.name} fill className="object-contain" sizes="160px" />
                </div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider group-hover:text-[#af9f66] transition-colors">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STARPTAUTISKĀS VĀGNERA BIEDRĪBAS */}
      <section className="vag-container py-12">
        <div className="bg-[#111111] text-white p-8 md:p-14 rounded-[var(--card-radius)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/15">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Baireitas Ideju Tīkls</span>
              <h3 className="text-white uppercase tracking-[0.2em] mt-1 font-normal">
                {t('biedribas')}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-sans">
              <Award className="w-4 h-4 text-[#af9f66]" />
              Starptautiskā Vāgnera Biedrību Apvienība
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WAGNER_SOCIETIES.map((society, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-lg text-left hover:border-[#af9f66] transition-colors">
                <div className="text-[#af9f66] text-xs font-bold tracking-widest uppercase mb-2">{society.location}</div>
                <div className="font-serif font-bold text-white text-base leading-snug">{society.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PILNS ZIEDOTĀJU UN ATBALSTĪTĀJU KATALOGS */}
      <section className="py-20 bg-[#F9F9F9] border-t border-gray-200">
        <div className="vag-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">Paldies Par Ieguldījumu</p>
            <h2 className="text-black uppercase tracking-[0.2em]">
              {t('ziedotaji')}
            </h2>
          </div>

          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full bg-white border border-gray-300 rounded-full py-4 pl-12 pr-6 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-[#af9f66] focus:ring-2 focus:ring-[#af9f66]/20 shadow-sm transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-black uppercase"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Companies Grid */}
          {filteredCompanies.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-300">
                <h3 className="text-black font-serif text-xl font-bold uppercase tracking-wider flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#af9f66]" />
                  {t('uznemumi')}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                  {filteredCompanies.length} Uzņēmumi
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredCompanies.map((company, i) => (
                  <div 
                    key={i} 
                    className="bg-white p-4 border border-gray-200 rounded-lg text-center text-sm font-semibold text-gray-800 shadow-sm hover:border-[#af9f66] hover:shadow transition-all"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Private Donors Roster */}
          {filteredDonors.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-300">
                <h3 className="text-black font-serif text-xl font-bold uppercase tracking-wider flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-[#af9f66]" />
                  {t('privatpersonas')}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                  {filteredDonors.length} Meceenāti
                </span>
              </div>

              <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 bg-white p-8 md:p-12 border border-gray-200 shadow-sm rounded-[var(--card-radius)]"
              >
                <div className="space-y-3 text-left">
                  {col1.map((name, i) => (
                    <div key={i} className="border-b border-gray-100 pb-2 text-sm text-gray-800 font-medium font-sans flex items-center justify-between">
                      <span>{name}</span>
                      <span className="text-gray-300 text-xs font-serif italic">Ziedotājs</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 text-left">
                  {col2.map((name, i) => (
                    <div key={i} className="border-b border-gray-100 pb-2 text-sm text-gray-800 font-medium font-sans flex items-center justify-between">
                      <span>{name}</span>
                      <span className="text-gray-300 text-xs font-serif italic">Ziedotājs</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : filteredCompanies.length === 0 ? (
            <div className="py-12 text-center text-gray-400 font-sans">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <p className="text-lg">{t('noResults')}</p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
