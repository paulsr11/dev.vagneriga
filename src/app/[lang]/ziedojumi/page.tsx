import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/wp';
import ZiedojumiClient from './ZiedojumiClient';

export const metadata: Metadata = {
  title: 'Ziedojumi - Vagneriga',
  description: 'Ziedo Vāgnera nama atjaunošanai',
};

const FALLBACK_DATA = {
  heroData: {
    title: 'Ziedo Vāgnera nama atjaunošanai',
    subtitle: 'Palīdzi atjaunot vienu no nozīmīgākajiem kultūras namiem Latvijā. Tava iesaiste palīdz saglabāt Vāgnera nama vērtību nākamajām paaudzēm.',
    cta: 'ZIEDOT TAGAD',
    note: 'Katrs ziedojums ir solis tuvāk Vāgnera nama atdzimšanai.',
    image: 'https://dev.vagneriga.lv/wp-content/uploads/2025/09/vagnera_nams.png',
  },
  doneContent: {
    title: 'Ceļš uz Vāgnera nama atjaunošanu',
    paragraphs: [
      'Vāgnera nams ir unikāls kultūras piemineklis ar bagātu vēsturi, kas šobrīd atrodas atjaunošanas procesā. Pēdējos gados ir sperti nozīmīgi soļi, lai nodrošinātu nama saglabāšanu, juridisko un kultūras pamatu tā atdzimšanai.',
      'Ziedojumi ļauj mums strādāt sistemātiski un atbildīgi – sagatavojot projektus, piesaistot speciālistus, veidojot sadarbības un uzturot biedrības darbību.',
    ],
    listTitle: 'Tavs ziedojums palīdz:',
    listItems: [
      'sagatavot atjaunošanas un attīstības projektus',
      'piesaistīt ekspertus un partnerus',
      'uzturēt biedrības ikdienas darbību',
      'nodrošināt komunikāciju ar sabiedrību un atbalstītājiem',
    ],
  },
  donationOptions: [
    {
      name: 'Mazais atbalsts',
      description: 'Iespēja ikvienam iesaistīties Vāgnera nama atjaunošanā un kļūt par daļu no šī nozīmīgā kultūras procesa.',
      amount: 'no 10 EUR',
      cta: 'ZIEDOT'
    },
    {
      name: 'Partnera atbalsts',
      description: 'Atbalsts, kas būtiski palīdz projektu attīstībai un biedrības darbības nodrošināšanai.',
      amount: 'no 100 EUR',
      cta: 'ZIEDOT'
    },
    {
      name: 'Ģenerālpartnera atbalsts',
      description: 'Nozīmīgs ieguldījums Vāgnera nama nākotnē. Piemērots uzņēmumiem un privātpersonām, kas vēlas ilgtermiņa ietekmi.',
      amount: 'no 1000 EUR',
      cta: 'ZIEDOT'
    }
  ],
  transparency: {
    title: 'Atklātība un atbildība',
    intro: 'Mums ir svarīgi, lai katrs ziedotājs skaidri zinātu, kā tiek izmantoti ziedotie līdzekļi.',
    usedFor: [
      'projektu vadībai un biedrības ikdienas darbības nodrošināšanai;',
      'komunikācijas un sabiedrības informēšanas aktivitātēm;',
      'biedrības reprezentācijai starptautiskā vidē, lai popularizētu projektu un paplašinātu atbalstītāju loku;',
      'ekspertu un speciālistu piesaistei;',
      'topošā Vāgnera muzeja ierīkošanai;',
      'autentisku interjera priekšmetu un mēbeļu iegādei;',
      'Vāgnera nama atjaunošanas darbu sadaļām, kas nevar tikt finansētas no jau piesaistīto fondu līdzekļiem, piemēram, ekspertīze, Nagata Acoustics akustiķu pakalpojumi u. c.'
    ],
    notUsedFor: [
      'komerciālām vai ar biedrības mērķiem nesaistītām aktivitāēm'
    ],
    trustNote: 'Ar biedrības mērķiem var iepazīties biedrības statūtos.',
    trustNoteLink: { text: 'statūtos', href: '/documents/RRVB_statuti.pdf', openInNewTab: true }
  },
  rekviziti: [
    {
      title: 'Rīgas Riharda Vāgnera biedrība',
      details: [
        { label: 'Reģ. Nr.', value: '40008232307' },
        { label: 'Banka', value: 'Swedbank Latvia' },
        { label: 'Swift', value: 'HABALV22' },
        { label: 'Konts', value: 'LV85HABA0551039565078' },
      ],
    },
  ],
  finalCta: {
    title: 'Atbalsti Vāgnera nama nākotni jau šodien',
    text: 'Tavs ziedojums palīdz saglabāt kultūras mantojumu un veidot telpu, kurā mūzika un māksla atgriežas pilsētas sirdī.',
    button: 'ZIEDOT TAGAD',
  },
};

