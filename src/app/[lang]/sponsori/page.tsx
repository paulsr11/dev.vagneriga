import { Metadata } from 'next';
import { getPageBySlug, getTranslatedField } from '@/lib/wp';
import { CMS_MEDIA_BASE } from '@/lib/constants';
import SponsorsView from '@/components/blocks/SponsorsView';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('sponsori');
  if (!page?.seo) return { title: 'Sponsori - Vagneriga' };

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function SponsoriPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const page = await getPageBySlug('sponsori');
  const acf = page?.acf || {};

  const heroData = {
    title: getTranslatedField(acf, 'hero_title', lang, "SPONSORI"),
    subtitle: getTranslatedField(acf, 'hero_subtitle', lang, "Vāgnera Biedrības"),
    text: getTranslatedField(acf, 'hero_text', lang, "Rīgas Vāgnera nams, uzcelts 1782. gadā, sākotnēji tika dēvēts par Rīgas Pilsētas teātri. Periodā no 1837. līdz 1839. gadam, kad par galveno teātra diriģentu tika iecelts Rihards Vāgners, nams kļuva par Rīgas kultūras dzīves centru."),
    image: acf.hero_image || `${CMS_MEDIA_BASE}/wp-content/uploads/2025/09/vagnera_nams.png`
  };

  return <SponsorsView lang={lang} heroData={heroData} />;
}

