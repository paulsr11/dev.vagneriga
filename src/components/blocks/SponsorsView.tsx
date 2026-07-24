'use client';

import Image from 'next/image';
import { Award, Building2, HeartHandshake } from 'lucide-react';

interface SupportItem {
  image: string;
  text: string;
  alt: string;
}

interface PartnerLogo {
  name: string;
  category: { lv: string; en: string; de: string };
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
  heroFunds: { lv: 'Piesaistīti fondi', en: 'Funds Raised', de: 'Eingeworbene Mittel' },
  heroDonors: { lv: 'Ziedotāji un Meceenāti', en: 'Donors & Patrons', de: 'Spender & Förderer' },
  heroOpening: { lv: 'Paredzamā atklāšana', en: 'Target Opening', de: 'Geplante Eröffnung' },
  
  subheadingCoFunders: { lv: 'PUBLISKAIS UN STARPTAUTISKAIS ATBALSTS', en: 'PUBLIC AND INTERNATIONAL SUPPORT', de: 'ÖFFENTLICHE UND INTERNATIONALE FÖRDERUNG' },
  titleCoFunders: { lv: 'GALVENIE ATBALSTĪTĀJI', en: 'MAIN SUPPORTERS', de: 'HAUPTUNTERSTÜTZER' },

  subheadingPartners: { lv: 'Institucionālais un Korporatīvais Atbalsts', en: 'Institutional & Corporate Support', de: 'Institutionelle & Korporative Unterstützung' },
  titlePartners: { lv: 'Stratēģiskie Partneri', en: 'Strategic Partners', de: 'Strategische Partner' },

  subheadingSocieties: { lv: 'STARPTAUTISKAIS TĪKLS', en: 'INTERNATIONAL NETWORK', de: 'INTERNATIONALES NETZWERK' },
  titleSocieties: { lv: 'VĀGNERA BIEDRĪBAS', en: 'WAGNER SOCIETIES', de: 'WAGNER-GESELLSCHAFTEN' },
  badgeSocieties: { lv: 'Starptautiskā Vāgnera Biedrību Apvienība', en: 'International Association of Wagner Societies', de: 'Internationaler Richard-Wagner-Verband' },

  subheadingDonors: { lv: 'Paldies Par Ieguldījumu', en: 'Thank You for Your Support', de: 'Vielen Dank für Ihre Unterstützung' },
  titleDonors: { lv: 'ZIEDOTĀJI', en: 'DONORS', de: 'SPENDER' },

  uznemumiTitle: { lv: 'Atbalstītāju Uzņēmumi', en: 'Corporate Donors', de: 'Partnerunternehmen' },
  uznemumiCount: { lv: '16 Uzņēmumi', en: '16 Companies', de: '16 Unternehmen' },
  privatpersonasTitle: { lv: 'Privātpersonas', en: 'Private Donors', de: 'Privatpersonen' },
  privatpersonasCount: { lv: '140+ Ziedotāji', en: '140+ Donors', de: '140+ Spender' },
  donorBadge: { lv: 'Ziedotājs', en: 'Donor', de: 'Spender' },
};