export default async function ZiedojumiPage({ params }: { params: Promise<{ lang: string }> }) {
  await params;
  const page = await getPageBySlug('ziedojumi');
  const acf = (page?.acf as Record<string, any>) || {};

  const asStringArray = (val: unknown): string[] => {
    if (!Array.isArray(val)) return [];
    return val
      .map((p: unknown) =>
        typeof p === 'object' && p
          ? String((p as { item?: unknown; paragraph?: unknown }).item ?? (p as { paragraph?: unknown }).paragraph ?? '')
          : String(p ?? '')
      )
      .filter(Boolean);
  };

  const normalizedParagraphs = asStringArray(acf.done_paragraphs);
  const normalizedListItems = asStringArray(acf.done_list_items);
  const normalizedUsedFor = asStringArray(acf.transparency_used_for);
  const normalizedNotUsedFor = asStringArray(acf.transparency_not_used_for);

  const data = {
    heroData: {
      title: acf.hero_title || FALLBACK_DATA.heroData.title,
      subtitle: acf.hero_subtitle || FALLBACK_DATA.heroData.subtitle,
      cta: acf.hero_cta || FALLBACK_DATA.heroData.cta,
      note: acf.hero_note || FALLBACK_DATA.heroData.note,
      image: acf.hero_image || FALLBACK_DATA.heroData.image
    },
    doneContent: {
      title: acf.done_title || FALLBACK_DATA.doneContent.title,
      paragraphs: normalizedParagraphs.length > 0 ? normalizedParagraphs : FALLBACK_DATA.doneContent.paragraphs,
      listTitle: acf.done_list_title || FALLBACK_DATA.doneContent.listTitle,
      listItems: normalizedListItems.length > 0 ? normalizedListItems : FALLBACK_DATA.doneContent.listItems
    },
    donationOptions: acf.donation_options || FALLBACK_DATA.donationOptions,
    transparency: {
      title: acf.transparency_title || FALLBACK_DATA.transparency.title,
      intro: acf.transparency_intro || FALLBACK_DATA.transparency.intro,
      usedFor: normalizedUsedFor.length > 0 ? normalizedUsedFor : FALLBACK_DATA.transparency.usedFor,
      notUsedFor: normalizedNotUsedFor.length > 0 ? normalizedNotUsedFor : FALLBACK_DATA.transparency.notUsedFor,
      trustNote: acf.transparency_trust_note || FALLBACK_DATA.transparency.trustNote,
      trustNoteLink: FALLBACK_DATA.transparency.trustNoteLink
    },
    rekviziti: acf.rekviziti || FALLBACK_DATA.rekviziti,
    finalCta: {
      title: acf.final_cta_title || FALLBACK_DATA.finalCta.title,
      text: acf.final_cta_text || FALLBACK_DATA.finalCta.text,
      button: acf.final_cta_button || FALLBACK_DATA.finalCta.button
    }
  };

  return <ZiedojumiClient data={data} />;
}
