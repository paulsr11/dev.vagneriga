import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '@/lib/wp';
import NewsSection from '@/components/blocks/NewsSection';

interface Milestone {
  date: string;
  text: string;
}

interface Card {
  title: string;
}

interface Endorsement {
  category: string;
  name: string;
  detail: string;
}

interface DataBox {
  text: string;
}

interface TimelineEvent {
  date: string;
  label: string;
  text: string;
}

interface ProgressBar {
  label: string;
  value: string;
}

interface SupportItem {
  title: string;
  text: string;
}

interface PartnerLogo {
  title: string;
  subtitle: string;
}

interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    text: string;
  };
  rebuilding: {
    title: string;
    milestones: Milestone[];
    button: string;
    imageCaption: string;
  };
  renovation: {
    title: string;
    paragraphs: string[];
    cards: Card[];
    button: string;
  };
  team: {
    title: string;
    profile1: string;
    profile2: {
      text: string;
      author: string;
    };
    button: string;
  };
  proof: {
    title: string;
    text: string;
    endorsements: Endorsement[];
    data: DataBox[];
    logos: PartnerLogo[];
  };
  history: {
    title: string;
    text: string;
    events: TimelineEvent[];
  };
  today: {
    title: string;
    raised: string;
    bars: ProgressBar[];
    status: string;
    timestamp: string;
  };
  support: {
    title: string;
    text: string;
    items: SupportItem[];
    button: string;
  };
  news: {
    title: string;
  };
}

