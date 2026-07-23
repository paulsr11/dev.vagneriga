import { Metadata } from 'next';

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
    text: string;
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
    bars: ProgressBar[];
    status: string;
    timestamp: string;
  };
  friend: {
    subheading: string;
    title: string;
    text: string;
    tiers: FriendTier[];
    button: string;
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
      text: 'Rīgas Vāgnera teātris ir to ideju dzimtene, kas veidoja Baireitu. €30 miljonu restaurācija to atgriezīs aktīvā dzīvē kā Eiropas mūzikas un mākslas rezidences centru. Mēs aicinām tos, kas tic šai nākotnei, palīdzēt to uzbūvēt.'
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
      title: 'DIVI VEIDI, KĀ ATBALSTĪT',
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
      title: 'KO JŪSU ATBALSTS RESTAURĒ',
      items: [
        { title: 'Orķestra bedre', text: 'Pirmā segta bedre operas vēsturē – Vāgnera inovācija, iecerēta un pirmoreiz realizēta šeit, Rīgā, 1837. gadā' },
        { title: 'Teātra zāle', text: 'Stāvs grieķu stila izkārtojums, aptumšota auditorija – telpiskās koncepcijas, ko Vāgners aizveda uz Baireitu, atjaunotas sākotnējā veidā' },
        { title: 'Mājas Eiropas māksliniekiem', text: 'Rezidences studijas un mēģinājumu telpas topošajiem komponistiem un izpildītājiem – ēkas otrā dzīve ārpus muzeja' }
      ]
    },
    fundraising: {
      title: 'Kur tas atrodas šodien',
      raised: 'Piesaistīts līdz šim — €21M no €51M · Atklāšana 2028',
      bars: [
        { label: 'Bundestāga €5M grants', value: '€5M' },
        { label: '~Messerschmitt fonds', value: '~€1M' },
        { label: 'Atlicis piesaistīt', value: '€30M' }
      ],
      status: 'Rekonstrukcija sākās 2023. gadā. Pamatu darbi ir pabeigti. Nākamā ir zāles izbūve. Atklājam 2028. gadā.',
      timestamp: 'Pēdējoreiz atjaunināts: 2026. gada jūlijā'
    },
    friend: {
      subheading: 'PIEEJAMS VISIEM',
      title: 'Kļūsti par Teātra Draugu',
      text: 'Atbalstiet restaurāciju no €10 gadā. Jūs tiksiet iekļauti atbalstītāju reģistrā un saņemsiet privātus atjauninājumus, kamēr ēka atgriežas dzīvē.',
      tiers: [{ amount: '€10' }, { amount: '€25' }, { amount: '€50' }],
      button: 'Kļūt par Draugu →',
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
      text: 'Wagner Theatre Riga is the birthplace of the ideas that shaped Bayreuth. A €30 million restoration will return it to active life as a European centre for music and artistic residency. We are inviting those who believe in that future to help build it.'
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
      title: 'TWO WAYS TO SUPPORT',
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
        { title: 'The orchestra pit', text: 'The first covered pit in opera history — Wagner\'s innovation, conceived and first realised here in Riga in 1837' },
        { title: 'The theatre hall', text: 'Steep Greek-style seating, darkened auditorium — the spatial principles Wagner took to Bayreuth, restored to their original form' },
        { title: 'A home for European artists', text: "Residency studios and rehearsal space for emerging composers and performers — the building's second life beyond the museum" }
      ]
    },
    fundraising: {
      title: 'Where it stands today',
      raised: 'Raised to date — €21M of €51M · Opening 2028',
      bars: [
        { label: 'Bundestag €5M grant', value: '€5M' },
        { label: '~€1M Messerschmitt Foundation', value: '~€1M' },
        { label: 'Still to raise', value: '€30M' }
      ],
      status: 'Reconstruction began in 2023. Foundation works are complete. The hall structure is next. We open in 2028.',
      timestamp: 'Last updated July 2026'
    },
    friend: {
      subheading: 'ALSO OPEN TO ALL',
      title: 'Become a Friend of the Theatre',
      text: "Support the restoration from €10 a year. You'll be listed in the annual supporters register and receive private updates as the building returns to life.",
      tiers: [{ amount: '€10' }, { amount: '€25' }, { amount: '€50' }],
      button: 'Become a Friend →',
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
      text: 'Das Wagner-Theater Riga ist der Geburtsort der Ideen, die Bayreuth geprägt haben. Eine Restaurierung für 30 Millionen Euro wird es als europäisches Zentrum für Musik und künstlerische Residenz wieder zum Leben erwecken. Wir laden diejenigen ein, die an diese Zukunft glauben, beim Aufbau zu helfen.'
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
      title: 'ZWEI WEGE ZU UNTERSTÜTZEN',
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
        { title: 'Der Orchestergraben', text: 'Der erste überdachte Graben in der Operngeschichte – Wagners Innovation, erdacht und erstmals hier in Riga 1837 realisiert' },
        { title: 'Der Theatersaal', text: 'Steile Bestuhlung im griechischen Stil, abgedunkeltes Auditorium – die räumlichen Prinzipien, die Wagner nach Bayreuth brachte, in ihrer ursprünglichen Form wiederhergestellt' },
        { title: 'Ein Zuhause für europäische Künstler', text: 'Residenzstudios und Probenräume für aufstrebende Komponisten und Interpreten – das zweite Leben des Gebäudes jenseits des Museums' }
      ]
    },
    fundraising: {
      title: 'Wo es heute steht',
      raised: 'Bisher gesammelt — €21 Mio. von €51 Mio. · Eröffnung 2028',
      bars: [
        { label: 'Bundestag €5M Förderung', value: '€5M' },
        { label: '~€1M Messerschmitt Stiftung', value: '~€1M' },
        { label: 'Verbleibender Spendenbedarf', value: '€30M' }
      ],
      status: 'Der Wiederaufbau begann 2023. Die Fundamentarbeiten sind abgeschlossen. Als nächstes folgt das Tragwerk. Wir eröffnen 2028.',
      timestamp: 'Zuletzt aktualisiert im Juli 2026'
    },
    friend: {
      subheading: 'AUCH FÜR ALLE OFFEN',
      title: 'Werden Sie Freund des Theaters',
      text: 'Unterstützen Sie die Restaurierung ab €10 pro Jahr. Sie werden im jährlichen Unterstützerregister aufgeführt und erhalten private Updates, während das Gebäude zum Leben erwacht.',
      tiers: [{ amount: '€10' }, { amount: '€25' }, { amount: '€50' }],
      button: 'Freund werden →',
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
      <section className="vag-container pt-16 pb-12">
        <p
          className="font-sans text-gray-400 uppercase tracking-widest mb-8"
          style={{ fontSize: 'var(--ui-nav)' }}
        >
          {t.hero.tagline}
        </p>
        <div className="max-w-2xl">
          <p className="text-black leading-relaxed font-sans" style={{ fontSize: 'var(--h5)' }}>
            {t.hero.text}
          </p>
        </div>
        <div className="h-px bg-gray-200 mt-12" />
      </section>

      {/* SECTION 2: Partner Logos */}
      <section className="vag-container pb-12">
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
            className="grid md:grid-cols-2 border border-gray-200 overflow-hidden bg-white"
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
                <button
                  className="btn-flood inline-flex items-center justify-center border border-black px-8 font-bold uppercase tracking-wider text-black transition-all w-full"
                  style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
                >
                  {t.twoWays.majorDonors.button}
                </button>
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

              <div className="space-y-8">
                {t.twoWays.chairSponsorship.tiers.map((tier, i) => (
                  <div key={i} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="font-sans font-bold text-black" style={{ fontSize: 'var(--body)' }}>
                        {tier.title}
                      </h4>
                      <span className="font-sans font-bold text-black text-sm">{tier.amount}</span>
                    </div>
                    <p className="text-gray-500 font-sans" style={{ fontSize: 'var(--ui-nav)' }}>
                      {tier.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button
                  className="btn-flood inline-flex items-center justify-center bg-black px-8 font-bold uppercase tracking-wider text-white transition-all w-full"
                  style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
                >
                  {t.twoWays.chairSponsorship.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: What Your Support Restores */}
      <section className="py-16 bg-white">
        <div className="vag-container">
          <div
            className="border border-gray-200 overflow-hidden"
            style={{ borderRadius: 'var(--card-radius)' }}
          >
            {/* Header */}
            <div className="px-8 md:px-10 pt-8 pb-2">
              <h2 className="text-black tracking-widest font-serif text-2xl md:text-3xl font-normal">
                {t.restores.title}
              </h2>
            </div>

            {/* Items */}
            <div className="px-8 md:px-10 pb-8 pt-6 space-y-8">
              {t.restores.items.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-6 h-px bg-gray-300 mt-[10px]" />
                  <div>
                    <h4 className="font-sans font-bold text-black mb-1" style={{ fontSize: 'var(--body)' }}>
                      {item.title}
                    </h4>
                    <p className="text-gray-600 font-sans leading-relaxed" style={{ fontSize: 'var(--body)' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4b: Where it stands today — 1:1 from Rebuilding page */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="vag-container max-w-3xl">
          <div className="border-2 border-[#af9f66] p-8 md:p-12 bg-white text-center shadow-lg" style={{ borderRadius: 'var(--card-radius)' }}>
            <h2 className="text-black uppercase tracking-widest mb-4 font-sans font-bold text-xl">
              {t.fundraising.title}
            </h2>
            <div className="text-3xl md:text-5xl font-serif font-bold text-[#af9f66] mb-8">
              {t.fundraising.raised}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 h-5 rounded-full overflow-hidden mb-8 border border-gray-200 p-0.5">
              <div
                className="bg-[#af9f66] h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(21 / 51) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-sans font-semibold text-gray-600 mb-8 border-b border-gray-100 pb-6">
              {t.fundraising.bars.map((bar, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded">
                  <span className="block text-xs text-gray-400 uppercase mb-1">{bar.label}</span>
                  <span className="text-[#af9f66] font-bold text-base">{bar.value}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 font-sans max-w-xl mx-auto text-lg leading-relaxed">
              {t.fundraising.status}
            </p>
          </div>

          <p className="text-right text-xs text-gray-400 font-sans italic mt-4">
            {t.fundraising.timestamp}
          </p>
        </div>
      </section>

      {/* SECTION 5: Become a Friend */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="vag-container">
          <p
            className="font-sans text-gray-400 uppercase tracking-widest mb-8"
            style={{ fontSize: 'var(--ui-nav)' }}
          >
            {t.friend.subheading}
          </p>

          <div
            className="border border-gray-200 bg-white overflow-hidden"
            style={{ borderRadius: 'var(--card-radius)' }}
          >
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left */}
                <div>
                  <h2 className="mb-4 text-black tracking-widest font-serif text-2xl md:text-3xl font-normal">
                    {t.friend.title}
                  </h2>
                  <p className="text-gray-600 font-sans leading-relaxed mb-8" style={{ fontSize: 'var(--body)' }}>
                    {t.friend.text}
                  </p>

                  <div className="flex items-center gap-3 mb-8 flex-wrap">
                    {t.friend.tiers.map((tier, i) => (
                      <button
                        key={i}
                        className={`border font-sans font-bold text-sm px-5 transition-all ${
                          i === 1
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 bg-white text-black hover:border-black'
                        }`}
                        style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)' }}
                      >
                        {tier.amount}
                      </button>
                    ))}
                    <span className="text-gray-400 font-sans text-sm">/ year</span>
                  </div>

                  <button
                    className="btn-flood inline-flex items-center justify-center border border-black px-8 font-bold uppercase tracking-wider text-black transition-all"
                    style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
                  >
                    {t.friend.button}
                  </button>
                </div>

                {/* Right: Benefits */}
                <div className="md:pt-2">
                  <ul className="space-y-4">
                    {t.friend.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-gray-600" style={{ fontSize: 'var(--body)' }}>
                        <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8L6.5 11.5L13 5" stroke="#af9f66" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
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
          <button
            className="btn-flood inline-flex items-center justify-center border border-black px-8 font-bold uppercase tracking-wider text-black transition-all flex-shrink-0"
            style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
          >
            {t.transfer.button}
          </button>
        </div>
      </section>

    </main>
  );
}
