import { Metadata } from 'next';
import { getPageBySlug } from '@/lib/wp';
import ZiedojumiClient from './ZiedojumiClient';

export const metadata: Metadata = {
  title: 'Ziedojumi - Vagneriga',
  description: 'Ziedo Vāgnera nama atjaunošanai',
};

export default async function ZiedojumiPage() {
  const page = await getPageBySlug('ziedojumi');
  const acf = page?.acf || {};

  // Prepare all data for the client component
  const data = {
    heroData: {
      title: acf.hero_title || "Ziedo Vāgnera nama atjaunošanai",
      subtitle: acf.hero_subtitle || "Palīdzi atjaunot vienu no nozīmīgākajiem kultūras namiem Latvijā. Tava iesaiste palīdz saglabāt Vāgnera nama vērtību nākamajām paaudzēm.",
      cta: acf.hero_cta || "ZIEDOT TAGAD",
      note: acf.hero_note || "Katrs ziedojums ir solis tuvāk Vāgnera nama atdzimšanai.",
      image: acf.hero_image || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/vagnera_nams.png"
    },
    doneContent: {
      title: acf.done_title || "Ceļš uz Vāgnera nama atjaunošanu",
      paragraphs: acf.done_paragraphs || [
        "Vāgnera nams ir unikāls kultūras piemineklis ar bagātu vēsturi, kas šobrīd atrodas atjaunošanas procesā. Pēdējos gados ir sperti nozīmīgi soļi, lai nodrošinātu nama saglabāšanu, juridisko un kultūras pamatu tā atdzimšanai.",
        "Ziedojumi ļauj mums strādāt sistemātiski un atbildīgi – sagatavojot projektus, piesaistot speciālistus, veidojot sadarbības un uzturot biedrības darbību, kas ir priekšnoteikums nama atjaunošanai nākotnē."
      ],
      listTitle: acf.done_list_title || "Tavs ziedojums palīdz:",
      listItems: acf.done_list_items || [
        "sagatavot atjaunošanas un attīstības projektus",
        "piesaistīt ekspertus un partnerus",
        "uzturēt biedrības ikdienas darbību",
        "nodrošināt komunikāciju ar sabiedrību un atbalstītājiem"
      ]
    },
    donationOptions: acf.donation_options || [
      {
        name: "Mazais atbalsts",
        description: "Iespēja ikvienam iesaistīties Vāgnera nama atjaunošanā un kļūt par daļu no šī nozīmīgā kultūras procesa.",
        amount: "no 10 EUR",
        cta: "ZIEDOT"
      },
      {
        name: "Partnera atbalsts",
        description: "Atbalsts, kas būtiski palīdz projektu attīstībai un biedrības darbības nodrošināšanai.",
        amount: "no 100 EUR",
        cta: "ZIEDOT"
      },
      {
        name: "Ģenerālpartnera atbalsts",
        description: "Nozīmīgs ieguldījums Vāgnera nama nākotnē. Piemērots uzņēmumiem un privātpersonām, kas vēlas ilgtermiņa ietekmi.",
        amount: "no 1000 EUR",
        cta: "ZIEDOT"
      }
    ],
    transparency: {
      title: acf.transparency_title || "Atklātība un atbildība",
      intro: acf.transparency_intro || "Mums ir svarīgi, lai katrs ziedotājs skaidri zinātu, kā tiek izmantoti ziedotie līdzekļi.",
      usedFor: acf.transparency_used_for || [
        "projektu sagatavošanai un dokumentācijai",
        "ekspertu un speciālistu piesaistei",
        "biedrības administratīvajai uzturēšanai",
        "nelieliem ar darbību saistītiem izdevumiem",
        "komunikācijas un sabiedrības informēšanas aktivitātēm"
      ],
      notUsedFor: acf.transparency_not_used_for || [
        "algām, prēmijām vai personiskiem bonusiem",
        "tiešiem būvniecības darbiem",
        "komerciālām vai ar biedrības mērķiem nesaistītām aktivitātēm"
      ],
      trustNote: acf.transparency_trust_note || "Biedrība darbojas sabiedrības interesēs un regulāri atskaitās par savu darbību."
    },
    rekviziti: acf.rekviziti || [
      {
        title: "Rīgas Riharda Vāgnera biedrība",
        details: [
          { label: "Reģ. Nr.", value: "40008232307" },
          { label: "Banka", value: "Swedbank Latvia" },
          { label: "Swift", value: "HABALV22" },
          { label: "Konts", value: "LV85HABA0551039565078" }
        ]
      }
    ],
    finalCta: {
      title: acf.final_cta_title || "Atbalsti Vāgnera nama nākotni jau šodien",
      text: acf.final_cta_text || "Tavs ziedojums palīdz saglabāt kultūras mantojumu un veidot telpu, kurā mūzika un māksla atgriežas pilsētas sirdī.",
      button: acf.final_cta_button || "ZIEDOT TAGAD"
    }
  };

  return <ZiedojumiClient data={data} />;
}
