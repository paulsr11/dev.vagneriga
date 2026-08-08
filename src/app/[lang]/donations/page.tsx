import { Metadata } from 'next';
import FriendDonationWidget from '@/components/blocks/FriendDonationWidget';
import TransferAccountModal from '@/components/blocks/TransferAccountModal';

interface PartnerLogo {
  title: string;
  subtitle: string;
}

interface MajorDonorTier {
  title: string;
  range: string;
  detail: string;
}

interface ChairTier {
  title: string;
  amount: string;
  detail: string;
}

interface RestoreItem {
  title: string;
  text: string;
}

interface ProgressBar {
  label: string;
  value: string;
}

interface FriendTier {
  amount: string;
}

interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    tagline: string;
    title: string;
    text: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    text: string;
    steinmeierRole: string;
    steinmeierComment: string;
    levitsRole: string;
    levitsComment: string;
    evaRole: string;
    evaComment: string;
  };
  partners: {
    logos: PartnerLogo[];
  };
  twoWays: {
    title: string;
    majorDonors: {
      heading: string;
      tiers: MajorDonorTier[];
      button: string;
    };
    chairSponsorship: {
      heading: string;
      tiers: ChairTier[];
      button: string;
    };
  };
  restores: {
    title: string;
    items: RestoreItem[];
  };
  fundraising: {
    title: string;
    raised: string;
    bars?: ProgressBar[];
    status: string;
    timestamp: string;
  };
  friend: {
    subheading: string;
    title: string;
    text: string;
    tiers: FriendTier[];
    buttonText: string;
    step1Title: string;
    step2Title: string;
    monthlyLabel: string;
    oneTimeLabel: string;
    monthSuffix: string;
    oneTimeSuffix: string;
    benefitsHeading?: string;
    benefits: string[];
  };
  transfer: {
    text: string;
    button: string;
  };
}

