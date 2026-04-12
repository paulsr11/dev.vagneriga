import { Metadata } from 'next';
import { getPageBySlug, getTranslatedField } from '@/lib/wp';
import { CMS_MEDIA_BASE } from '@/lib/constants';
import Image from 'next/image';
import {
  GALVENIE_LOGO_AA,
  GALVENIE_LOGO_EKII,
  galvenieAtbalstitajiParagraphs,
  RIHARDA_VAGNERA_BIEDRIBAS,
  FONDI_UN_ORGANIZACIJAS,
  PRIVATPERSONAS,
} from '@/data/atbalstitaji-page';

const FALLBACK_HERO = {
  title_lv: 'Atbalstītāji',
  title_en: 'Supporters',
  title_de: 'Unterstützer',
  subtitle_lv: 'Rīgas Riharda Vāgnera biedrība',
  subtitle_en: 'Riga Richard Wagner Society',
  subtitle_de: 'Richard-Wagner-Gesellschaft Riga',
  text_lv:
    'Biedrības darbību un projekta īstenošanu atbalsta valsts institūcijas, organizācijas un privātpersonas. Sirsnīgs paldies ikvienam.',
  text_en:
    'The society’s work and the project are supported by public institutions, organisations, and private individuals. Our sincere thanks to everyone.',
  text_de:
    'Die Arbeit des Vereins und die Projektumsetzung werden von staatlichen Institutionen, Organisationen und Privatpersonen unterstützt. Herzlichen Dank an alle.',
};

const SECTION_LABELS = {
  galvenie: { lv: 'Galvenie atbalstītāji', en: 'Main supporters', de: 'Hauptförderer' },
  projekta_partneri: { lv: 'Projekta partneri', en: 'Project partners', de: 'Projektpartner' },
  ziedotaji: { lv: 'Ziedotāji', en: 'Donors', de: 'Spender' },
  rwv: { lv: 'Riharda Vāgnera biedrības', en: 'Richard Wagner associations', de: 'Richard-Wagner-Verbände' },
  fondi: { lv: 'Fondi un organizācijas', en: 'Foundations and organisations', de: 'Stiftungen und Organisationen' },
  privati: { lv: 'Privātpersonas', en: 'Individuals', de: 'Privatpersonen' },
} as const;

function sectionLabel(key: keyof typeof SECTION_LABELS, lang: string): string {
  const l = lang === 'en' || lang === 'de' ? lang : 'lv';
  return SECTION_LABELS[key][l];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: _lang } = await params;
  const page = await getPageBySlug('sponsori');
  if (!page?.seo) return { title: 'Atbalstītāji - Vagneriga' };
  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function AtbalstitajiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const page = await getPageBySlug('sponsori');
  const acf = (page?.acf as Record<string, unknown>) || {};

  const galvenieParagraphs = galvenieAtbalstitajiParagraphs(lang);
  const [g1, g2, g3] = galvenieParagraphs;

  const heroData = {
    title: getTranslatedField(acf, 'hero_title', lang, (FALLBACK_HERO as Record<string, string>)[`title_${lang}`] || FALLBACK_HERO.title_lv) as string,
    subtitle: getTranslatedField(acf, 'hero_subtitle', lang, (FALLBACK_HERO as Record<string, string>)[`subtitle_${lang}`] || FALLBACK_HERO.subtitle_lv) as string,
    text: getTranslatedField(acf, 'hero_text', lang, (FALLBACK_HERO as Record<string, string>)[`text_${lang}`] || FALLBACK_HERO.text_lv) as string,
    image: (acf.hero_image || `${CMS_MEDIA_BASE}/wp-content/uploads/2025/09/vagnera_nams.png`) as string,
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="vag-container bg-white pb-6">
        <div className="flex flex-col md:flex-row items-stretch">
          <div className="w-full md:w-1/2 pt-12 pb-16 md:pt-16 md:pb-24 pr-6 md:pr-12 lg:pr-20 bg-white flex flex-col">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">{heroData.subtitle}</p>
            <h1 className="mb-12 text-black tracking-tight uppercase">{heroData.title}</h1>
            <div className="max-w-xl">
              <p className="text-xl leading-relaxed text-gray-700">{heroData.text}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden rounded-[var(--card-radius)]">
            <Image
              src={typeof heroData.image === 'string' ? heroData.image : `${CMS_MEDIA_BASE}/wp-content/uploads/2025/09/vagnera_nams.png`}
              alt={heroData.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-black uppercase tracking-[0.2em]">{sectionLabel('galvenie', lang)}</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="rounded-xl border border-gray-100 bg-[#F9F9F9] p-10 md:p-14 lg:p-16">
            <div className="grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-20">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-10 h-32 w-full max-w-md md:mb-12 md:h-40">
                  <Image
                    src={GALVENIE_LOGO_AA}
                    alt="Auswärtiges Amt"
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 768px) 400px, 100vw"
                  />
                </div>
                <p className="max-w-xl font-serif text-base leading-relaxed text-gray-800 md:text-lg">{g1}</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-10 h-32 w-full max-w-xs md:mb-12 md:h-40 md:max-w-sm">
                  <Image
                    src={GALVENIE_LOGO_EKII}
                    alt="EKII"
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 768px) 320px, 100vw"
                  />
                </div>
                <p className="max-w-xl font-serif text-base leading-relaxed text-gray-800 md:text-lg">{g2}</p>
                <p className="mt-6 max-w-xl font-serif text-base leading-relaxed text-gray-800 md:mt-8 md:text-lg">{g3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#F9F9F9] py-24">
        <div className="vag-container">
          <div className="mb-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-black uppercase tracking-[0.2em]">{sectionLabel('projekta_partneri', lang)}</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="mb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">{sectionLabel('ziedotaji', lang)}</p>
            <h3 className="mb-6 text-black font-serif text-xl uppercase tracking-tight md:text-2xl">{sectionLabel('rwv', lang)}</h3>
            <ul className="space-y-2 text-gray-700 md:columns-2 md:gap-x-12">
              {RIHARDA_VAGNERA_BIEDRIBAS.map((name) => (
                <li key={name} className="break-inside-avoid leading-relaxed">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 border-t border-gray-200 pt-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">{sectionLabel('ziedotaji', lang)}</p>
            <h3 className="mb-6 text-black font-serif text-xl uppercase tracking-tight md:text-2xl">{sectionLabel('fondi', lang)}</h3>
            <ul className="space-y-2 text-gray-700 md:columns-2 md:gap-x-12">
              {FONDI_UN_ORGANIZACIJAS.map((name) => (
                <li key={name} className="break-inside-avoid leading-relaxed">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">{sectionLabel('ziedotaji', lang)}</p>
            <h3 className="mb-6 text-black font-serif text-xl uppercase tracking-tight md:text-2xl">{sectionLabel('privati', lang)}</h3>
            <ul className="space-y-1 text-sm text-gray-700 md:columns-2 md:gap-x-10 lg:columns-3">
              {PRIVATPERSONAS.map((name) => (
                <li key={name} className="break-inside-avoid py-0.5 leading-snug">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