// Main Co-Funders: EKII FIRST, Auswärtiges Amt SECOND (Headings removed per user request)
const MAIN_SUPPORTERS: Record<string, SupportItem[]> = {
  lv: [
    {
      alt: 'Emisijas Kvotu Izsolīšanas Instruments (EKII)',
      image: '/wp-content/uploads/2025/09/LOGO_EKII-pa-labi_CMYK-300x253.png',
      text: 'Plānots, ka projekta īstenošanas rezultātā oglekļa dioksīda emisiju samazinājums būs vismaz 78 982,24 kgCO2 gadā, savukārt plānotais siltumenerģijas patēriņš apkurei nepārsniegs 87,59 kWh/m2 gadā.'
    },
    {
      alt: 'Vācijas Ārlietu Ministrija',
      image: '/images/sponsors/auswaertiges-amt.png',
      text: 'Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050, atjaunojot un restaurējot Rīgas Vāgnera namu” līdzfinansē Vācijas Ārlietu ministrija.'
    }
  ],
  en: [
    {
      alt: 'Emission Allowance Auctioning Instrument (EKII)',
      image: '/wp-content/uploads/2025/09/LOGO_EKII-pa-labi_CMYK-300x253.png',
      text: 'The project is expected to result in a reduction of carbon dioxide emissions of at least 78 982.24 kgCO2 per year, while the planned energy consumption for heating will not exceed 87.59 kWh/m2 per year.'
    },
    {
      alt: 'Federal Foreign Office of Germany',
      image: '/images/sponsors/auswaertiges-amt.png',
      text: 'The project for greenhouse gas emission reduction and restoration of the Riga Wagner House, Riharda Vagnera Street 4, is co-financed by the Federal Foreign Office of Germany.'
    }
  ],
  de: [
    {
      alt: 'Versteigerungsinstrument für Emissionsquoten (EKII)',
      image: '/wp-content/uploads/2025/09/LOGO_EKII-pa-labi_CMYK-300x253.png',
      text: 'Es wird erwartet, dass das Projekt zu einer Reduzierung der Kohlendioxidemissionen von mindestens 78.982,24 kgCO2 pro Jahr führt, während der geplante Energieverbrauch für Heizung 87,59 kWh/m2 pro Jahr nicht überschreitet.'
    },
    {
      alt: 'Auswärtiges Amt der Bundesrepublik Deutschland',
      image: '/images/sponsors/auswaertiges-amt.png',
      text: 'Das Projekt zur Reduzierung von Treibhausgasemissionen und zur Sanierung des Wagner-Hauses in Riga wird vom Auswärtiges Amt der Bundesrepublik Deutschland kofinanziert.'
    }
  ]
};

const STRATEGIC_PARTNERS: PartnerLogo[] = [
  { 
    name: 'SCHWENK Latvija', 
    category: { lv: 'Ģenerālsponsors', en: 'General Sponsor', de: 'Hauptsponsor' }, 
    src: '/images/sponsors/schwenk.png' 
  },
  { 
    name: 'Rīgas Valstspilsētas Pašvaldība', 
    category: { lv: 'Pašvaldības atbalsts', en: 'Municipal Support', de: 'Kommunale Unterstützung' }, 
    src: '/images/sponsors/riga.png' 
  },
  { 
    name: 'Messerschmitt Stiftung', 
    category: { lv: 'Dibināšanas fonds', en: 'Founding Foundation', de: 'Gründungsstiftung' }, 
    src: '/images/sponsors/messerschmitt-stiftung.png' 
  },
  { 
    name: 'Vācijas Vēstniecība Rīgā', 
    category: { lv: 'Diplomātiskais atbalsts', en: 'Diplomatic Support', de: 'Diplomatische Unterstützung' }, 
    src: '/images/sponsors/german-embassy.png' 
  },
  { 
    name: 'Richard-Wagner-Verband', 
    category: { lv: 'Starptautiskā apvienība', en: 'International Association', de: 'Internationaler Verband' }, 
    src: '/images/sponsors/richard-wagner-verband.png' 
  },
  { 
    name: 'Latvijas Valsts Meži', 
    category: { lv: 'Valsts partneris', en: 'State Partner', de: 'Staatspartner' }, 
    src: '/images/sponsors/latvijas-valsts-mezi.png' 
  },
];

