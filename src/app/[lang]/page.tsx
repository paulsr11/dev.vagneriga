import { Metadata } from 'next';
import { getPageBySlug, getPosts, getTranslatedField } from '@/lib/wp';
import Hero from '@/components/blocks/Hero';
import InfoGrid from '@/components/blocks/InfoGrid';
import ConcertsSection from '@/components/blocks/ConcertsSection';
import NewsSection from '@/components/blocks/NewsSection';
import AboutSection from '@/components/blocks/AboutSection';
import EventsList from '@/components/blocks/EventsList';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('home');
  if (!page?.seo) return { title: 'Vagneriga' };

  return {
    title: page.seo.title,
    description: page.seo.description,
    alternates: { canonical: page.seo.canonical },
    openGraph: {
      title: page.seo.og_title || page.seo.title,
      description: page.og_description || page.seo.description,
      images: page.seo.og_image ? [page.seo.og_image] : [],
    },
  };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const [page, { posts: concertPosts }, { posts: newsPosts }] = await Promise.all([
    getPageBySlug('home'),
    getPosts({ per_page: 3 }), 
    getPosts({ per_page: 3 })
  ]);
  
  const acf = page?.acf || {};

  // 1. Map Hero Slides with translations
  const heroSlides = (acf.hero_slides || acf.slaidi)?.map((slide: any) => ({
    ...slide,
    title: getTranslatedField(slide, 'title', lang, slide.title),
    subtitle: getTranslatedField(slide, 'subtitle', lang, slide.subtitle),
    button_text: getTranslatedField(slide, 'button_text', lang, slide.button_text)
  })) || [
    {
      title: lang === 'lv' ? "MŪZIKA ATGRIEŽAS<br />VĀGNERA NAMĀ" : lang === 'en' ? "MUSIC RETURNS TO<br />VAGNER HOUSE" : "MUSIK KEHRT INS<br />WAGNER-HAUS ZURÜCK",
      subtitle: lang === 'lv' ? "2026.gada sezonas atklāšana" : lang === 'en' ? "Opening of the 2026 season" : "Eröffnung der Saison 2026",
      button_text: lang === 'lv' ? "Biļetes un koncerti" : lang === 'en' ? "Tickets and concerts" : "Tickets und Konzerte",
      image: "https://dev.vagneriga.lv/wp-content/uploads/2025/09/manuel-nageli-NsgsQjHA1mM-unsplash-scaled.jpg"
    },
    {
      title: lang === 'lv' ? "KLEJOJOŠAIS<br />HOLANDIETIS" : lang === 'en' ? "THE FLYING<br />DUTCHMAN" : "DER FLIEGENDE<br />HOLLÄNDER",
      subtitle: lang === 'lv' ? "Operas uzvedums Vāgnera zālē" : lang === 'en' ? "Opera performance in Vagner Hall" : "Opernaufführung in der Wagner-Halle",
      button_text: lang === 'lv' ? "Uzzināt vairāk" : lang === 'en' ? "Learn more" : "Mehr erfahren",
      image: "https://dev.vagneriga.lv/wp-content/uploads/2025/09/larisa-birta-slbOcNlWNHA-unsplash-scaled.jpg"
    }
  ];

  // 2. Map Info Grid Tiles with translations
  const infoTiles = (acf.info_tiles || acf.info_bloki)?.map((tile: any) => ({
    ...tile,
    title: getTranslatedField(tile, 'title', lang, tile.title),
    subtitle: getTranslatedField(tile, 'subtitle', lang, tile.subtitle)
  })) || [
    {
      title: lang === 'lv' ? "Klejojošais holandietis" : lang === 'en' ? "The Flying Dutchman" : "Der fliegende Holländer",
      subtitle: lang === 'lv' ? "2026.gada sezonas atklāšana" : lang === 'en' ? "Opening of the 2026 season" : "Eröffnung der Saison 2026",
      image: "https://dev.vagneriga.lv/wp-content/uploads/2025/09/larisa-birta-slbOcNlWNHA-unsplash-scaled.jpg"
    },
    {
      title: lang === 'lv' ? "Nama restaurācijas grafiks" : lang === 'en' ? "House restoration schedule" : "Zeitplan der Hausrestaurierung",
      subtitle: lang === 'lv' ? "2026.gada sezonas atklāšana" : lang === 'en' ? "Opening of the 2026 season" : "Eröffnung der Saison 2026",
      image: "https://dev.vagneriga.lv/wp-content/uploads/2025/09/IMGC4880_AuroraHDR2019-edit.jpg"
    }
  ];

  // 3. Map About Section with translations
  const aboutData = {
    background: acf.about_background || acf.par_mums_fons || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/vagners_biedriba_picture.jpg",
    logo: acf.about_logo || acf.par_mums_logo || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/VR_logo_white.png",
    title: getTranslatedField(acf, 'about_title', lang, "Par biedrību"),
    items: (acf.about_items || acf.par_mums_punkti)?.map((item: any) => ({
      ...item,
      label: getTranslatedField(item, 'label', lang, item.label)
    })) || [
      { label: lang === 'lv' ? "Mūsu mērķi" : lang === 'en' ? "Our goals" : "Unsere Ziele", link: `/${lang}/biedriba` },
      { label: lang === 'lv' ? "Stipendijas" : lang === 'en' ? "Scholarships" : "Stipendien", link: "#" },
      { label: lang === 'lv' ? 'Atbalstītāji' : lang === 'en' ? 'Supporters' : 'Unterstützer', link: `/${lang}/sponsori` }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Hero Section */}
      <Hero slides={heroSlides} lang={lang} />

      {/* Dynamic Info Grid Section */}
      <InfoGrid tiles={infoTiles} lang={lang} />

      {/* Koncerti Section (was Aktualitātes) */}
      <ConcertsSection posts={concertPosts} lang={lang} />

      {/* Dynamic About Section */}
      <AboutSection data={aboutData} lang={lang} />

      {/* Jaunumi Section */}
      <NewsSection posts={newsPosts} title={getTranslatedField(acf, 'news_title', lang, "Jaunumi")} lang={lang} />

      {/* Dynamic Events List Section (Dynamic later) */}
      <EventsList lang={lang} />

      {/* Footer Spacer */}
      <div className="h-20" />
    </main>
  );
}