// Translations Dictionary for LV, EN, DE
const translations: Record<string, TranslationContent> = {
  lv: {
    meta: {
      title: "Vāgnera atdzimšana - Rīgas Vāgnera nams",
      description: "Uzziniet vairāk par Rīgas Riharda Vāgnera teātra atjaunošanas projektu, vēsturi un to, kā jūs varat palīdzēt atdzimt šim kultūras mantojumam."
    },
    hero: {
      title: "Vāgnera pirmais teātris. Pasaules nākamais.",
      text: "1837. gadā Rihards Vāgners ieradās Rīgā. Šeit atrastais veidoja Baireitu un uz visiem laikiem mainīja operu. Mēs atjaunojam šo teātri — un veidojam vietu, kas iedvesmo nākamo mūziķu paaudzi, tāpat kā tā iedvesmoja viņu."
    },
    rebuilding: {
      title: "Kā Rīga veidoja Vāgneru",
      milestones: [
        { date: "1837. gada augustā", text: "Vāgners ieradās Rīgā kā pilsētas teātra galvenais diriģents. Viņam bija 24 gadi, viņš bija nezināms un parādos." },
        { date: "1837–1839", text: "Šeit viņš sastapās ar idejām, kas definēja operu: stāvais grieķu stila izkārtojums, aptumšotā zāle, dziļā orķestra bedre — tas viss pirmo reizi tika realizēts šajā ēkā. Viņš paņēma katru no tiem uz Baireitu." },
        { date: "1839", text: "Rīgā viņš sāka komponēt operu Rienzi — savu izrāviena darbu. Kad viņš 1839. gadā bēga no pilsētas kreditoru vajāts, vētra Baltijas jūrā deva viņam vīziju par «Klejojošais holandietis»." }
      ],
      button: "Lasīt pilnu stāstu →",
      imageCaption: "Šeit Rihards Vāgners atklāja savu aicinājumu."
    },
    renovation: {
      title: "Nevis restaurācija. Bet augšāmcelšanās.",
      paragraphs: [
        "Šis teātris nostādīja Vāgneru uz viņa ceļa. Tas deva viņam telpu, akustiku un vīziju, kas padarīja viņu par to, kas viņš kļuva.",
        "Mēs ne tikai atjaunojam ēku. Mēs atjaunojam to, ko tā pārstāvēja — vietu, kur tiek radīta nopietna mūzika, un kur nākamā mūziķu paaudze atrod to, ko Vāgners šeit atrada pirmais.",
        "Kad tas tiks atvērts 2028. gadā, Rīgas Vāgnera teātris būs vienīgā aktīvā koncertzāle Eiropā, kur dzima Baireitas idejas. Rezidences, jauni pasūtījumi, meistarklases, Rīgas muzikālās dzīves muzejs. Mājvieta, kas rada māksliniekus, nevis tikai priekšnesumus."
      ],
      cards: [
        { title: "Arhitektūras šķērsgriezums" },
        { title: "Zāles vizualizācija" },
        { title: "Mūziķu mēģinājums" }
      ],
      button: "Skatīt projekta vīziju →"
    },
    team: {
      title: "Cilvēki aiz tā",
      profile1: "Māris un Zaiga ir pavadījuši lielāko daļu desmitgades, pārvēršot šo ēku atpakaļ par kaut ko reālu. Viņi ierodas katru dienu un atsakās atstāt to pusratā. Projekts pastāv, jo viņi neļaus tam apstāties.",
      profile2: {
        text: "“Kad esat pabijis ēkā un iztēlojies, kā to varētu iedzīvināt un piepildīt ar mūziku, tā vairs nekad neatlaiž. Unikāla ēka ar muzikāli vēsturisku nozīmi kļūs par satikšanās vietu jaunajiem mūziķiem no visas pasaules.”",
        author: "Eva Vāgnere-Paskjē, Vāgnera mazmazmeita un patrone"
      },
      button: "Skatīt komandu →"
    },
    proof: {
      title: "Pierādījums, ka tas ir reāls",
      text: "Ēkā notiek aktīva rekonstrukcija. Divi prezidenti ir saistījuši savus vārdus ar to. Ir iesaistīts pasaulē vadošais koncertzāļu akustiķis. Tas nav tikai priekšlikums.",
      endorsements: [
        { category: "Patroni", name: "Franks Valters Šteinmeiers, Egils Levits", detail: "Vācijas un Latvijas prezidenti" },
        { category: "Vāgneru ģimene", name: "Eva Vāgnere-Paskjē", detail: "Mazmazmeita · patrone kopš 2019. gada" },
        { category: "Akustika", name: "Jasuhisa Tojoda", detail: "Elbphilharmonie · Suntory Hall · LA Phil" },
        { category: "Dibināšanas fonds", name: "Messerschmitt Stiftung", detail: "~€1M piešķirti" }
      ],
      data: [
        { text: "Būvdarbu foto 2024. gada oktobrī" },
        { text: "Pāļu dzīšanas darbi procesā" },
        { text: "Venēcijas biennāles modelis 2025" }
      ],
      logos: [
        { title: "Deutscher Bundestag", subtitle: "€5M grants" },
        { title: "Auswärtiges Amt", subtitle: "Vācijas Ārlietu ministrija" },
        { title: "Eva Wagner-Pasquier", subtitle: "Patrone" },
        { title: "Messerschmitt Stiftung", subtitle: "Fonds" },
        { title: "Yasuhisa Toyota", subtitle: "Akustika" }
      ]
    },
    history: {
      title: "Kā mēs šeit nokļuvām",
      text: "No strukturālas avārijas līdz aktīvai būvniecībai — vienpadsmit gadus tapis projekts.",
      events: [
        { date: "2025", label: "Venēcijas arhitektūras biennāle", text: "Mēroga modelis izstādīts. «Nav nekādu šaubu par to»." },
        { date: "Okt 2024", label: "Pamatu nostiprināšana sākas [AKTĪVS]", text: "Pāļu dzīšanas darbi procesā. Strukturālā pastiprināšana." },
        { date: "Apr 2024", label: "Demontāža pabeigta", text: "Vēsturiskie elementi saglabāti. Tehniskais projekts pabeigts." },
        { date: "Maij 2023", label: "Pamatakmens ielikšana", text: "Vāgnera 210. dzimšanas diena. Piedalās Vācijas parlamenta delegācija." },
        { date: "Okt 2022", label: "Parakstīts €5M līgums ar Vāciju", text: "Apstiprināts pilns nolīgums." },
        { date: "Aug 2021", label: "Parakstīts pirmais līgums", text: "€200K. Sākas plānošanas fāze." },
        { date: "Okt 2020", label: "Ēku pārņem Latvijas valsts", text: "Projekts oficiāli sākas." },
        { date: "2014", label: "Dibināta Vāgnera biedrība", text: "Glābšanas misija sākas." },
        { date: "2007", label: "Ēka tiek slēgta", text: "Koncerta darbība apstājas. Strukturāla avārija." }
      ]
    },
    today: {
      title: "Kur tas atrodas šodien",
      raised: "Piesaistīts līdz šim — €21M no €45M · Atklāšana 2028",
      bars: [
        { label: "Bundestāga €5M grants", value: "€5M" },
        { label: "Messerschmitt fonda atbalsts", value: "~€1M" },
        { label: "Atlicis piesaistīt", value: "€24M" }
      ],
      status: "Rekonstrukcija sākās 2023. gadā. Pamatu darbi ir pabeigti. Nākamā ir zāles izbūve. Atklājam 2028. gadā.",
      timestamp: "Pēdējoreiz atjaunināts: 2026. gada jūnijā"
    },
    support: {
      title: "Ieraksti savu vārdu ēkā, kas tevi pārdzīvos.",
      text: "Rīgas Vāgnera teātris būs pirmā aktīvā koncertzāle Eiropā, kas uzbūvēta uz idejām, kas mums deva Baireitu. Nauda, kas uzbūvēja lielas kultūras iestādes, vienmēr nāca no cilvēkiem, kuri ticēja pirms tā tika pabeigta. Šis ir tas brīdis.",
      items: [
        { title: "Tavs vārds zālē:", text: "Nosauktas sēdvietas, nosauktas telpas — pastāvīgs ieraksts par tiem, kas to padarīja iespējamu" },
        { title: "Dibinātāja statuss:", text: "Ziedotāji, kuri atbalsta pirms atklāšanas, nes citu nozīmi nekā tie, kas ziedo pēc" },
        { title: "Piekļuve un atzinība:", text: "Atklāšanas pasākumi, labdarības koncerti, gada pārskati — tu esi daļa no stāsta, nevis zemsvītras piezīme" },
        { title: "Vāgnera mantojums, uz priekšu:", text: "Šeit viņš sāka. Palīdzi noteikt to, kas sekos" }
      ],
      button: "Skatīt, kā atbalstīt →"
    },
    news: {
      title: "News & updates"
    }
  },
  en: {
    meta: {
      title: "Rebuilding Wagner - Riga Wagner House",
      description: "Learn about the restoration of the historic Richard Wagner Theatre in Riga."
    },
    hero: {
      title: "Wagner's first theatre. The world's next one.",
      text: "In 1837, Richard Wagner arrived in Riga. What he found here shaped Bayreuth and changed opera forever. We are resurrecting that theatre — and building a place that inspires the next generation of musicians, just as it inspired him."
    },
    rebuilding: {
      title: "How Riga made Wagner",
      milestones: [
        { date: "In August 1837", text: "Wagner arrived in Riga as chief conductor of the City Theatre. He was 24, unknown, and in debt." },
        { date: "1837–1839", text: "Here he encountered ideas that would define opera: the steep Greek-style seating, the darkened hall, the deep orchestra pit — all first realised in this building. He took every one of them to Bayreuth." },
        { date: "1839", text: "In Riga he began composing Rienzi — his breakthrough work. When he fled the city in 1839, pursued by creditors, a violent storm in the Baltic gave him the vision for The Flying Dutchman." }
      ],
      button: "Read the full story →",
      imageCaption: "This is where Richard Wagner discovered his calling."
    },
    renovation: {
      title: "Not a restoration. A resurrection.",
      paragraphs: [
        "That theatre set Wagner on his way. It gave him the space, the acoustics, and the vision that made him who he became.",
        "We are not only restoring the building. We are restoring what it stood for — a place where serious music is made, and where the next generation of musicians finds what Wagner found here first.",
        "When it opens in 2028, Wagner Theatre Riga will be the only active concert hall in Europe where the ideas behind Bayreuth were born. Residencies, new commissions, masterclasses, a museum of Riga's musical life. A home that produces artists, not just performances."
      ],
      cards: [
        { title: "Architectural section drawing" },
        { title: "Hall render or scale model" },
        { title: "Musicians in rehearsal" }
      ],
      button: "See the project vision →"
    },
    team: {
      title: "The people behind it",
      profile1: "Māris and Zaiga have spent the better part of a decade turning this building back into something real. They show up every day and refuse to leave it half-done. The project exists because they will not let it stop.",
      profile2: {
        text: "\"Once you've been in the building and imagined how it could be enlivened and filled with music, it never lets you go. A unique building with music-historical significance will become a meeting place for young musicians from all over the world.\"",
        author: "Eva Wagner-Pasquier, Wagner's great-granddaughter and patron"
      },
      button: "Meet the team →"
    },
    proof: {
      title: "Proof it is real",
      text: "The building is under active reconstruction. Two presidents have staked their names on it. The world's leading concert hall acoustician is involved. This is not a proposal.",
      endorsements: [
        { category: "Patrons", name: "Frank-Walter Steinmeier, Egils Levits", detail: "Presidents of Germany and Latvia" },
        { category: "Wagner Family", name: "Eva Wagner-Pasquier", detail: "Great-granddaughter · Patron since 2019" },
        { category: "Acoustics", name: "Yasuhisa Toyota", detail: "Elbphilharmonie · Suntory Hall · LA Phil" },
        { category: "Founding Foundation", name: "Messerschmitt Stiftung", detail: "~€1M committed" }
      ],
      data: [
        { text: "Construction photo dated Oct 2024" },
        { text: "Piling works underway" },
        { text: "Venice Biennale model 2025" }
      ],
      logos: [
        { title: "Deutscher Bundestag", subtitle: "€5M grant" },
        { title: "Auswärtiges Amt", subtitle: "German Foreign Office" },
        { title: "Eva Wagner-Pasquier", subtitle: "Patron" },
        { title: "Messerschmitt Stiftung", subtitle: "Foundation" },
        { title: "Yasuhisa Toyota", subtitle: "Acoustics" }
      ]
    },
    history: {
      title: "How we got here",
      text: "From structural failure to active construction — a project eleven years in the making.",
      events: [
        { date: "2025", label: "Venice Architecture Biennale", text: "Scale model exhibited. \"No Doubt About It.\"" },
        { date: "Oct 2024", label: "Foundation reinforcement begins [ACTIVE]", text: "Piling works underway. Structural reinforcement." },
        { date: "Apr 2024", label: "Demolition complete", text: "Historic elements saved. Technical design finalised." },
        { date: "May 2023", label: "Foundation stone laid", text: "Wagner's 210th birthday. German parliamentary delegation present." },
        { date: "Oct 2022", label: "€5M contract signed with Germany", text: "Full agreement confirmed." },
        { date: "Aug 2021", label: "First contract signed", text: "€200K. Planning phase begins." },
        { date: "Oct 2020", label: "Building handed over by Latvian state", text: "Project officially begins." },
        { date: "2014", label: "Wagner Society founded", text: "Rescue mission starts." },
        { date: "2007", label: "Building closes", text: "Concerts stop. Structural failure." }
      ]
    },
    today: {
      title: "Where it stands today",
      raised: "Raised to date — €21M of €45M · Opening 2028",
      bars: [
        { label: "Bundestag €5M grant", value: "€5M" },
        { label: "Messerschmitt Foundation support", value: "~€1M" },
        { label: "Still to raise", value: "€24M" }
      ],
      status: "Reconstruction began in 2023. Foundation works are complete. The hall structure is next. We open in 2028.",
      timestamp: "Last updated June 2026"
    },
    support: {
      title: "Put your name in the building that outlasts you.",
      text: "Wagner Theatre Riga will be the first active concert hall in Europe built on the ideas that gave us Bayreuth. The money that built great cultural institutions always came from people who believed before it was finished. This is that moment.",
      items: [
        { title: "Your name in the hall:", text: "Named seats, named rooms, named spaces — a permanent record of who made this possible" },
        { title: "Founding status:", text: "Donors who give before opening carry a different weight than those who give after" },
        { title: "Access and recognition:", text: "Opening events, benefit concerts, annual reports — you are part of the story, not a footnote" },
        { title: "Wagner's legacy, forward:", text: "This is where he began. Help decide what comes next" }
      ],
      button: "See how to support →"
    },
    news: {
      title: "News & updates"
    }
  },
  de: {
    meta: {
      title: "Wiederaufbau von Wagner - Rigaer Wagner-Haus",
      description: "Erfahren Sie mehr über das Projekt zur Restaurierung des historischen Richard-Wagner-Theaters in Riga."
    },
    hero: {
      title: "Wagners erstes Theater. Das nächste der Welt.",
      text: "1837 kam Richard Wagner nach Riga. Was er hier fand, prägte Bayreuth und veränderte die Oper für immer. Wir erwecken dieses Theater wieder zum Leben – und bauen einen Ort, der die nächste Generation von Musikern inspiriert, so wie er ihn inspiriert hat."
    },
    rebuilding: {
      title: "Wie Riga Wagner prägte",
      milestones: [
        { date: "Im August 1837", text: "Wagner kam als Chefdirigent des Stadttheaters nach Riga. Er war 24, unbekannt und verschuldet." },
        { date: "1837–1839", text: "Hier stieß er auf Ideen, die die Oper definieren sollten: die steile Bestuhlung nach griechischem Vorbild, der abgedunkelte Saal, der tiefe Orchestergraben – alles wurde zuerst in diesem Gebäude realisiert. Er nahm jede einzelne davon mit nach Bayreuth." },
        { date: "1839", text: "In Riga begann er mit der Komposition von Rienzi – seinem Durchbruchswerk. Als er 1839 vor Gläubigern aus der Stadt floh, gab ihm ein schwerer Sturm auf der Ostsee die Vision für Der fliegende Holländer." }
      ],
      button: "Die ganze Geschichte lesen →",
      imageCaption: "Hier entdeckte Richard Wagner seine Berufung."
    },
    renovation: {
      title: "Keine Restaurierung. Eine Auferstehung.",
      paragraphs: [
        "Dieses Theater wies Wagner den Weg. Es gab ihm den Raum, die Akustik und die Vision, die ihn zu dem machten, der er wurde.",
        "Wir restaurieren nicht nur das Gebäude. Wir restaurieren das, wofür es stand – einen Ort, an dem ernsthafte Musik gemacht wird und an dem die nächste Generation von Musikern das findet, was Wagner hier zuerst fand.",
        "Wenn es 2028 eröffnet wird, wird das Wagner-Theater Riga das einzige aktive Konzerthaus in Europa sein, das sich dort befindet, wo die Ideen hinter Bayreuth geboren wurden. Residenzen, neue Aufträge, Meisterklassen, ein Museum des Rigaer Musiklebens. Ein Zuhause, das Künstler hervorbringt, nicht nur Aufführungen."
      ],
      cards: [
        { title: "Architektonische Querschnittszeichnung" },
        { title: "Saal-Visualisierung" },
        { title: "Musiker bei der Probe" }
      ],
      button: "Siehe die Projektaufsicht →"
    },
    team: {
      title: "Die Menschen dahinter",
      profile1: "Māris und Zaiga haben fast ein Jahrzehnt damit verbracht, dieses Gebäude wieder in etwas Reales zu verwandeln. Sie erscheinen jeden Tag und weigern sich, es halbfertig zu verlassen. Das Projekt existiert, weil sie nicht zulassen, dass es aufhört.",
      profile2: {
        text: "\"Wenn man erst einmal im Gebäude war und sich vorgestellt hat, wie es belebt und mit Musik erfüllt werden könnte, lässt es einen nie wieder los. Ein einzigartiges Gebäude von musikgeschichtlicher Bedeutung wird zu einem Treffpunkt für junge Musikern aus aller Welt.\"",
        author: "Eva Wagner-Pasquier, Ururenkelin von Wagner und Schirmherrin"
      },
      button: "Meet the team →"
    },
    proof: {
      title: "Beweis, dass es real ist",
      text: "Das Gebäude befindet sich im aktiven Wiederaufbau. Zwei Präsidenten haben sich darin verewigt. Der weltweit führende Akustiker für Konzertgebäude ist beteiligt. Dies ist kein bloßer Vorschlag.",
      endorsements: [
        { category: "Schirmherren", name: "Frank-Walter Steinmeier, Egils Levits", detail: "Präsidenten von Deutschland und Lettland" },
        { category: "Familie Wagner", name: "Eva Wagner-Pasquier", detail: "Urenkelin · Schirmherrin seit 2019" },
        { category: "Akustik", name: "Yasuhisa Toyota", detail: "Elbphilharmonie · Suntory Hall · LA Phil" },
        { category: "Gründungsstiftung", name: "Messerschmitt Stiftung", detail: "~€1M zugesagt" }
      ],
      data: [
        { text: "Baustellenfoto datiert Okt 2024" },
        { text: "Pfahlgründung im Gange" },
        { text: "Modell der Biennale Venedig 2025" }
      ],
      logos: [
        { title: "Deutscher Bundestag", subtitle: "€5M Förderung" },
        { title: "Auswärtiges Amt", subtitle: "German Foreign Office" },
        { title: "Eva Wagner-Pasquier", subtitle: "Schirmherrin" },
        { title: "Messerschmitt Stiftung", subtitle: "Stiftung" },
        { title: "Yasuhisa Toyota", subtitle: "Akustik" }
      ]
    },
    history: {
      title: "Wie wir hierher gekommen sind",
      text: "Vom strukturellen Versagen bis zum aktiven Bau – ein Projekt, das seit elf Jahren in Arbeit ist.",
      events: [
        { date: "2025", label: "Architekturbiennale Venedig", text: "Maßstabsmodell ausgestellt. «Kein Zweifel daran»." },
        { date: "Okt 2024", label: "Fundamentverstärkung beginnt [AKTIV]", text: "Pfahlgründungsarbeiten im Gange. Strukturverstärkung." },
        { date: "Apr 2024", label: "Abriss abgeschlossen", text: "Historische Elemente gesichert. Technischer Entwurf finalisiert." },
        { date: "Mai 2023", label: "Grundsteinlegung", text: "Wagners 210. Geburtstag. Delegation des deutschen Bundestags anwesend." },
        { date: "Okt 2022", label: "€5M Vertrag mit Deutschland unterzeichnet", text: "Vollständige Vereinbarung bestätigt." },
        { date: "Aug 2021", label: "Erster Vertrag unterzeichnet", text: "€200K. Planungsphase beginnt." },
        { date: "Okt 2020", label: "Übergabe des Gebäudes durch den lettischen Staat", text: "Projekt beginnt offiziell." },
        { date: "2014", label: "Wagner-Gesellschaft gegründet", text: "Rettungsmission beginnt." },
        { date: "2007", label: "Schließung des Gebäudes", text: "Konzerte stoppen. Strukturelles Versagen." }
      ]
    },
    today: {
      title: "Wo es heute steht",
      raised: "Bisher gesammelt — €21 Mio. von €45 Mio. · Eröffnung 2028",
      bars: [
        { label: "Bundestag €5M Förderung", value: "€5M" },
        { label: "Unterstützung der Messerschmitt Stiftung", value: "€1M" },
        { label: "Verbleibender Spendenbedarf", value: "€24M" }
      ],
      status: "Der Wiederaufbau begann 2023. Die Fundamentarbeiten sind abgeschlossen. Als nächstes folgt das Tragwerk. Wir eröffnen 2028.",
      timestamp: "Zuletzt aktualisiert im Juni 2026"
    },
    support: {
      title: "Verewigen Sie Ihren Namen in einem Gebäude, das Sie überdauert.",
      text: "Das Wagner-Theater Riga wird das erste aktive Konzerthaus in Europa sein, das auf den Ideen basiert, die uns Bayreuth beschert haben. Das Geld, mit dem große Kulturinstitutionen gebaut wurden, stammte immer von Menschen, die daran glaubten, bevor es fertiggestellt war. Dies ist dieser Moment.",
      items: [
        { title: "Ihr Name im Saal:", text: "Namenssitze, Namensräume, Namensflächen — ein dauerhafter Nachweis darüber, wer dies ermöglicht hat" },
        { title: "Gründungsstatus:", text: "Spender, die vor der Eröffnung unterstützen, tragen eine andere Bedeutung als jene, die danach spenden" },
        { title: "Zugang und Anerkennung:", text: "Eröffnungsveranstaltungen, Benefizkonzerte, Jahresberichte — Sie sind Teil der Geschichte, keine Fußnote" },
        { title: "Wagners Erbe vorantreiben:", text: "Hier begann er. Helfen Sie mit, das Kommende zu gestalten" }
      ],
      button: "Erfahren Sie, wie Sie unterstützen können →"
    },
    news: {
      title: "News & updates"
    }
  }
};