// 5 Wagner Societies to fit in 1 line
const WAGNER_SOCIETIES = [
  { name: 'Richard Wagner Association Berlin-Brandenburg', location: { lv: 'Vācija', en: 'Germany', de: 'Deutschland' } },
  { name: 'Richard Wagner Association Coburg', location: { lv: 'Vācija', en: 'Germany', de: 'Deutschland' } },
  { name: 'Richard Wagner Association Freiburg', location: { lv: 'Vācija', en: 'Germany', de: 'Deutschland' } },
  { name: 'Richard Wagner Association Magdeburg', location: { lv: 'Vācija', en: 'Germany', de: 'Deutschland' } },
  { name: 'Richard Wagner Association Minden', location: { lv: 'Vācija', en: 'Germany', de: 'Deutschland' } },
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

  // Split private donors into two balanced columns
  const midPoint = Math.ceil(PRIVATE_DONORS.length / 2);
  const col1 = PRIVATE_DONORS.slice(0, midPoint);
  const col2 = PRIVATE_DONORS.slice(midPoint);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* 1. HERO SECTION */}
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

            {/* Metrics Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#B49661]">€21M+</div>
                <div className="text-xs text-gray-500 font-sans uppercase tracking-wider mt-1">{t('heroFunds')}</div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#002142]">140+</div>
                <div className="text-xs text-gray-500 font-sans uppercase tracking-wider mt-1">{t('heroDonors')}</div>
              </div>
              <div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-[#002142]">2028</div>
                <div className="text-xs text-gray-500 font-sans uppercase tracking-wider mt-1">{t('heroOpening')}</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* 2. PUBLIC AND INTERNATIONAL SUPPORT / MAIN SUPPORTERS */}
      <section className="py-20 bg-[#F9F9F9] border-t border-b border-gray-200">
        <div className="vag-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">{t('subheadingCoFunders')}</p>
            <h2 className="text-black uppercase tracking-[0.2em]">
              {t('titleCoFunders')}
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {mainSupporters.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 md:p-10 border border-gray-200 border-t-4 border-t-[#B49661] shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 rounded-[var(--card-radius)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="relative h-20 w-48 shrink-0">
                      <Image src={item.image} alt={item.alt} fill className="object-contain object-left" sizes="200px" />
                    </div>
                  </div>
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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">{t('subheadingPartners')}</p>
            <h2 className="text-black uppercase tracking-[0.2em]">
              {t('titlePartners')}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {STRATEGIC_PARTNERS.map((partner, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 border border-gray-200 rounded-xl flex flex-col items-center justify-center text-center h-36 hover:border-[#B49661] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-16 w-full mb-2 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <Image src={partner.src} alt={partner.name} fill className="object-contain" sizes="160px" />
                </div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider group-hover:text-[#B49661] transition-colors">
                  {partner.category[currentLang]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERNATIONAL NETWORK / WAGNER SOCIETIES (5 items in 1 row) */}
      <section className="vag-container py-12">
        <div className="bg-[#002142] text-white p-8 md:p-14 rounded-[var(--card-radius)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/15">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">{t('subheadingSocieties')}</span>
              <h3 className="text-white uppercase tracking-[0.2em] mt-1 font-normal">
                {t('titleSocieties')}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-sans">
              <Award className="w-4 h-4 text-[#B49661]" />
              {t('badgeSocieties')}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WAGNER_SOCIETIES.map((society, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-lg text-left hover:border-[#B49661] transition-colors">
                <div className="text-[#B49661] text-xs font-bold tracking-widest uppercase mb-2">{society.location[currentLang]}</div>
                <div className="font-serif font-bold text-white text-sm leading-snug">{society.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PILNS ZIEDOTĀJU UN ATBALSTĪTĀJU KATALOGS */}
      <section className="py-20 bg-[#F9F9F9] border-t border-gray-200">
        <div className="vag-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-2">{t('subheadingDonors')}</p>
            <h2 className="text-black uppercase tracking-[0.2em]">
              {t('titleDonors')}
            </h2>
          </div>

          {/* Corporate Donors Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-300">
              <h3 className="text-black font-serif text-xl font-bold uppercase tracking-wider flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#B49661]" />
                {t('uznemumiTitle')}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                {t('uznemumiCount')}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CORPORATE_DONORS.map((company, i) => (
                <div 
                  key={i} 
                  className="bg-white p-4 border border-gray-200 rounded-lg text-center text-sm font-semibold text-gray-800 shadow-sm hover:border-[#B49661] hover:shadow transition-all"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Private Donors Roster */}
          <div>
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-300">
              <h3 className="text-black font-serif text-xl font-bold uppercase tracking-wider flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#B49661]" />
                {t('privatpersonasTitle')}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#002142] bg-white px-3 py-1 rounded-full border border-gray-200">
                {t('privatpersonasCount')}
              </span>
            </div>

            <div 
              className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 bg-white p-8 md:p-12 border border-gray-200 shadow-sm rounded-[var(--card-radius)]"
            >
              <div className="space-y-3 text-left">
                {col1.map((name, i) => (
                  <div key={i} className="border-b border-gray-100 pb-2 text-sm text-gray-800 font-medium font-sans flex items-center justify-between">
                    <span>{name}</span>
                    <span className="text-gray-400 text-xs font-serif italic">{t('donorBadge')}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-left">
                {col2.map((name, i) => (
                  <div key={i} className="border-b border-gray-100 pb-2 text-sm text-gray-800 font-medium font-sans flex items-center justify-between">
                    <span>{name}</span>
                    <span className="text-gray-400 text-xs font-serif italic">{t('donorBadge')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
