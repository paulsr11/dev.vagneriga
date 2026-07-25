import { Metadata } from 'next';
import { getPageBySlug, getPosts, NEWS_CATEGORY_MAP, isGalleryPost, isPostInLanguage } from '@/lib/wp';
import { CMS_MEDIA_BASE } from '@/lib/constants';
import NewsSection from '@/components/blocks/NewsSection';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('biedriba');
  if (!page?.seo) return { title: 'The Society - Vagneriga' };

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function BiedribaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (['lv', 'en', 'de'].includes(lang) ? lang : 'lv') as 'lv' | 'en' | 'de';

  const [page, result] = await Promise.all([
    getPageBySlug('biedriba'),
    getPosts({ 
      per_page: 10, 
      categories: NEWS_CATEGORY_MAP[currentLang]?.id, 
      lang: currentLang 
    })
  ]);

  const acf = page?.acf || {};

  // Strictly filter news posts for the current language (English posts for /en, etc.)
  const allPosts = result?.posts || [];
  const newsPosts = allPosts.filter((p: any) => !isGalleryPost(p) && isPostInLanguage(p, currentLang)).slice(0, 3);

  // Translations dictionary for the page
  const t = {
    metaSubtitle: {
      lv: "Rīgas Riharda Vāgnera biedrība",
      en: "Riga Richard Wagner Society",
      de: "Rigaer Richard-Wagner-Gesellschaft"
    }[currentLang],

    pageTitle: {
      lv: "BIEDRĪBA",
      en: "THE SOCIETY",
      de: "DER VEREIN"
    }[currentLang],

    heroQuote: {
      lv: "“Mans mērķis vienmēr ir bijis atgriezt dzīvē Rīgas vēsturisko operas teātri — vietu, kur savulaik strādāja Rihards Vāgners. Atjaunojot šo zāli, kurā dzima daudzas no Vāgnera novatoriskajām idejām, mēs atdzīvinām vietu, kas palīdzēja iedvesmot vīziju, ko viņš vēlāk īstenoja Baireitā.”",
      en: "“My goal has always been to bring back to life Riga's historic opera theatre—the very place where Richard Wagner once worked. By restoring this auditorium, where many of Wagner's groundbreaking ideas first took shape, we are reviving a place that helped inspire the vision he later realised in Bayreuth.”",
      de: "„Mein Ziel war es schon immer, Rigas historisches Operntheater wieder zum Leben zu erwecken – genau den Ort, an dem Richard Wagner einst wirkte. Mit der Wiederherstellung dieses Saals, in dem viele von Wagners bahnbrechenden Ideen ihren Anfang nahmen, erwecken wir einen Ort zu neuem Leben, der die Vision inspirierte, die er später in Bayreuth verwirklichte.“"
    }[currentLang],

    heroAuthor: {
      lv: "Māris Gailis, biedrības vadītājs",
      en: "Māris Gailis, Chairman of the Society",
      de: "Māris Gailis, Vereinsvorsitzender"
    }[currentLang],

    aboutTitle: {
      lv: "PAR BIEDRĪBU",
      en: "ABOUT THE SOCIETY",
      de: "ÜBER DEN VEREIN"
    }[currentLang],

    aboutP1: {
      lv: "Dibināta 2015. gadā, Rīgas Riharda Vāgnera biedrība tika izveidota ar vienu skaidru misiju: restaurēt vēsturisko Vāgnera teātri Rīgā un atgriezt tam pienācīgo vietu starp Eiropas vadošajiem kultūras objektiem.",
      en: "Founded in 2015, the Riga Richard Wagner Society was established with one clear mission: to restore the historic Wagner Theatre Riga and return it to its rightful place as one of Europe's leading cultural landmarks.",
      de: "Der 2015 gegründete Rigaer Richard-Wagner-Verein wurde mit einer klaren Mission ins Leben gerufen: das historische Wagner-Theater in Riga zu restaurieren und ihm seinen rechtmäßigen Platz unter den führenden Kulturdenkmälern Europas zurückzugeben."
    }[currentLang],

    aboutP2: {
      lv: "Biedrība apvieno arhitektus, inženierus, vēsturniekus, kultūras nozares profesionāļus un starptautiskos partnerus, kurus vieno kopīga vīzija — saglabāt izcilu Eiropas kultūras mantojuma pieminekli, vienlaikus radot dzīvīgu mājvietu operai, mūzikai un nākamajai mākslinieku paaudzei.",
      en: "The Society brings together architects, engineers, historians, cultural professionals and international partners who share a common vision – to preserve an exceptional monument of European cultural heritage while creating a vibrant home for opera, music and the next generation of artists.",
      de: "Der Verein bringt Architekten, Ingenieure, Historiker, Kulturschaffende und internationale Partner zusammen, die eine gemeinsame Vision teilen: ein außergewöhnliches Denkmal des europäischen Kulturerbes zu bewahren und gleichzeitig eine lebendige Heimat für Oper, Musik und die nächste Künstlergeneration zu schaffen."
    }[currentLang],

    aboutP3: {
      lv: "Restaurācija ir iespējama, pateicoties ciešai sadarbībai starp Latvijas Republiku, Vācijas Federatīvo Republiku, valsts institūcijām, fondiem, uzņēmumiem un simtiem privāto atbalstītāju no visas pasaules. Ikkatrs ieguldījums, vai tas būtu institucionāls vai individuāls, palīdz pietuvināt Vāgnera teātra renesansi īstenībai.",
      en: "The restoration is made possible through close cooperation with the Republic of Latvia, the Federal Republic of Germany, public institutions, foundations, companies and hundreds of private supporters from around the world. Every contribution, whether institutional or individual, helps bring the Renaissance of the Wagner Theatre Riga one step closer to reality.",
      de: "Die Restaurierung wird durch die enge Zusammenarbeit mit der Republik Lettland, der Bundesrepublik Deutschland, öffentlichen Institutionen, Stiftungen, Unternehmen und hunderten privaten Unterstützern aus aller Welt ermöglicht. Jeder Beitrag, ob institutionell oder individuell, hilft, die Renaissance des Wagner-Theaters Riga Wirklichkeit werden zu lassen."
    }[currentLang],

    goalsTitle: {
      lv: "MĒRĶI",
      en: "GOALS",
      de: "ZIELE"
    }[currentLang],

    newsTitle: {
      lv: "JAUNUMI",
      en: "NEWS",
      de: "NACHRICHTEN"
    }[currentLang],

    teamTitle: {
      lv: "PROJEKTA KOMANDA UN PARTNERI",
      en: "THE TEAM BEHIND THE PROJECT",
      de: "DAS TEAM HINTER DEM PROJEKT"
    }[currentLang],

    team: {
      initiatorLabel: { lv: "Projekta iniciators", en: "Project Initiator", de: "Projektinitiator" }[currentLang],
      initiatorVal: "Māris Gailis",
      
      developerLabel: { lv: "Attīstītājs", en: "Developer", de: "Entwickler" }[currentLang],
      developerVal: { lv: "Rīgas Riharda Vāgnera biedrība", en: "Riga Richard Wagner Society", de: "Rigaer Richard-Wagner-Gesellschaft" }[currentLang],

      boardLabel: { lv: "Valdes locekļi", en: "Board Members", de: "Vorstandsmitglieder" }[currentLang],
      boardVal: "Māris Gailis, Māris Kalniņš, Pēteris Šmidre",

      mgmtLabel: { lv: "Vadības komanda", en: "Management", de: "Projektleitung" }[currentLang],
      mgmtVal: "Signe Viška, Konrad Winckler, Laila Segliņa",

      leadArchLabel: { lv: "Vadošais arhitekts", en: "Lead Architect", de: "Chefarchitekt" }[currentLang],
      leadArchVal: { lv: "Zaigas Gailes birojs", en: "Zaiga Gaile's office", de: "Büro Zaiga Gaile" }[currentLang],

      archsLabel: { lv: "Arhitekti", en: "Architects", de: "Architekten" }[currentLang],
      archsVal: "Zaiga Gaile, Filips Pitens, Estere Savicka, Hilda Treija, Sabīne Artamonova, Rūdolfs Leja, Maija Putniņa-Gaile, Kristaps Gailis, Reinijs Tukmanis, Dana Jakimova-Pētersone, Kate Tīna Tomsone",

      techDesignLabel: { lv: "Tehniskā projekta izstrāde", en: "Technical Project Design", de: "Technische Projektplanung" }[currentLang],
      techDesignVal: "Sarma Norde Architects",

      fidicLabel: { lv: "FIDIC inženieris un būvuzraudzība", en: "FIDIC-engineer & Construction Supervision", de: "FIDIC-Ingenieur & Bauüberwachung" }[currentLang],
      fidicVal: "Būves un Būvsistēmas",

      builderLabel: { lv: "Būvnieks", en: "Builder", de: "Bauunternehmen" }[currentLang],
      builderVal: "3A, Jānis Kreicburgs, Valērijs Terentjevs",

      acousticsConsultantLabel: { lv: "Akustikas konsultants", en: "Acoustics Consultant", de: "Akustik-Berater" }[currentLang],
      acousticsConsultantVal: "Nagata Acoustics International, Dr. Yasuhisa Toyota",

      techConsultantLabel: { lv: "Tehnoloģiju konsultants", en: "Technology Consultant", de: "Technologie-Berater" }[currentLang],
      techConsultantVal: "Theateradvies bv (Netherlands)"
    }
  };

  const heroImage = acf.hero_image || '/wp-content/uploads/2025/09/maris_gailis_intervija_grenardi_digitalais_zurnals_grenazine_lv.jpg';

  const goals = [
    {
      nr: "1",
      text: currentLang === 'lv' ? "Rekonstruēt Rīgas pilsētas teātra ēku Riharda Vāgnera ielā 4, atjaunojot tajā teātra zāli." : 
            currentLang === 'en' ? "Reconstruct the Riga City Theater building at 4 Riharda Vagnera Street, restoring its theater hall." :
            "Rekonstruktion des Gebäudes des Rigaer Stadttheaters in der Riharda-Vagnera-Straße 4, Wiederherstellung seines Theatersaals."
    },
    {
      nr: "2",
      text: currentLang === 'lv' ? "Ēkas telpās izveidot Riharda Vāgnera muzeju." :
            currentLang === 'en' ? "Establish a Richard Wagner museum in the building's premises." :
            "Einrichtung eines Richard-Wagner-Museums in den Räumlichkeiten des Gebäudes."
    },
    {
      nr: "3",
      text: currentLang === 'lv' ? "Padziļināt sapratni par Riharda Vāgnera darbiem un dzīvi." :
            currentLang === 'en' ? "Deepen the understanding of Richard Wagner's works and life." :
            "Vertiefung des Verständnisses von Richard Wagners Werk und Leben."
    },
    {
      nr: "4",
      text: currentLang === 'lv' ? "Izveidot Riharda Vāgnera stipendiju fondu, atbalstot Latvijas jauno mūziķu paaudzi." :
            currentLang === 'en' ? "Create a Richard Wagner scholarship fund, supporting Latvia's young generation of musicians." :
            "Einrichtung eines Richard-Wagner-Stipendienfonds zur Unterstützung der jungen Musikergeneration Lettlands."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-black">
      
      {/* SECTION 1: Hero Section (50/50 Split - Same aspect ratio as Sponsors & Contacts) */}
      <section className="vag-container bg-white pb-6 pt-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-left">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{t.metaSubtitle}</p>
            <h1 className="mb-8 text-black tracking-tight uppercase">{t.pageTitle}</h1>
            <div className="max-w-xl border-l-4 border-accent pl-6 py-2">
              <p className="text-base sm:text-lg italic leading-relaxed text-gray-700 font-serif">
                {t.heroQuote}
              </p>
              <p className="mt-4 font-bold tracking-wider uppercase text-black text-xs sm:text-sm font-sans">— {t.heroAuthor}</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--card-radius)] border border-gray-100 shadow-xl">
              <Image 
                src={heroImage}
                alt={t.heroAuthor}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: About the Society (Narrower max-w-2xl layout) */}
      <section className="py-20 bg-white">
        <div className="vag-container max-w-2xl">
          
          {/* Logo Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="relative w-40 h-40 mb-6">
              <Image 
                src="/images/riga_wagner_society_logo.png" 
                alt="Riga Richard Wagner Society Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-black uppercase tracking-[0.2em]">{t.aboutTitle}</h2>
          </div>

          {/* Plain, unboxed text in narrower max-w-2xl container */}
          <div className="space-y-6 text-gray-700 font-sans text-base sm:text-lg leading-relaxed text-center">
            <p className="m-0">{t.aboutP1}</p>
            <p className="m-0">{t.aboutP2}</p>
            <p className="m-0">{t.aboutP3}</p>
          </div>

        </div>
      </section>

      {/* SECTION 3: Goals */}
      <section className="py-20 bg-white">
        <div className="vag-container">
          <div className="mb-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{t.goalsTitle}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal: any) => (
              <div key={goal.nr} className="flex flex-col gap-6 p-10 bg-[#FBFBFB] rounded-xl border border-gray-100 hover:border-accent transition-all hover:shadow-sm group">
                <div className="w-10 h-10 flex items-center justify-center bg-accent text-black rounded-full font-serif font-bold text-xl group-hover:scale-110 transition-transform">
                  {goal.nr}
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {goal.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: The Team Behind the Project */}
      <section className="py-20 bg-white">
        <div className="vag-container max-w-4xl">
          <div className="mb-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{t.teamTitle}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="space-y-8 text-left font-sans">
            
            {/* Initiator & Developer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6 border-b border-gray-100">
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.initiatorLabel}
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {t.team.initiatorVal}
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.developerLabel}
                </p>
                <p className="text-lg font-bold text-gray-900">
                  {t.team.developerVal}
                </p>
              </div>
            </div>

            {/* Board & Management */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6 border-b border-gray-100">
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.boardLabel}
                </p>
                <p className="text-base text-gray-700">
                  {t.team.boardVal}
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.mgmtLabel}
                </p>
                <p className="text-base text-gray-700">
                  {t.team.mgmtVal}
                </p>
              </div>
            </div>

            {/* Architects */}
            <div className="space-y-4 pb-6 border-b border-gray-100">
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.leadArchLabel}
                </p>
                <p className="text-base font-bold text-gray-900">
                  {t.team.leadArchVal}
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.archsLabel}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.team.archsVal}
                </p>
              </div>
            </div>

            {/* Consultants (Acoustics & Technology) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6 border-b border-gray-100">
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.acousticsConsultantLabel}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  {t.team.acousticsConsultantVal}
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.techConsultantLabel}
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  {t.team.techConsultantVal}
                </p>
              </div>
            </div>

            {/* Technical Design, FIDIC & Builder */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.techDesignLabel}
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  {t.team.techDesignVal}
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.fidicLabel}
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  {t.team.fidicVal}
                </p>
              </div>
              <div>
                <p className="font-bold text-black uppercase tracking-wider text-xs mb-1">
                  {t.team.builderLabel}
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  {t.team.builderVal}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: News Section */}
      {newsPosts.length > 0 && (
        <NewsSection posts={newsPosts} title={t.newsTitle} lang={currentLang} />
      )}
    </main>
  );
}
