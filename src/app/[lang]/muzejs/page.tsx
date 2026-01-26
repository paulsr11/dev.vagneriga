import { Metadata } from 'next';
import { getPageBySlug, getPosts, getCategoryBySlug, getTranslatedField, getFAQs } from '@/lib/wp';
import FAQSection from '@/components/blocks/FAQSection';
import NewsSection from '@/components/blocks/NewsSection';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('muzejs');
  if (!page?.seo) return { title: 'Muzejs - Vagneriga' };

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

const labels: Record<string, { [key: string]: string }> = {
  apmekletajiem: { lv: 'Apmeklētājiem', en: 'For visitors', de: 'Für Besucher' },
  muzeja_darba_laiki: { lv: 'Muzeja darba laiki', en: 'Museum working hours', de: 'Öffnungszeiten des Museums' },
  biletes: { lv: 'Biļetes', en: 'Tickets', de: 'Tickets' },
  pirkt: { lv: 'PIRKT', en: 'BUY', de: 'KAUFEN' },
  muzeja_kontakti: { lv: 'Muzeja kontakti', en: 'Museum contacts', de: 'Kontakte des Museums' },
  talrunis: { lv: 'Tālrunis', en: 'Phone', de: 'Telefon' },
  epasts: { lv: 'E-pasts', en: 'E-mail', de: 'E-Mail' },
  eksponati: { lv: 'Eksponāti', en: 'Exhibits', de: 'Exponate' },
};

export default async function MuzejsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const category = await getCategoryBySlug('eksponati');
  
  const [page, { posts: eksponati }, faqs] = await Promise.all([
    getPageBySlug('muzejs'),
    getPosts({ 
      per_page: 3, 
      categories: category?.id 
    }),
    getFAQs()
  ]);

  const acf = page?.acf || {};

  const heroData = {
    title: getTranslatedField(acf, 'hero_title', lang, "Muzejs"),
    subtitle: getTranslatedField(acf, 'hero_subtitle', lang, "Vāgnera nams"),
    text: getTranslatedField(acf, 'hero_text', lang, "Rīgas Vāgnera nams, uzcelts 1782. gadā..."),
    image: acf.hero_image || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/manuel-nageli-NsgsQjHA1mM-unsplash-scaled.jpg"
  };

  const workingHours = acf.working_hours || [
    { day: lang === 'lv' ? "Pirmdiena – Piektdiena" : lang === 'en' ? "Monday – Friday" : "Montag – Freitag", time: "09:00 – 19:00" },
    { day: lang === 'lv' ? "Sestdiena" : lang === 'en' ? "Saturday" : "Samstag", time: "09:00 – 19:00" },
    { day: lang === 'lv' ? "Svētdiena" : lang === 'en' ? "Sunday" : "Sonntag", time: "09:00 – 19:00" },
  ];

  const tickets = acf.tickets || [
    { type: lang === 'lv' ? "Pieaugušo biļete" : lang === 'en' ? "Adult ticket" : "Erwachsenenkarte", price: "EUR 10.00" },
    { type: lang === 'lv' ? "Studentu biļete" : lang === 'en' ? "Student ticket" : "Studentenkarte", price: "EUR 10.00" },
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
            <h2 className="text-black uppercase tracking-[0.2em]">{labels.apmekletajiem[lang]}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h3 className="text-black text-sm font-bold tracking-widest uppercase mb-8 border-b border-gray-100 pb-4">{labels.muzeja_darba_laiki[lang]}</h3>
              <div className="space-y-4">
                {workingHours.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600">{item.day}</span>
                    <span className="font-bold text-black">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-black text-sm font-bold tracking-widest uppercase mb-8 border-b border-gray-100 pb-4">{labels.biletes[lang]}</h3>
              <div className="space-y-4">
                {tickets.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600">{item.type}</span>
                    <div className="flex items-center gap-6">
                      <span className="font-bold text-black">{item.price}</span>
                      <Link href="#" className="font-bold text-accent uppercase tracking-widest text-xs hover:text-black transition-colors">{labels.pirkt[lang]} ›</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8">
            <h3 className="text-black text-sm font-bold tracking-widest uppercase mb-6">{labels.muzeja_kontakti[lang]}</h3>
            <div className="flex flex-col md:flex-row gap-8">
              <p className="text-gray-700">{labels.talrunis[lang]}: <span className="font-bold text-black">+371 26549664</span></p>
              <p className="text-gray-700">{labels.epasts[lang]}: <span className="font-bold text-black">info@vagneriga.lv</span></p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F9F9F9]">
        <NewsSection 
          posts={eksponati} 
          title={labels.eksponati[lang]} 
          lang={lang}
        />
      </div>

      <FAQSection items={faqs} lang={lang} />
    </main>
  );
}
