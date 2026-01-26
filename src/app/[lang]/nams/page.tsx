import { Metadata } from 'next';
import { getPageBySlug, getTranslatedField, getFAQs } from '@/lib/wp';
import FAQSection from '@/components/blocks/FAQSection';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('nams');
  if (!page?.seo) return { title: 'Nams - Vagneriga' };

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function NamsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const [page, faqs] = await Promise.all([
    getPageBySlug('nams'),
    getFAQs()
  ]);
  const acf = page?.acf || {};

  const heroData = {
    title: getTranslatedField(acf, 'hero_title', lang, "Nams"),
    subtitle: getTranslatedField(acf, 'hero_subtitle', lang, "Vāgnera"),
    text: getTranslatedField(acf, 'hero_text', lang, "Rīgas Vāgnera nams, uzcelts 1782. gadā..."),
    image: acf.hero_image || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/vagnera_nams.png"
  };

  const vestureContent = {
    title: getTranslatedField(acf, 'vesture_title', lang, "Vēsture"),
    text: getTranslatedField(acf, 'vesture_text', lang, [
      "Jaunais gads iezīmējis otro Vāgnera nama atjaunošanas projekta būvdarbu gadu...",
      "Daudziem ir pārsteigums, ka zem telpas, kas plašāk pazīstama kā Vāgnera vai Musses zāle..."
    ]),
    image: acf.vesture_image || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/vagnera_nams.png"
  };

  const celtniecibaContent = {
    title: getTranslatedField(acf, 'celtnieciba_title', lang, "Celtniecība"),
    text: getTranslatedField(acf, 'celtnieciba_text', lang, [
      "Jaunais gads iezīmējis otro Vāgnera nama atjaunošanas projekta būvdarbu gadu...",
      "Daudziem ir pārsteigums, ka zem telpas, kas plašāk pazīstama kā Vāgnera vai Musses zāle..."
    ]),
    image: acf.celtnieciba_image || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/vagnera_nams.png"
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - 50/50 Split */}
      <section className="vag-container bg-white pb-6">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 pt-12 pb-16 md:pt-16 md:pb-24 pr-6 md:pr-12 lg:pr-20 bg-white flex flex-col">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{heroData.subtitle}</p>
            <h1 className="mb-12 text-black tracking-tight uppercase">{heroData.title}</h1>
            <div className="max-w-xl">
              <p className="text-xl leading-relaxed text-gray-700">
                {heroData.text}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-[var(--card-radius)]">
            <Image 
              src={heroData.image}
              alt={heroData.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Vēsture Section */}
      <section className="py-24 bg-white">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{vestureContent.title}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              {Array.isArray(vestureContent.text) ? vestureContent.text.map((p: string, i: number) => (
                <p key={i} className="text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              )) : (
                <p className="text-lg leading-relaxed text-gray-700">{vestureContent.text}</p>
              )}
            </div>
            <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-[var(--card-radius)] shadow-sm">
              <Image 
                src={vestureContent.image}
                alt={vestureContent.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Celtniecība Section */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{celtniecibaContent.title}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              {Array.isArray(celtniecibaContent.text) ? celtniecibaContent.text.map((p: string, i: number) => (
                <p key={i} className="text-lg leading-relaxed text-gray-700">
                  {p}
                </p>
              )) : (
                <p className="text-lg leading-relaxed text-gray-700">{celtniecibaContent.text}</p>
              )}
            </div>
            <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-[var(--card-radius)] shadow-sm">
              <Image 
                src={celtniecibaContent.image}
                alt={celtniecibaContent.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={faqs} lang={lang} />
    </main>
  );
}
