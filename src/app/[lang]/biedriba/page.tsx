import { Metadata } from 'next';
import { getPageBySlug, getPosts, getTranslatedField, getFAQs } from '@/lib/wp';
import NewsSection from '@/components/blocks/NewsSection';
import FAQSection from '@/components/blocks/FAQSection';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('biedriba');
  if (!page?.seo) return { title: 'Biedrība - Vagneriga' };

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function BiedribaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const [page, { posts: posts }, faqs] = await Promise.all([
    getPageBySlug('biedriba'),
    getPosts({ per_page: 3 }),
    getFAQs()
  ]);

  const acf = page?.acf || {};

  // Map Hero content with translations
  const heroData = {
    title: getTranslatedField(acf, 'hero_title', lang, "Biedrība"),
    subtitle: getTranslatedField(acf, 'hero_subtitle', lang, "Rīgas Riharda Vāgnera nams"),
    quote: getTranslatedField(acf, 'hero_quote', lang, "“Esmu izvirzījis mērķi – dabūt atpakaļ pie dzīvības kādreizējo Rīgas operas teātri, kurā Rihards Vāgners savulaik strādāja. Atjaunot to zāli, kas savulaik Vāgneram iniciēja vairākas izcilas idejas, kuras viņš vēlāk izmantoja, veidojot savu operas teātri Baireitā.”"),
    author: getTranslatedField(acf, 'hero_quote_author', lang, "Māris Gailis, biedrības vadītājs"),
    image: acf.hero_image || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/maris_gailis_intervija_grenardi_digitalais_zurnals_grenazine_lv.jpg"
  };

  // Map About section with translations
  const aboutData = {
    title: getTranslatedField(acf, 'about_title', lang, "Par biedrību"),
    text: getTranslatedField(acf, 'about_text', lang, "Esmu izvirzījis mērķi – dabūt atpakaļ pie dzīvības kādreizējo Rīgas operas teātri, kurā Rihards Vāgners savulaik strādāja. Atjaunot to zāli, kas savulaik Vāgneram iniciēja vairākas izcilas idejas, kuras viņš vēlāk izmantoja, veidojot savu operas teātri Baireitā."),
  };

  // In a real scenario, goals would also have translations like goal_text_lv, goal_text_en...
  const goals = acf.goals?.map((g: any) => ({
    ...g,
    text: getTranslatedField(g, 'text', lang, g.text)
  })) || [
    {
      nr: "1",
      text: lang === 'lv' ? "Rekonstruēt Rīgas pilsētas teātra ēku Riharda Vāgnera ielā 4, atjaunojot tajā teātra zāli." : 
            lang === 'en' ? "Reconstruct the Riga City Theater building at 4 Riharda Vagnera Street, restoring its theater hall." :
            "Rekonstruktion des Gebäudes des Rigaer Stadttheaters in der Riharda-Vagnera-Straße 4, Wiederherstellung seines Theatersaals."
    },
    {
      nr: "2",
      text: lang === 'lv' ? "Ēkas telpās izveidot Riharda Vāgnera muzeju." :
            lang === 'en' ? "Establish a Richard Wagner museum in the building's premises." :
            "Einrichtung eines Richard-Wagner-Museums in den Räumlichkeiten des Gebäudes."
    },
    {
      nr: "3",
      text: lang === 'lv' ? "Padziļināt sapratni par Riharda Vāgnera darbiem un dzīvi." :
            lang === 'en' ? "Deepen the understanding of Richard Wagner's works and life." :
            "Vertiefung des Verständnisses von Richard Wagners Werk und Leben."
    },
    {
      nr: "4",
      text: lang === 'lv' ? "Izveidot Riharda Vāgnera stipendiju fondu, atbalstot Latvijas jauno mūziķu paaudzi." :
            lang === 'en' ? "Create a Richard Wagner scholarship fund, supporting Latvia's young generation of musicians." :
            "Einrichtung eines Richard-Wagner-Stipendienfonds zur Unterstützung der jungen Musikergeneration Lettlands."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - 50/50 Split with Container */}
      <section className="vag-container bg-white pb-6">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 pt-12 pb-16 md:pt-16 md:pb-24 pr-6 md:pr-12 lg:pr-20 bg-white flex flex-col">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{heroData.subtitle}</p>
            <h1 className="mb-12 text-black tracking-tight uppercase">{heroData.title}</h1>
            <div className="max-w-xl border-l-4 border-accent pl-8 py-2">
              <p className="text-xl italic leading-relaxed text-gray-700">
                {heroData.quote}
              </p>
              <p className="mt-6 font-bold tracking-widest uppercase text-black">— {heroData.author}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-[var(--card-radius)]">
            <Image 
              src={heroData.image}
              alt={heroData.author}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* News Section (Shared) */}
      <NewsSection posts={posts} title={getTranslatedField(acf, 'news_title', lang, "Jaunumi")} lang={lang} />

      {/* About Section / Goals */}
      <section className="py-24 bg-white">
        <div className="vag-container">
          <div className="mb-20 flex flex-col items-center text-center">
            <h2 className="text-black uppercase tracking-[0.2em] mb-12">{aboutData.title}</h2>
            <div className="max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-gray-700">
                {aboutData.text}
              </p>
            </div>
          </div>

          <div className="mb-12 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="text-black uppercase tracking-[0.2em]">Mērķi</h3>
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

      {/* FAQ Section (Shared) */}
      <FAQSection items={faqs} lang={lang} />
    </main>
  );
}