const translations: Record<string, TranslationContent> = {
  lv: {
    meta: {
      title: 'Atbalstīt restaurāciju – Rīgas Vāgnera nams',
      description: 'Atbalstiet Rīgas Vāgnera teātra restaurāciju. Ziedojiet vai kļūstiet par draugu.'
    },
    hero: {
      tagline: 'ATBALSTĪT RESTAURĀCIJU',
      title: 'Ierakstiet savu vārdu ēkā, kas jūs pārdzīvos',
      text: 'Rīgas Vāgnera teātris ir to ideju dzimtene, kas veidoja Baireitu. €30 miljonu restaurācija to atgriezīs aktīvā dzīvē kā Eiropas mūzikas un mākslas rezidences centru. Mēs aicinām tos, kas tic šai nākotnei, palīdzēt to uzbūvēt.'
    },
    proof: {
      eyebrow: 'ATBALSTS VISAUGSTĀKAJĀ LĪMENĪ',
      title: 'ATBALSTS VISAUGSTĀKAJĀ LĪMENĪ',
      text: 'Rīgas Vāgnera nama rekonstrukcijas projektu un atdzimšanu personīgi atbalsta Vācijas un Latvijas valsts vadītāji un Vāgneru dzimta.',
      steinmeierRole: 'VĀCIJAS FEDERĀLAIS PREZIDENTS',
      steinmeierComment: 'Vācijas Federālais prezidents oficiāli kļuva par projekta patronu, uzsverot Vācijas un Latvijas kopīgo kultūras mantojumu.',
      levitsRole: 'LATVIJAS VALSTS PREZIDENTS (2019–2023)',
      levitsComment: 'Latvijas Valsts prezidents kopā ar Vācijas prezidentu pārņēma patronāžu pār Rīgas Vāgnera nama atdzimšanu.',
      evaRole: 'VĀGNERA MAZMAZMEITA · PATRONE',
      evaComment: 'Riharda Vāgnera mazmazmeita un Baireitas festivāla bijusī līdzdirektore aktīvi atbalsta teātra un muzeja izveidi Rīgā.'
    },
    partners: {
      logos: [
        { title: 'Deutscher Bundestag', subtitle: 'Finansējuma partneris' },
        { title: 'Auswärtiges Amt', subtitle: 'Vācijas Federālā ārlietu ministrija' },
        { title: 'Eva Wagner-Pasquier', subtitle: 'Patrone · Vāgnera mazmazmeita' },
        { title: 'Messerschmitt Stiftung', subtitle: 'Dibināšanas fonda partneris' },
        { title: 'Yasuhisa Toyota', subtitle: 'Akustika · Elbphilharmonie' }
      ]
    },
    twoWays: {
      title: 'VEIDI, KĀ ATBALSTĪT',
      majorDonors: {
        heading: 'LIELIE ZIEDOTĀJI',
        tiers: [
          { title: 'Stratēģiskais partneris', range: '€300 000+', detail: 'Zāles nosaukšana · Uzraudzības padomes vieta' },
          { title: 'Labvēlis', range: '€50 000–300 000', detail: 'Telpas nosaukšana · Pasākumu telpu izmantošana · Biļešu kvota' },
          { title: 'Ziedotājs', range: '€10 000–50 000', detail: 'Ikgadēja atzinība · Piekļuve labdarības koncertiem' }
        ],
        button: 'Apspriest savu iesaisti →'
      },
      chairSponsorship: {
        heading: 'KRĒSLA SPONSORĒŠANA',
        tiers: [
          { title: 'Parters', amount: '€5 000', detail: 'Zāles priekšējā daļa' },
          { title: '1. balkons', amount: '€3 000', detail: 'Balkons' },
          { title: '2. balkons', amount: '€1 000', detail: 'Augšējais balkons' }
        ],
        button: 'Sponsorēt krēslu →'
      }
    },
    restores: {
      title: 'KO ATJAUNO JŪSU IEGULDĪJUMS',
      items: [
        { title: 'Vāgnera teātris', text: 'Vēsturiskais teātris, kurā Rihards Vāgners strādāja par galveno diriģentu un guva iedvesmu idejām, ko vēlāk īstenoja Baireitā. Tā amfiteātra tipa zāle, segtā orķestra bedre un unikālā akustika tiek rūpīgi atjaunota jaunajai paaudzei.' },
        { title: 'Muzejs', text: 'Interaktīvs muzejs, kas pēta Riharda Vāgnera Rīgas gadus, Rīgas Pilsētas teātra vēsturi un vienas no Eiropas nozīmīgākajām vēsturiskajām teātra ēkām ievērojamo restaurāciju.' },
        { title: 'Mājvieta Eiropas māksliniekiem', text: 'Rezidences, mēģinājumu telpas un uzstāšanās iespējas jaunajiem komponistiem, mūziķiem un izpildītājiem — nodrošinot, ka Vāgnera teātris ir ne tikai pagātnes piemineklis, bet arī dzīva skatuve nākotnei.' }
      ]
    },
    fundraising: {
      title: 'Kur tas atrodas šodien',
      raised: 'Piesaistīts līdz šim — €21M no €51M · Atklāšana 2028',
      bars: [],
      status: 'Būvdarbi sākās 2023. gadā. Pamatu izbūves darbi ir pabeigti, un rekonstrukcija turpinās. Kad atlikušais finansējums ir nodrošināts, Vāgnera teātri plānots atkal atvērt 2028. gadā.',
      timestamp: 'Pēdējoreiz atjaunināts: 2026. gada jūlijā'
    },
    friend: {
      subheading: 'PIEEJAMS VISIEM',
      title: 'Kļūsti par Teātra Draugu',
      text: 'Atbalstiet restaurāciju no €10 mēnesī. Jūs tiksiet iekļauti atbalstītāju reģistrā un saņemsiet privātus atjauninājumus, kamēr ēka atgriežas dzīvē.',
      buttonText: 'Ziedot tagad',
      step1Title: '1. Izvēlieties summu un biežumu',
      step2Title: '2. Apstiprināt ziedojumu',
      monthlyLabel: 'Ikmēneša',
      oneTimeLabel: 'Vienreizējs ziedojums',
      monthSuffix: '/ mēnesī',
      oneTimeSuffix: 'vienreizējs',
      benefitsHeading: 'Priekšrocības atbalstītājiem',
      tiers: [{ amount: '€10' }, { amount: '€25' }, { amount: '€50' }],
      benefits: [
        'Ierakstīts gada atbalstītāju reģistrā',
        'Privāts informatīvais biļetens ar restaurācijas atjauninājumiem',
        'Agrīns paziņojums par atklāšanas pasākumiem'
      ]
    },
    transfer: {
      text: 'Vēlaties pārskaitīt tieši?',
      button: 'Rādīt konta datus'
    }
  },
  en: {
    meta: {
      title: 'Support the Restoration – Riga Wagner Theatre',
      description: 'Support the restoration of Wagner Theatre Riga. Donate or become a Friend — help bring this historic building back to life.'
    },
    hero: {
      tagline: 'SUPPORT THE RESTORATION',
      title: 'Put your name in the building that outlasts you',
      text: 'Wagner Theatre Riga is the birthplace of the ideas that shaped Bayreuth. A €30 million restoration will return it to active life as a European centre for music and artistic residency. We are inviting those who believe in that future to help build it.'
    },
    proof: {
      eyebrow: 'ENDORSED AT THE HIGHEST LEVEL',
      title: 'ENDORSED AT THE HIGHEST LEVEL',
      text: "The restoration and revival of Riga's Wagner House is personally endorsed by the heads of state of Germany and Latvia and the Wagner family.",
      steinmeierRole: 'FEDERAL PRESIDENT OF GERMANY',
      steinmeierComment: 'The Federal President of Germany officially assumed patronage, highlighting the shared German-Latvian cultural legacy.',
      levitsRole: 'PRESIDENT OF LATVIA (2019–2023)',
      levitsComment: "The President of Latvia jointly undertook the patronage for the resurrection of Riga's Wagner House.",
      evaRole: "WAGNER'S GREAT-GRANDDAUGHTER · PATRON",
      evaComment: 'Great-granddaughter of Richard Wagner and former co-director of the Bayreuth Festival actively supports the project.'
    },
    partners: {
      logos: [
        { title: 'Deutscher Bundestag', subtitle: 'Funding partner' },
        { title: 'Auswärtiges Amt', subtitle: 'German Federal Foreign Office' },
        { title: 'Eva Wagner-Pasquier', subtitle: "Patron · Wagner's great-granddaughter" },
        { title: 'Messerschmitt Stiftung', subtitle: 'Founding foundation partner' },
        { title: 'Yasuhisa Toyota', subtitle: 'Acoustics · Elbphilharmonie' }
      ]
    },
    twoWays: {
      title: 'WAYS TO SUPPORT',
      majorDonors: {
        heading: 'MAJOR DONORS',
        tiers: [
          { title: 'Strategic Partner', range: '€300,000+', detail: 'Hall naming · Board of Trustees seat' },
          { title: 'Benefactor', range: '€50,000–300,000', detail: 'Room naming · Use of event spaces · Ticket allotment' },
          { title: 'Donor', range: '€10,000–50,000', detail: 'Annual recognition · Benefit concert access' }
        ],
        button: 'Discuss your involvement →'
      },
      chairSponsorship: {
        heading: 'CHAIR SPONSORSHIP',
        tiers: [
          { title: 'Parquet', amount: '€5,000', detail: 'Front section of the hall' },
          { title: '1st tier', amount: '€3,000', detail: 'Balcony' },
          { title: '2nd tier', amount: '€1,000', detail: 'Upper balcony' }
        ],
        button: 'Sponsor a chair →'
      }
    },
    restores: {
      title: 'WHAT YOUR SUPPORT RESTORES',
      items: [
        { title: 'The Wagner Theatre', text: 'The historic theatre where Richard Wagner served as chief conductor and found inspiration for the ideas he later realised in Bayreuth. Its amphitheatre-style auditorium, concealed orchestra pit and unique acoustics are being carefully restored for a new generation.' },
        { title: 'The museum', text: 'An interactive museum exploring Richard Wagner\'s years in Riga, the history of the Riga City Theatre, and the remarkable restoration of one of Europe\'s most significant historic theatre buildings.' },
        { title: 'A home for European artists', text: 'Residencies, rehearsal spaces and performance opportunities for emerging composers, musicians and performers – ensuring that the Wagner Theatre is not only a monument to the past, but a living stage for the future.' }
      ]
    },
    fundraising: {
      title: 'Where it stands today',
      raised: 'Raised to date — €21M of €51M · Opening 2028',
      bars: [],
      status: 'Construction began in 2023. Foundation works are complete, and reconstruction continues. With the remaining funding secured, the Wagner Theatre is planned to reopen in 2028.',
      timestamp: 'Last updated July 2026'
    },
    friend: {
      subheading: 'ALSO OPEN TO ALL',
      title: 'Become a Friend of the Theatre',
      text: "Support the restoration from €10 a month. You'll be listed in the annual supporters register and receive private updates as the building returns to life.",
      buttonText: 'Donate now',
      step1Title: '1. Choose amount & frequency',
      step2Title: '2. Confirm donation',
      monthlyLabel: 'Monthly',
      oneTimeLabel: 'One-time donation',
      monthSuffix: '/ month',
      oneTimeSuffix: 'one-time',
      benefitsHeading: 'Supporter Benefits',
      tiers: [{ amount: '€10' }, { amount: '€25' }, { amount: '€50' }],
      benefits: [
        'Listed in the annual supporters register',
        'Private newsletter with restoration updates',
        'Early notification of opening events'
      ]
    },
    transfer: {
      text: 'Prefer to transfer directly?',
      button: 'Show account details'
    }
  },
  de: {
    meta: {
      title: 'Restaurierung unterstützen – Rigaer Wagner-Theater',
      description: 'Unterstützen Sie die Restaurierung des Wagner-Theaters in Riga. Spenden Sie oder werden Sie Freund.'
    },
    hero: {
      tagline: 'DIE RESTAURIERUNG UNTERSTÜTZEN',
      title: 'Verewigen Sie Ihren Namen in einem Gebäude, das Sie überdauert',
      text: 'Das Wagner-Theater Riga ist der Geburtsort der Ideen, die Bayreuth geprägt haben. Eine Restaurierung für 30 Millionen Euro wird es als europäisches Zentrum für Musik und künstlerische Residenz wieder zum Leben erwecken. Wir laden diejenigen ein, die an diese Zukunft glauben, beim Aufbau zu helfen.'
    },
    proof: {
      eyebrow: 'AUF HÖCHSTER EBENE UNTERSTÜTZT',
      title: 'AUF HÖCHSTER EBENE UNTERSTÜTZT',
      text: 'Die Restaurierung und Wiederbelebung des Wagner-Hauses Riga wird von den Staatsoberhäuptern Deutschlands und Lettlands sowie der Familie Wagner persönlich unterstützt.',
      steinmeierRole: 'DEUTSCHER BUNDESPRÄSIDENT',
      steinmeierComment: 'Der Bundespräsident der Bundesrepublik Deutschland hat offiziell die Schirmherrschaft übernommen und das gemeinsame deutsch-lettische Kulturerbe hervorgehoben.',
      levitsRole: 'PRÄSIDENT VON LETTLAND (2019–2023)',
      levitsComment: 'Der Präsident von Lettland übernahm gemeinsam die Schirmherrschaft für die Wiederauferstehung des Wagner-Hauses Riga.',
      evaRole: 'WAGNERS URENKELIN · SCHIRMHERRIN',
      evaComment: 'Die Urenkelin von Richard Wagner und ehemalige Co-Direktorin der Bayreuther Festspiele unterstützt das Projekt aktiv.'
    },
    partners: {
      logos: [
        { title: 'Deutscher Bundestag', subtitle: 'Fördermittelgeber' },
        { title: 'Auswärtiges Amt', subtitle: 'Deutsches Auswärtiges Amt' },
        { title: 'Eva Wagner-Pasquier', subtitle: 'Schirmherrin · Wagners Urenkelin' },
        { title: 'Messerschmitt Stiftung', subtitle: 'Gründungsstiftungspartner' },
        { title: 'Yasuhisa Toyota', subtitle: 'Akustik · Elbphilharmonie' }
      ]
    },
    twoWays: {
      title: 'WEGE ZU UNTERSTÜTZEN',
      majorDonors: {
        heading: 'GROSSSPENDER',
        tiers: [
          { title: 'Strategischer Partner', range: '€300.000+', detail: 'Saalbenennung · Sitz im Kuratorium' },
          { title: 'Wohltäter', range: '€50.000–300.000', detail: 'Raumbenennung · Nutzung von Veranstaltungsräumen · Kartenkontingent' },
          { title: 'Spender', range: '€10.000–50.000', detail: 'Jährliche Anerkennung · Zugang zu Benefizkonzerten' }
        ],
        button: 'Ihr Engagement besprechen →'
      },
      chairSponsorship: {
        heading: 'STUHLPATENSCHAFT',
        tiers: [
          { title: 'Parkett', amount: '€5.000', detail: 'Vorderer Bereich des Saals' },
          { title: '1. Rang', amount: '€3.000', detail: 'Balkon' },
          { title: '2. Rang', amount: '€1.000', detail: 'Oberer Balkon' }
        ],
        button: 'Stuhl sponsern →'
      }
    },
    restores: {
      title: 'WAS IHR BEITRAG RESTAURIERT',
      items: [
        { title: 'Das Wagner-Theater', text: 'Das historische Theater, in dem Richard Wagner als Chefdirigent wirkte und Inspiration für die Ideen fand, die er später in Bayreuth verwirklichte. Sein amphi-theatralischer Zuschauerraum, der verdeckte Orchestergraben und die einzigartige Akustik werden sorgfältig restauriert.' },
        { title: 'Das Museum', text: 'Ein interaktives Museum, das Richard Wagners Jahre in Riga, die Geschichte des Rigaer Stadttheaters und die bemerkenswerte Restaurierung eines der bedeutendsten historischen Theatergebäude Europas beleuchtet.' },
        { title: 'Ein Zuhause für europäische Künstler', text: 'Residenzen, Probenräume und Auftrittsmöglichkeiten für angehende Komponisten, Musiker und Darsteller – um sicherzustellen, dass das Wagner-Theater nicht nur ein Denkmal der Vergangenheit ist, sondern eine lebendige Bühne für die Zukunft.' }
      ]
    },
    fundraising: {
      title: 'Wo es heute steht',
      raised: 'Bisher gesammelt — €21 Mio. von €51 Mio. · Eröffnung 2028',
      status: 'Der Wiederaufbau begann 2023. Die Fundamentarbeiten sind abgeschlossen. Als nächstes folgt das Tragwerk. Wir eröffnen 2028.',
      timestamp: 'Zuletzt aktualisiert im Juli 2026'
    },
    friend: {
      subheading: 'AUCH FÜR ALLE OFFEN',
      title: 'Werden Sie Freund des Theaters',
      text: 'Unterstützen Sie die Restaurierung ab €10 pro Monat. Sie werden im jährlichen Unterstützerregister aufgeführt und erhalten private Updates, während das Gebäude zum Leben erwacht.',
      buttonText: 'Jetzt spenden',
      step1Title: '1. Betrag & Häufigkeit wählen',
      step2Title: '2. Spende bestätigen',
      monthlyLabel: 'Monatlich',
      oneTimeLabel: 'Einmalige Spende',
      monthSuffix: '/ Monat',
      oneTimeSuffix: 'einmalig',
      benefitsHeading: 'Vorteile für Unterstützer',
      tiers: [{ amount: '€10' }, { amount: '€25' }, { amount: '€50' }],
      benefits: [
        'Im jährlichen Unterstützerregister aufgeführt',
        'Privater Newsletter mit Restaurierungsupdates',
        'Frühzeitige Benachrichtigung über Eröffnungsveranstaltungen'
      ]
    },
    transfer: {
      text: 'Möchten Sie lieber direkt überweisen?',
      button: 'Kontodaten anzeigen'
    }
  }
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (translations[lang] ? lang : 'lv') as 'lv' | 'en' | 'de';
  const t = translations[currentLang];
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function Ziedojumi2Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (translations[lang] ? lang : 'lv') as 'lv' | 'en' | 'de';
  const t = translations[currentLang];

  return (
    <main className="min-h-screen bg-white text-black">

      {/* SECTION 1: Hero / Introduction */}
      <section className="vag-container pt-12 sm:pt-16 pb-8 sm:pb-12">
        <p
          className="font-sans text-gray-400 uppercase tracking-widest mb-4 sm:mb-8"
          style={{ fontSize: 'var(--ui-nav)' }}
        >
          {t.hero.tagline}
        </p>
        <div className="max-w-3xl">
          <h1 className="text-black tracking-tight font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal uppercase mb-4 sm:mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-black leading-relaxed font-sans text-base sm:text-lg md:text-xl">
            {t.hero.text}
          </p>
        </div>
        <div className="h-px bg-gray-200 mt-8 sm:mt-12" />
      </section>

      {/* SECTION 2: Endorsed at the Highest Level & Partner Logos */}
      <section className="vag-container pb-16">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B49661] mb-3">
            {t.proof.eyebrow}
          </p>
          <h2 className="mb-4 sm:mb-6 text-black tracking-tight font-serif text-xl sm:text-2xl md:text-4xl font-normal uppercase">
            {t.proof.title}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-sans">
            {t.proof.text}
          </p>
        </div>

        {/* Patron People Cards Grid (3 patrons matching Rebuilding page) */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {/* Frank-Walter Steinmeier */}
          <div className="bg-white p-6 rounded-[var(--card-radius)] border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div style={{ width: '100%', height: '280px', overflow: 'hidden', borderRadius: 'var(--card-radius-sm)', marginBottom: '1rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/patrons/steinmeier.jpg" alt="Frank-Walter Steinmeier" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%', display: 'block' }} />
              </div>
              <h3 className="font-serif font-bold text-black text-lg leading-snug">Frank-Walter Steinmeier</h3>
              <p className="text-xs text-[#B49661] font-bold uppercase tracking-wider mt-1 mb-3">{t.proof.steinmeierRole}</p>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">
                {t.proof.steinmeierComment}
              </p>
            </div>
          </div>

          {/* Egils Levits */}
          <div className="bg-white p-6 rounded-[var(--card-radius)] border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div style={{ width: '100%', height: '280px', overflow: 'hidden', borderRadius: 'var(--card-radius-sm)', marginBottom: '1rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/patrons/levits.jpg" alt="Egils Levits" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 15%', display: 'block' }} />
              </div>
              <h3 className="font-serif font-bold text-black text-lg leading-snug">Egils Levits</h3>
              <p className="text-xs text-[#B49661] font-bold uppercase tracking-wider mt-1 mb-3">{t.proof.levitsRole}</p>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">
                {t.proof.levitsComment}
              </p>
            </div>
          </div>

          {/* Eva Wagner-Pasquier */}
          <div className="bg-white p-6 rounded-[var(--card-radius)] border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div style={{ width: '100%', height: '280px', overflow: 'hidden', borderRadius: 'var(--card-radius-sm)', marginBottom: '1rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/patrons/wagner.jpg" alt="Eva Wagner-Pasquier" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 0%', display: 'block' }} />
              </div>
              <h3 className="font-serif font-bold text-black text-lg leading-snug">Eva Wagner-Pasquier</h3>
              <p className="text-xs text-[#B49661] font-bold uppercase tracking-wider mt-1 mb-3">{t.proof.evaRole}</p>
              <p className="text-gray-600 text-xs font-sans leading-relaxed">
                {t.proof.evaComment}
              </p>
            </div>
          </div>
        </div>

        {/* Partner Logos Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white"
          style={{ borderRadius: 'var(--card-radius-sm)' }}
        >
          {t.partners.logos.map((logo, i) => (
            <div key={i} className="px-6 py-5 text-left font-sans flex flex-col justify-center">
              <div className="text-black font-semibold text-sm leading-snug">{logo.title}</div>
              <div className="text-gray-500 text-xs mt-1 leading-normal">{logo.subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Two Ways to Support */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="vag-container">
          <h2 className="mb-8 text-black tracking-widest font-serif text-2xl md:text-3xl font-normal">
            {t.twoWays.title}
          </h2>

          <div
            className="grid md:grid-cols-2 border border-gray-200 overflow-hidden bg-white mb-12"
            style={{ borderRadius: 'var(--card-radius)' }}
          >
            {/* Left: Major Donors */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
              <h3
                className="font-sans font-semibold uppercase tracking-widest text-gray-400 mb-8"
                style={{ fontSize: 'var(--ui-nav)' }}
              >
                {t.twoWays.majorDonors.heading}
              </h3>

              <div className="space-y-8">
                {t.twoWays.majorDonors.tiers.map((tier, i) => (
                  <div key={i} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="font-sans font-bold text-black" style={{ fontSize: 'var(--body)' }}>
                        {tier.title}
                      </h4>
                      <span className="font-sans font-bold text-black text-sm">{tier.range}</span>
                    </div>
                    <p className="text-gray-500 font-sans" style={{ fontSize: 'var(--ui-nav)' }}>
                      {tier.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="mailto:info@vagneriga.lv?subject=Major%20Donor%20Inquiry"
                  className="btn-flood inline-flex items-center justify-center border border-[#002142] px-8 font-bold uppercase tracking-wider text-[#002142] hover:bg-[#002142] hover:text-white transition-all w-full"
                  style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
                >
                  {t.twoWays.majorDonors.button}
                </a>
              </div>
            </div>

            {/* Right: Chair Sponsorship */}
            <div className="p-8 md:p-10">
              <h3
                className="font-sans font-semibold uppercase tracking-widest text-gray-400 mb-8"
                style={{ fontSize: 'var(--ui-nav)' }}
              >
                {t.twoWays.chairSponsorship.heading}
              </h3>

              <div className="space-y-4">
                {t.twoWays.chairSponsorship.tiers.map((tier, i) => {
                  const chairLinks = [
                    'https://donate.stripe.com/7sY14pfqz43I37s6lC5ZC03',
                    'https://donate.stripe.com/cNi5kF3HR6bQdM611i5ZC04',
                    'https://donate.stripe.com/cNi3cx7Y70Rw5fA9xO5ZC05',
                  ];
                  return (
                    <a
                      key={i}
                      href={chairLinks[i] || chairLinks[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border border-gray-100 hover:border-[#B49661] rounded-[var(--card-radius-sm)] transition-all hover:shadow-sm group bg-gray-50/50 hover:bg-white"
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="font-sans font-bold text-[#002142] group-hover:text-[#B49661] transition-colors" style={{ fontSize: 'var(--body)' }}>
                          {tier.title}
                        </h4>
                        <span className="font-sans font-bold text-[#B49661] text-base">{tier.amount}</span>
                      </div>
                      <p className="text-gray-500 font-sans text-xs flex items-center justify-between mt-1">
                        <span>{tier.detail}</span>
                        <span className="text-[#002142] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Sponsorēt →</span>
                      </p>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8">
                <a
                  href="https://donate.stripe.com/7sY14pfqz43I37s6lC5ZC03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-flood inline-flex items-center justify-center bg-[#002142] hover:bg-[#001730] border border-[#002142] px-8 font-bold uppercase tracking-wider text-white transition-all w-full shadow-md"
                  style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
                >
                  {t.twoWays.chairSponsorship.button}
                </a>
              </div>
            </div>
          </div>

          {/* Become a Friend / Monthly Donations (Full-width Brand Blue #002142 Card) */}
          <div className="max-w-5xl mx-auto">
            <FriendDonationWidget lang={currentLang} translations={t.friend} />
          </div>
        </div>
      </section>

      {/* SECTION 6: Transfer Footer Box */}
      <section className="vag-container py-8 pb-16">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200 px-8 py-5 bg-white"
          style={{ borderRadius: 'var(--card-radius-sm)' }}
        >
          <p className="font-sans text-gray-600" style={{ fontSize: 'var(--body)' }}>
            {t.transfer.text}
          </p>
          <TransferAccountModal lang={currentLang} buttonText={t.transfer.button} />
        </div>
      </section>

    </main>
  );
}
