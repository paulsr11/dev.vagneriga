import { Metadata } from 'next';
import { getPageBySlug, getTranslatedField } from '@/lib/wp';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('sponsori');
  if (!page?.seo) return { title: 'Sponsori - Vagneriga' };

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

const labels: Record<string, { [key: string]: string }> = {
  atbalsta: { lv: 'Atbalsta', en: 'Supported by', de: 'Unterstützt von' },
  partneri: { lv: 'Partneri', en: 'Partners', de: 'Partner' },
  ziedotaji: { lv: 'Ziedotāji', en: 'Donors', de: 'Spender' },
  uznemumi: { lv: 'Uzņēmumi', en: 'Companies', de: 'Unternehmen' },
  privatpersonas: { lv: 'Privātpersonas', en: 'Private Donors', de: 'Privatpersonen' },
};

export default async function SponsoriPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const page = await getPageBySlug('sponsori');
  const acf = page?.acf || {};

  const heroData = {
    title: getTranslatedField(acf, 'hero_title', lang, "Sponsori"),
    subtitle: getTranslatedField(acf, 'hero_subtitle', lang, "Vāgnera biedrības"),
    text: getTranslatedField(acf, 'hero_text', lang, "Rīgas Vāgnera nams, uzcelts 1782. gadā..."),
    image: acf.hero_image || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/vagnera_nams.png"
  };

  const supportItems = acf.support_items?.map((item: any) => ({
    ...item,
    text: getTranslatedField(item, 'text', lang, item.text)
  })) || [
    {
      image: "https://dev.vagneriga.lv/wp-content/uploads/2025/09/AA_2017_Office_Farbe_de-650x385-1.png",
      text: lang === 'lv' ? "Projektu... līdzfinansē Vācijas Ārlietu ministrija." : "Project... co-financed by the German Foreign Office."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
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

      <section className="py-24 bg-white">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{labels.atbalsta[lang]}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            {supportItems.map((item: any, index: number) => (
              <div key={index} className="flex flex-col items-center text-center md:text-left md:items-start gap-8">
                <div className="relative h-32 w-full max-w-[200px]">
                  <Image src={item.image} alt="Support Logo" fill className="object-contain object-center md:object-left" />
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9F9F9]">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{labels.partneri[lang]}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          {/* ... existing partners mapping ... */}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-black uppercase tracking-[0.2em]">{labels.ziedotaji[lang]}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="mb-16">
            <h3 className="text-center mb-12 text-gray-400 font-medium tracking-widest text-sm uppercase">{labels.uznemumi[lang]}</h3>
            {/* ... existing companies mapping ... */}
          </div>

          <div>
            <h3 className="text-center mb-12 text-gray-400 font-medium tracking-widest text-sm uppercase">{labels.privatpersonas[lang]}</h3>
            {/* ... existing donors mapping ... */}
          </div>
        </div>
      </section>
    </main>
  );
}
