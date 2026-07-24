import { Metadata } from 'next';
import { getPageBySlug, getTranslatedField } from '@/lib/wp';
import { CMS_MEDIA_BASE } from '@/lib/constants';
import SponsorsView from '@/components/blocks/SponsorsView';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('sponsori');
  if (!page?.seo) return { title: 'Sponsors & Donors - Vagneriga' };

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function SponsoriPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (['lv', 'en', 'de'].includes(lang) ? lang : 'lv') as 'lv' | 'en' | 'de';

  const page = await getPageBySlug('sponsori');
  const acf = page?.acf || {};

  const defaultTitles = {
    lv: "SPONSORI UN MECEENĀTI",
    en: "SPONSORS & DONORS",
    de: "SPONSOREN & FÖRDERER"
  };

  const defaultSubtitles = {
    lv: "Rīgas Riharda Vāgnera nams",
    en: "Riga Richard Wagner House",
    de: "Rigaer Richard-Wagner-Haus"
  };

  const defaultTexts = {
    lv: "Rīgas Vāgnera teātra atjaunošana ir iespējama, pateicoties valsts institūciju, fondu, uzņēmumu un privāto ziedotāju dāsnajam atbalstam. Kopā mēs palīdzam atdzīvināt vienu no Eiropas nozīmīgākajām vēsturiskajām teātra ēkām un izveidot jaunu kultūras simbolu nākamajām paaudzēm.",
    en: "The restoration of the Wagner Theatre Riga is made possible through the generous support of public institutions, foundations, companies and private donors. Together, they are helping to revive one of Europe's most significant historic theatre buildings and create a new cultural landmark for future generations.",
    de: "Die Wiederherstellung des Wagner-Theaters in Riga wird durch die großzügige Unterstützung öffentlicher Institutionen, Stiftungen, Unternehmen und privater Spender ermöglicht. Gemeinsam helfen sie, eines der bedeutendsten historischen Theatergebäude Europas zu wiederzubeleben und ein neues Kulturdenkmal für zukünftige Generationen zu schaffen."
  };

  const heroData = {
    title: getTranslatedField(acf, 'hero_title', currentLang, defaultTitles[currentLang]),
    subtitle: getTranslatedField(acf, 'hero_subtitle', currentLang, defaultSubtitles[currentLang]),
    text: getTranslatedField(acf, 'hero_text', currentLang, defaultTexts[currentLang]),
    image: acf.hero_image || `${CMS_MEDIA_BASE}/wp-content/uploads/2025/09/vagnera_nams.png`
  };

  return <SponsorsView lang={currentLang} heroData={heroData} />;
}