// 2. Generate SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (translations[lang] ? lang : 'lv') as 'lv' | 'en' | 'de';
  const t = translations[currentLang];

  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

// 3. Main Landing Page Component
export default async function RebuildingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (translations[lang] ? lang : 'lv') as 'lv' | 'en' | 'de';
  const t = translations[currentLang];

  // Fetch WordPress news posts for the news section
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let newsPosts: any[] = [];
  try {
    const result = await getPosts({ per_page: 3 });
    newsPosts = result?.posts || [];
  } catch (error) {
    console.error("Failed to fetch news posts for rebuilding page:", error);
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* SECTION 1: Hero Block */}
      <section className="vag-container bg-white pb-6 pt-6">
        <div className="relative h-[60vh] min-h-[460px] w-full overflow-hidden" style={{ height: '60vh', minHeight: '460px', borderRadius: 'var(--card-radius)' }}>
          <Image 
            src="/wp-content/uploads/2025/09/IMGC4880_AuroraHDR2019-edit.jpg" 
            alt="Vāgnera Nams"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
        <div className="pt-12 pb-8">
          <h1 className="mb-6 text-black tracking-tight font-serif text-3xl md:text-5xl lg:text-6xl leading-tight font-normal" dangerouslySetInnerHTML={{ __html: t.hero.title }} />
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-sans">
              {t.hero.text}
            </p>
          </div>
        </div>
        <div className="h-px bg-gray-200 my-6" />
      </section>

      {/* SECTION 2: How Riga Made Wagner */}
      <section className="py-16 bg-white">
        <div className="vag-container">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="mb-8 text-black tracking-widest font-serif text-2xl md:text-3xl font-normal">{t.rebuilding.title}</h2>
              <div className="space-y-8">
                {t.rebuilding.milestones.map((m, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#af9f66]/10 text-[#af9f66] font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1" style={{ fontSize: 'var(--body)' }}>{m.date}</h4>
                      <p className="text-gray-700 leading-relaxed font-sans">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link 
                  href={`/${currentLang}/biedriba`} 
                  className="btn-flood inline-flex items-center justify-center bg-[#af9f66] px-8 font-bold uppercase tracking-wider text-black transition-all" 
                  style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
                >
                  {t.rebuilding.button}
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md" style={{ borderRadius: 'var(--card-radius)' }}>
                <Image 
                  src="/wp-content/uploads/2025/09/vagners_biedriba_picture.jpg" 
                  alt={t.rebuilding.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-gray-500 italic font-sans text-center md:text-left">
                {t.rebuilding.imageCaption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Not a restoration. A resurrection. */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="vag-container">
          <div className="mb-12">
            <h2 className="mb-6 text-black tracking-widest font-serif text-2xl md:text-3xl font-normal">{t.renovation.title}</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 font-sans">
              {t.renovation.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {t.renovation.cards.map((card, i) => {
              const images = [
                "/images/projekts/08_Wagner-theater_Section-A-A-1000x625.jpg",
                "/images/projekts/4.png",
                "/wp-content/uploads/2025/09/larisa-birta-slbOcNlWNHA-unsplash.jpg"
              ];
              return (
                <div key={i} className="flex flex-col">
                  <div 
                    className="relative overflow-hidden h-48 w-full shadow-md mb-3 border border-gray-100 group" 
                    style={{ borderRadius: 'var(--card-radius-sm)' }}
                  >
                    <Image 
                      src={images[i]} 
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-black font-semibold text-sm uppercase tracking-wider font-sans leading-snug text-left">
                    {card.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="text-left">
            <Link 
              href={`/${currentLang}/nams`} 
              className="text-[#af9f66] font-bold hover:underline inline-flex items-center gap-1 uppercase tracking-wider text-sm"
            >
              {t.renovation.button}
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: The people behind it (2 Column Layout with new image on right) */}
      <section className="py-16 bg-white">
        <div className="vag-container">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Left Column - Texts */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="mb-8 text-black tracking-widest font-serif text-2xl md:text-3xl font-normal">
                {t.team.title}
              </h2>
              
              <div className="space-y-8 mb-8 font-sans">
                {/* Profile 1 Text */}
                <p className="text-gray-700 leading-relaxed text-base">
                  {t.team.profile1}
                </p>
                
                {/* Profile 2 Quote */}
                <div className="border-l-2 border-[#af9f66] pl-6 py-1">
                  <blockquote className="text-gray-700 italic leading-relaxed text-lg mb-2">
                    {t.team.profile2.text}
                  </blockquote>
                  <cite className="text-sm font-semibold text-gray-500 not-italic">
                    — {t.team.profile2.author}
                  </cite>
                </div>
              </div>

              <div>
                <Link 
                  href={`/${currentLang}/biedriba`} 
                  className="text-[#af9f66] font-bold hover:underline inline-flex items-center gap-1 uppercase tracking-wider text-sm"
                >
                  {t.team.button}
                </Link>
              </div>
            </div>
            
            {/* Right Column - Large Image of Maris & Zaiga */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md" style={{ borderRadius: 'var(--card-radius)' }}>
                <Image 
                  src="/images/projekts/maris_zaiga.jpg" 
                  alt="Māris Gailis & Zaiga Gaile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Proof it is real */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="vag-container">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-6 text-black tracking-widest font-sans text-3xl md:text-4xl font-bold">{t.proof.title}</h2>
            <p className="text-lg leading-relaxed text-gray-600 font-sans">
              {t.proof.text}
            </p>
          </div>

          {/* Endorsement Grid (Styled 2x2 as in mockup image) */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {t.proof.endorsements.map((end, i) => (
              <div 
                key={i} 
                className="bg-white p-8 border border-gray-200 flex flex-col justify-between" 
                style={{ borderRadius: 'var(--card-radius-sm)', minHeight: '140px' }}
              >
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">{end.category}</h4>
                  <p className="text-black font-bold text-base md:text-lg mb-1 leading-tight">{end.name}</p>
                </div>
                <p className="text-gray-500 text-xs mt-2 font-sans">{end.detail}</p>
              </div>
            ))}
          </div>

          {/* 3 Real Photos with double the height and aligned text below (clean readability) */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {t.proof.data.map((d, i) => {
              const projectImages = [
                "/images/projekts/VC481gnera4070.jpg",
                "/images/projekts/MG_6845.jpg",
                "/wp-content/uploads/2025/09/Thetis_3.jpeg"
              ];
              return (
                <div key={i} className="flex flex-col">
                  <div 
                    className="relative overflow-hidden w-full shadow-md mb-3" 
                    style={{ height: '320px', borderRadius: 'var(--card-radius-sm)' }}
                  >
                    <Image 
                      src={projectImages[i]} 
                      alt={d.text}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <p className="text-gray-500 text-[10px] md:text-xs font-sans uppercase tracking-wider font-semibold leading-relaxed text-left">
                    {d.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Partner Bar (Re-designed matching the mockup columns & lines) */}
          <div 
            className="grid grid-cols-2 md:grid-cols-5 border-t border-b border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white py-6"
            style={{ borderRadius: 'var(--card-radius-sm)' }}
          >
            {t.proof.logos.map((logo, i) => (
              <div key={i} className="px-6 py-2 text-left font-sans flex flex-col justify-center">
                <div className="text-black font-semibold text-sm leading-snug">{logo.title}</div>
                <div className="text-gray-500 text-xs mt-1 leading-normal">{logo.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: How we got here (Timeline) */}
      <section className="py-16 bg-white">
        <div className="vag-container max-w-4xl">
          {/* Aligned to the left */}
          <div className="text-left mb-16">
            <h2 className="text-black uppercase tracking-widest mb-4 font-serif text-2xl md:text-3xl font-normal">{t.history.title}</h2>
            <p className="text-gray-600 max-w-2xl font-sans">{t.history.text}</p>
          </div>

          <div className="relative border-l border-gray-200 pl-6 ml-4 md:ml-32 space-y-12">
            {t.history.events.map((ev, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#af9f66] border-4 border-white" />
                <div className="flex flex-col md:flex-row md:items-baseline">
                  <div className="md:absolute md:-left-36 md:w-28 text-left md:text-right font-bold font-serif text-2xl text-[#af9f66] mb-1 md:mb-0">
                    {ev.date}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-black mb-1">{ev.label}</h4>
                    <p className="text-gray-700 leading-relaxed font-sans">
                      {ev.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Where it stands today (Single Slider with Frame) */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="vag-container max-w-3xl">
          <div className="border-2 border-[#af9f66] p-8 md:p-12 bg-white text-center shadow-lg" style={{ borderRadius: 'var(--card-radius)' }}>
            <h2 className="text-black uppercase tracking-widest mb-4 font-sans font-bold text-xl font-normal">
              {t.today.title}
            </h2>
            <div className="text-3xl md:text-5xl font-serif font-bold text-[#af9f66] mb-8">
              {t.today.raised}
            </div>
            
            {/* The Framed impact slider */}
            <div className="w-full bg-gray-100 h-5 rounded-full overflow-hidden mb-8 border border-gray-200 p-0.5">
              <div 
                className="bg-[#af9f66] h-full rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${(21 / 45) * 100}%` }} 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-sans font-semibold text-gray-600 mb-8 border-b border-gray-100 pb-6">
              {t.today.bars.map((bar, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded">
                  <span className="block text-xs text-gray-400 uppercase mb-1">{bar.label}</span>
                  <span className="text-[#af9f66] font-bold text-base">{bar.value}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 font-sans max-w-xl mx-auto text-lg leading-relaxed">
              {t.today.status}
            </p>
          </div>

          <p className="text-right text-xs text-gray-400 font-sans italic mt-4">
            {t.today.timestamp}
          </p>
        </div>
      </section>

      {/* SECTION 8: WordPress News Grid */}
      {newsPosts.length > 0 && (
        <NewsSection 
          posts={newsPosts} 
          title={t.news.title} 
          lang={currentLang} 
        />
      )}

      {/* SECTION 9: Support Call-To-Action (Premium Dark Section) */}
      <section className="vag-container pb-16 pt-8">
        <div className="bg-[#111111] text-white p-8 md:p-16" style={{ borderRadius: 'var(--card-radius)' }}>
          <div className="max-w-3xl mb-12">
            <h2 className="text-white uppercase tracking-wider mb-4 font-serif text-2xl md:text-3xl leading-snug font-normal">
              {t.support.title}
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed mt-4">
              {t.support.text}
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {t.support.items.map((item, i) => (
              <div key={i} className="border-t border-white/20 pt-6">
                <h4 className="font-serif text-[#af9f66] tracking-wide mb-3" style={{ fontSize: 'var(--body)' }}>
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed font-sans">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Impactful CTA button (Much bigger) */}
          <div className="text-left">
            <Link 
              href={`/${currentLang}/ziedojumi`} 
              className="btn-flood inline-flex items-center justify-center bg-[#af9f66] px-12 font-bold uppercase tracking-wider text-black transition-all hover:bg-white hover:scale-105" 
              style={{ 
                height: '60px', 
                paddingLeft: '3rem', 
                paddingRight: '3rem', 
                borderRadius: 'var(--card-radius-sm)', 
                fontSize: '1rem', 
                letterSpacing: '0.15em' 
              }}
            >
              {t.support.button}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Spacer to align with current pages layout */}
      <div className="h-10" />
    </main>
  );
}
