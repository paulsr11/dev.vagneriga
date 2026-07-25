import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts, NEWS_CATEGORY_MAP, isGalleryPost, isPostInLanguage } from '@/lib/wp';
import NewsSection from '@/components/blocks/NewsSection';

interface Milestone {
  date: string;
  text: string;
}

interface Endorsement {
  category: string;
  name: string;
  detail: string;
}

interface TimelineEvent {
  date: string;
  label: string;
  text: string;
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
    overlayTitle: string;
    overlayCta: string;
  };
  rebuilding: {
    title: string;
    milestones: Milestone[];
    button: string;
    imageCaption: string;
  };
  renovation: {
    eyebrow: string;
    title: string;
    text: string;
    feature1Title: string;
    feature1Text: string;
    feature2Title: string;
    feature2Text: string;
    feature3Title: string;
    feature3Text: string;
    imageCaption: string;
    imageSrc: string;
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
    eyebrow: string;
    title: string;
    text: string;
    steinmeierRole: string;
    steinmeierComment: string;
    levitsRole: string;
    levitsComment: string;
    evaRole: string;
    evaComment: string;
    evaQuote: string;
    quoteEyebrow: string;
    evaQuoteAuthor: string;
    endorsements: Endorsement[];
    logos: PartnerLogo[];
    acousticsNote: string;
  };
  history: {
    title: string;
    text: string;
    events: TimelineEvent[];
  };
  today: {
    title: string;
    raised: string;
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

const thetisSlug: Record<string, string> = {
  lv: 'iesvetits-pirmais-rigas-vagnera-muzeja-eksponats-soneris-thetis',
  en: 'the-first-exhibit-of-the-riga-wagner-museum-christened-the-schooner-thetis',
  de: 'das-erste-exponat-des-richard-wagner-museums-in-riga-wurde-feierlich-enthuellt-der-schoner-thetis',
};

// Translations Dictionary for LV, EN, DE
const translations: Record<string, TranslationContent> = {
  lv: {
    meta: {
      title: "Vāgnera atdzimšana - Rīgas Vāgnera nams",
      description: "Uzziniet vairāk par Rīgas Riharda Vāgnera teātra atjaunošanas projektu, vēsturi un to, kā jūs varat palīdzēt atdzimt šim kultūras mantojumam."
    },
    hero: {
      overlayTitle: "Ieraksti savu vārdu ēkā, kas tevi pārdzīvos.",
      overlayCta: "Skatīt, kā atbalstīt",
      title: "Vāgnera pirmais teātris. Pasaules nākamais.",
      text: "Katrai nozīmīgai Eiropas koncertzālei jau ir kāda vārds. Šai vēl nav – dibinātāju slānis joprojām ir atvērts. Vārds, ko nes pati zāle, dibinātāja statuss tiem, kas ziedo pirms atklāšanas, piekļuve atklāšanas pasākumiem un labdarības koncertiem, kā arī līdzdalība lēmumu pieņemšanā par to, par ko Vāgnera mantojums kļūs tālāk."
    },
    rebuilding: {
      title: "Kā Rīga veidoja Vāgneru",
      milestones: [
        { date: "1837. GADA AUGUSTĀ", text: "Rihards Vāgners ieradās kā Pilsētas teātra galvenais diriģents –\ndivdesmit četrus gadus vecs, nezināms un parādos." },
        { date: "1837–1839", text: "Šajā zālē viņš sastapās ar idejām, kas definēja operu – to, ko viņš vēlāk atcerējās kā “auditorijas stāvo kāpumu, skatītāju zāles puskrēslu, orķestri apakšā”. Viņš paņēma katru no tām uz Baireitu.\nŠeit viņš sāka komponēt «Rienzi», savu izrāviena darbu." },
        { date: "1839", text: "Bēgot no kreditoriem 1839. gadā, vētra Baltijas jūrā deva viņam vīziju par «Klejojošo holandieti» – un no Rīgas viņš devās iekarot Eiropu.\n\nŠis teātris joprojām stāv Rīgā. Aizmirsts.\nKluss jau divdesmit gadus." }
      ],
      button: "Lasīt vairāk par Vāgneru Rīgā →",
      imageCaption: "Šeit Rihards Vāgners atklāja savu aicinājumu."
    },
    renovation: {
      eyebrow: "KO ATJAUNO JŪSU IEGULDĪJUMS",
      title: "KO ATJAUNO JŪSU IEGULDĪJUMS",
      text: "Mēs ne tikai atjaunojam ēku. Mēs atjaunojam to, ko tā pārstāvēja – vietu, kur tiek radīta nopietna mūzika un kur jaunie mākslinieki atrod to, ko Vāgners šeit atrada pirmais.",
      feature1Title: "Vāgnera teātris",
      feature1Text: "Vēsturiskais teātris, kurā Rihards Vāgners strādāja par galveno diriģentu un guva iedvesmu idejām, ko vēlāk īstenoja Baireitā. Tā amfiteātra tipa zāle, segtā orķestra bedre un unikālā akustika tiek rūpīgi atjaunota jaunajai paaudzei.",
      feature2Title: "Muzejs",
      feature2Text: "Interaktīvs muzejs, kas pēta Riharda Vāgnera Rīgas gadus, Rīgas Pilsētas teātra vēsturi un vienas no Eiropas nozīmīgākajām vēsturiskajām teātra ēkām ievērojamo restaurāciju.",
      feature3Title: "Mājvieta Eiropas māksliniekiem",
      feature3Text: "Rezidences, mēģinājumu telpas un uzstāšanās iespējas jaunajiem komponistiem, mūziķiem un izpildītājiem — nodrošinot, ka Vāgnera teātris ir ne tikai pagātnes piemineklis, bet arī dzīva skatuve nākotnei.",
      imageCaption: "Teātris šodien, aktīvas rekonstrukcijas procesā.",
      imageSrc: "/wp-content/uploads/2025/09/IMGC4880_AuroraHDR2019-edit.jpg"
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
      eyebrow: "ATBALSTS VISAUGSTĀKAJĀ LĪMENĪ",
      title: "Atbalsts visaugstākajā līmenī",
      text: "Rīgas Vāgnera nama rekonstrukcijas projektu un atdzimšanu personīgi atbalsta Vācijas un Latvijas valsts vadītāji un Vāgneru dzimta.",
      steinmeierRole: "VĀCIJAS FEDERĀLAIS PREZIDENTS",
      steinmeierComment: "Vācijas Federālais prezidents oficiāli kļuva par projekta patronu, uzsverot Vācijas un Latvijas kopīgo kultūras mantojumu.",
      levitsRole: "LATVIJAS VALSTS PREZIDENTS (2019–2023)",
      levitsComment: "Latvijas Valsts prezidents kopā ar Vācijas prezidentu pārņēma patronāžu pār Rīgas Vāgnera nama atdzimšanu.",
      evaRole: "VĀGNERA MAZMAZMEITA · PATRONE",
      evaComment: "Riharda Vāgnera mazmazmeita un Baireitas festivāla bijusī līdzdirektore aktīvi atbalsta teātra un muzeja izveidi Rīgā.",
      evaQuote: "“Kad esat pabijis ēkā un iztēlojies, kā to varētu iedzīvināt un piepildīt ar mūziku, tā vairs nekad neatlaiž. Unikāla ēka ar muzikāli vēsturisku nozīmi kļūs par satikšanās vietu jaunajiem mūziķiem no visas pasaules.”",
      quoteEyebrow: "VĀGNERU DZIMTAS MANTOJUMS",
      evaQuoteAuthor: "Eva Wagner-Pasquier, Vāgnera mazmazmeita un projekta patrone",
      endorsements: [
        { category: "Patroni", name: "Franks Valters Šteinmeiers, Egils Levits", detail: "Vācijas un Latvijas prezidenti" },
        { category: "Vāgneru ģimene", name: "Eva Vāgnere-Paskjē", detail: "Mazmazmeita · patrone kopš 2019. gada" },
        { category: "Akustika", name: "Jasuhisa Tojoda", detail: "Elbphilharmonie · Suntory Hall · LA Phil" },
        { category: "Dibināšanas fonds", name: "Messerschmitt Stiftung", detail: "~€1M piešķirti" }
      ],
      logos: [
        { title: "Deutscher Bundestag", subtitle: "€5M grants" },
        { title: "Auswärtiges Amt", subtitle: "Vācijas Ārlietu ministrija" },
        { title: "Eva Wagner-Pasquier", subtitle: "Patrone" },
        { title: "Messerschmitt Stiftung", subtitle: "Fonds" },
        { title: "Yasuhisa Toyota", subtitle: "Akustika" }
      ],
      acousticsNote: "Akustikas vadību nodrošina Dr. Jasuhisa Tojoda — akustiķis, kas stāv aiz Hamburgas Elbas filharmonijas un citām pasaules vadošajām koncertzālēm."
    },
    history: {
      title: "Kā mēs šeit nokļuvām",
      text: "No strukturālas avārijas līdz aktīvai būvniecībai — vienpadsmit gadus tapis projekts.",
      events: [
        { date: "2023", label: "Būvdarbi [AKTĪVS]", text: "Apstiprināta būvatļauja; darbi norit kopš decembra." },
        { date: "2023", label: "Pamatakmens un laika kapsulas ceremonija", text: "Tuvu Vāgnera 210. dzimšanas dienai, piedaloties Vācijas federālajai delegācijai." },
        { date: "2022", label: "Messerschmitt fonda atbalsts €700 000", text: "Piešķirts kāpņu telpas restaurācijas atbalstam." },
        { date: "2022", label: "Piešķirti €15 miljoni Vāgnera teātrim", text: "No Latvijas Emisijas kvotu izsolīšanas instrumenta (EKII)." },
        { date: "2020", label: "Vācijas Bundestāgs piešķir €5,2M", text: "Nodrošināts Vācijas federālais finansējums ēkas atjaunošanai." },
        { date: "2020", label: "Saeima nodod ēku Vāgnera biedrībai", text: "Atdzimšana var sākties." },
        { date: "2015", label: "Dibināta Rīgas Riharda Vāgnera biedrība", text: "Glābšanas misija sākas." },
        { date: "2007", label: "Ēka tiek slēgta", text: "Koncertdarbība apstājas ēkas avārijas stāvokļa dēļ." },
        { date: "1988–2007", label: "Vāgnera zāle", text: "Rīgas Kamermūzikas zāle uzņem koncertus gandrīz divas desmitgades." },
        { date: "1945–1992", label: "Ēkā atrodas Fundamentālā bibliotēka", text: "Kalpo par nozīmīgu pētniecības bibliotēku Latvijā." },
        { date: "1787–1939", label: "Biedrības «Musse» mājvieta", text: "Biedrība izveido vienu no ietekmīgākajiem kultūras saloniem Baltijā." },
        { date: "1837–1839", label: "Rihards Vāgners Rīgā", text: "Vāgners strādā par Rīgas Pilsētas teātra galveno diriģentu." },
        { date: "1782", label: "Rīgas Pilsētas teātra atklāšana", text: "Durvis ver pirmais pastāvīgais teātris Rīgā." }
      ]
    },
    today: {
      title: "Kur tas atrodas šodien",
      raised: "Piesaistīts līdz šim — €21M no €51M · Atklāšana 2028",
      status: "Būvdarbi sākās 2023. gadā. Pamatu izbūves darbi ir pabeigti, un rekonstrukcija turpinās. Kad atlikušais finansējums ir nodrošināts, Vāgnera teātri plānots atkal atvērt 2028. gadā.",
      timestamp: "Pēdējoreiz atjaunināts: 2026. gada jūnijā"
    },
    support: {
      title: "Ieraksti savu vārdu ēkā, kas tevi pārdzīvos.",
      text: "Every major European concert hall already has someone's name on it. This one doesn't yet – the founding layer is still open. A name carried by the hall itself, founding status for those who give before opening, access to opening events and benefit concerts, and a hand in deciding what Wagner's legacy becomes next.",
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
      overlayTitle: "Put your name in the building that outlasts you.",
      overlayCta: "See how to support",
      title: "Wagner's first theatre. The world's next one.",
      text: "Every major European concert hall already has someone's name on it. This one doesn't yet – the founding layer is still open. A name carried by the hall itself, founding status for those who give before opening, access to opening events and benefit concerts, and a hand in deciding what Wagner's legacy becomes next."
    },
    rebuilding: {
      title: "How Riga made Wagner",
      milestones: [
        { date: "IN AUGUST 1837", text: "Richard Wagner arrived as chief conductor of the City Theatre –\ntwenty-four, unknown, and in debt." },
        { date: "1837–1839", text: "Inside this hall he met the ideas that would define opera – what he later recalled as “the steeply rising floor of the auditorium, the semi-darkness of the audience area, the orchestra below”. He carried every one to Bayreuth.\nHere he began Rienzi, his breakthrough." },
        { date: "1839", text: "Fleeing creditors in 1839, a Baltic storm gave him the vision for The Flying Dutchman – and from Riga he went out to conquer Europe.\n\nThat theatre is still standing in Riga. Forgotten.\nSilent for twenty years." }
      ],
      button: "Read more about Wagner in Riga →",
      imageCaption: "This is where Richard Wagner discovered his calling."
    },
    renovation: {
      eyebrow: "WHAT YOUR SUPPORT RESTORES",
      title: "WHAT YOUR SUPPORT RESTORES",
      text: "We are not only restoring a building. We are restoring what it stood for – a place where serious music is made, and where young artists find what Wagner found here first.",
      feature1Title: "The Wagner Theatre",
      feature1Text: "The historic theatre where Richard Wagner served as chief conductor and found inspiration for the ideas he later realised in Bayreuth. Its amphitheatre-style auditorium, concealed orchestra pit and unique acoustics are being carefully restored for a new generation.",
      feature2Title: "The museum",
      feature2Text: "An interactive museum exploring Richard Wagner's years in Riga, the history of the Riga City Theatre, and the remarkable restoration of one of Europe's most significant historic theatre buildings.",
      feature3Title: "A home for European artists",
      feature3Text: "Residencies, rehearsal spaces and performance opportunities for emerging composers, musicians and performers – ensuring that the Wagner Theatre is not only a monument to the past, but a living stage for the future.",
      imageCaption: "The theatre today, under active reconstruction.",
      imageSrc: "/wp-content/uploads/2025/09/IMGC4880_AuroraHDR2019-edit.jpg"
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
      eyebrow: "ENDORSED AT THE HIGHEST LEVEL",
      title: "Endorsed at the highest level",
      text: "The restoration and revival of Riga's Wagner House is personally endorsed by the heads of state of Germany and Latvia and the Wagner family.",
      steinmeierRole: "FEDERAL PRESIDENT OF GERMANY",
      steinmeierComment: "The Federal President of Germany officially assumed patronage, highlighting the shared German-Latvian cultural legacy.",
      levitsRole: "PRESIDENT OF LATVIA (2019–2023)",
      levitsComment: "The President of Latvia jointly undertook the patronage for the resurrection of Riga's Wagner House.",
      evaRole: "WAGNER'S GREAT-GRANDDAUGHTER · PATRON",
      evaComment: "Great-granddaughter of Richard Wagner and former co-director of the Bayreuth Festival actively supports the project.",
      evaQuote: "\"Once you've been in the building and imagined how it could be enlivened and filled with music, it never lets you go. A unique building with music-historical significance will become a meeting place for young musicians from all over the world.\"",
      quoteEyebrow: "WAGNER FAMILY LEGACY",
      evaQuoteAuthor: "Eva Wagner-Pasquier, Wagner's great-granddaughter and patron",
      endorsements: [
        { category: "Patrons", name: "Frank-Walter Steinmeier, Egils Levits", detail: "Presidents of Germany and Latvia" },
        { category: "Wagner Family", name: "Eva Wagner-Pasquier", detail: "Great-granddaughter · Patron since 2019" },
        { category: "Acoustics", name: "Yasuhisa Toyota", detail: "Elbphilharmonie · Suntory Hall · LA Phil" },
        { category: "Founding Foundation", name: "Messerschmitt Stiftung", detail: "~€1M committed" }
      ],
      logos: [
        { title: "Deutscher Bundestag", subtitle: "€5M grant" },
        { title: "Auswärtiges Amt", subtitle: "German Foreign Office" },
        { title: "Eva Wagner-Pasquier", subtitle: "Patron" },
        { title: "Messerschmitt Stiftung", subtitle: "Foundation" },
        { title: "Yasuhisa Toyota", subtitle: "Acoustics" }
      ],
      acousticsNote: "Acoustics are led by Dr. Yasuhisa Toyota, the acoustician behind Hamburg's Elbphilharmonie and other venues."
    },
    history: {
      title: "How we got here",
      text: "From structural failure to active construction — a project eleven years in the making.",
      events: [
        { date: "2023", label: "Construction ACTIVE", text: "Approved building permit; works underway since December." },
        { date: "2023", label: "Cornerstone and time-capsule ceremony", text: "Near Wagner's 210th birthday, German federal delegation present." },
        { date: "2022", label: "Messerschmitt Stiftung commits €700,000", text: "To support the renovation of the staircase." },
        { date: "2022", label: "€15 million secured for the Wagner Theatre", text: "From the Latvian “Emissions Quota Auctioning Instrument” (EKII)." },
        { date: "2020", label: "German Bundestag allocates €5.2M", text: "Federal funding secured for the renovation." },
        { date: "2020", label: "Latvian Parliament transfers the building to the Society", text: "The resurrection can begin." },
        { date: "2015", label: "Riga Richard Wagner Society founded", text: "The rescue mission starts." },
        { date: "2007", label: "Building closes", text: "Concerts cease due to the building's deteriorating condition." },
        { date: "1988–2007", label: "Wagner Hall", text: "Riga's Chamber Music Hall hosts concerts for nearly two decades." },
        { date: "1945–1992", label: "Building houses the Fundamental Library", text: "Serves as a vital research library for Latvia." },
        { date: "1787–1939", label: "Home of the Musse Society", text: "The Society establishes one of the Baltic region's most influential cultural salons." },
        { date: "1837–1839", label: "Richard Wagner in Riga", text: "Wagner serves as chief conductor of the Riga City Theatre." },
        { date: "1782", label: "Opening of the Riga City Theatre", text: "Riga's first permanent theatre opens its doors." }
      ]
    },
    today: {
      title: "Where it stands today",
      raised: "Raised to date — €21M of €51M · Opening 2028",
      status: "Construction began in 2023. Foundation works are complete, and reconstruction continues. With the remaining funding secured, the Wagner Theatre is planned to reopen in 2028.",
      timestamp: "Last updated June 2026"
    },
    support: {
      title: "Put your name in the building that outlasts you.",
      text: "Every major European concert hall already has someone's name on it. This one doesn't yet – the founding layer is still open. A name carried by the hall itself, founding status for those who give before opening, access to opening events and benefit concerts, and a hand in deciding what Wagner's legacy becomes next.",
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
      overlayTitle: "Verewigen Sie Ihren Namen in einem Gebäude, das Sie überdauert.",
      overlayCta: "Erfahren Sie, wie Sie unterstützen können",
      title: "Wagners erstes Theater. Das nächste der Welt.",
      text: "Jedes große europäische Konzerthaus trägt bereits einen Namen. Dieses noch nicht – die Gründersebene ist noch offen. Ein Name, den der Saal selbst trägt, Gründerstatus für diejenigen, die vor der Eröffnung spenden, Zugang zu Eröffnungsveranstaltungen und Benefizkonzerten sowie eine Stimme bei der Gestaltung des nächsten Kapitels von Wagners Erbe."
    },
    rebuilding: {
      title: "Wie Riga Wagner prägte",
      milestones: [
        { date: "IM AUGUST 1837", text: "Richard Wagner kam als Chefdirigent des Stadttheaters an –\nvierundzwanzig, unbekannt und verschuldet." },
        { date: "1837–1839", text: "In diesem Saal stieß er auf die Ideen, die die Oper definieren sollten – was er später als „den steil ansteigenden Boden des Zuschauerraums, das Halbdunkel des Publikumsbereichs, das Orchester darunter“ in Erinnerung rief. Er nahm jede einzelne davon mit nach Bayreuth.\nHier begann er Rienzi, seinen Durchbruch." },
        { date: "1839", text: "Auf der Flucht vor Gläubigern im Jahr 1839 gab ihm ein Sturm auf der Ostsee die Vision für Der fliegende Holländer – und von Riga aus zog er los, um Europa zu erobern.\n\nDieses Theater steht immer noch in Riga. Vergessen.\nSeit zwanzig Jahren stumm." }
      ],
      button: "Mehr über Wagner in Riga lesen →",
      imageCaption: "Hier entdeckte Richard Wagner seine Berufung."
    },
    renovation: {
      eyebrow: "WAS IHR BEITRAG RESTAURIERT",
      title: "WAS IHR BEITRAG RESTAURIERT",
      text: "Wir restaurieren nicht nur ein Gebäude. Wir restaurieren das, wofür es stand – einen Ort, an dem ernsthafte Musik gemacht wird und junge Künstler das finden, was Wagner hier zuerst fand.",
      feature1Title: "Das Wagner-Theater",
      feature1Text: "Das historische Theater, in dem Richard Wagner als Chefdirigent wirkte und Inspiration für die Ideen fand, die er später in Bayreuth verwirklichte. Sein amphi-theatralischer Zuschauerraum, der verdeckte Orchestergraben und die einzigartige Akustik werden sorgfältig restauriert.",
      feature2Title: "Das Museum",
      feature2Text: "Ein interaktives Museum, das Richard Wagners Jahre in Riga, die Geschichte des Rigaer Stadttheaters und die bemerkenswerte Restaurierung eines der bedeutendsten historischen Theatergebäude Europas beleuchtet.",
      feature3Title: "Ein Zuhause für europäische Künstler",
      feature3Text: "Residenzen, Probenräume und Auftrittsmöglichkeiten für angehende Komponisten, Musiker und Darsteller – um sicherzustellen, dass das Wagner-Theater nicht nur ein Denkmal der Vergangenheit ist, sondern eine lebendige Bühne für die Zukunft.",
      imageCaption: "Das Theater heute, im aktiven Wiederaufbau.",
      imageSrc: "/wp-content/uploads/2025/09/IMGC4880_AuroraHDR2019-edit.jpg"
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
      eyebrow: "UNTERSTÜTZT AUF HÖCHSTER EBENE",
      title: "Unterstützt auf höchster Ebene",
      text: "Der Wiederaufbau des Rigaer Wagner-Hauses wird von den Staatsoberhäuptern Deutschlands und Lettlands sowie der Familie Wagner persönlich unterstützt.",
      steinmeierRole: "DEUTSCHER BUNDESPRÄSIDENT",
      steinmeierComment: "Der Bundespräsident übernahm offiziell die Schirmherrschaft und betonte das gemeinsame kulturelle Erbe.",
      levitsRole: "PRÄSIDENT VON LETTLAND (2019–2023)",
      levitsComment: "Der lettische Staatspräsident übernahm gemeinsam die Schirmherrschaft für die Wiederbelebung des Wagner-Hauses.",
      evaRole: "WAGNERS URENKELIN · SCHIRMHERRIN",
      evaComment: "Urenkelin von Richard Wagner und ehemalige Co-Leiterin der Bayreuther Festspiele unterstützt das Projekt aktiv.",
      evaQuote: "„Wenn man erst einmal im Gebäude war und sich vorgestellt hat, wie es belebt und mit Musik erfüllt werden könnte, lässt es einen nie wieder los. Ein einzigartiges Gebäude wird zu einem Treffpunkt für junge Musiker aus aller Welt.“",
      quoteEyebrow: "DAS ERBE DER FAMILIE WAGNER",
      evaQuoteAuthor: "Eva Wagner-Pasquier, Wagners Urenkelin und Schirmherrin",
      endorsements: [
        { category: "Schirmherren", name: "Frank-Walter Steinmeier, Egils Levits", detail: "Präsidenten von Deutschland und Lettland" },
        { category: "Familie Wagner", name: "Eva Wagner-Pasquier", detail: "Urenkelin · Schirmherrin seit 2019" },
        { category: "Akustik", name: "Yasuhisa Toyota", detail: "Elbphilharmonie · Suntory Hall · LA Phil" },
        { category: "Gründungsstiftung", name: "Messerschmitt Stiftung", detail: "~€1M zugesagt" }
      ],
      logos: [
        { title: "Deutscher Bundestag", subtitle: "€5M Förderung" },
        { title: "Auswärtiges Amt", subtitle: "German Foreign Office" },
        { title: "Eva Wagner-Pasquier", subtitle: "Schirmherrin" },
        { title: "Messerschmitt Stiftung", subtitle: "Stiftung" },
        { title: "Yasuhisa Toyota", subtitle: "Akustik" }
      ],
      acousticsNote: "Die Akustik wird von Dr. Yasuhisa Toyota geleitet, dem Akustiker hinter der Elbphilharmonie in Hamburg."
    },
    history: {
      title: "Wie wir hierher gekommen sind",
      text: "Vom strukturellen Versagen bis zum aktiven Bau – ein Projekt, das seit elf Jahren in Arbeit ist.",
      events: [
        { date: "2023", label: "Bauarbeiten [AKTIV]", text: "Baugenehmigung erteilt; Arbeiten laufen seit Dezember." },
        { date: "2023", label: "Grundsteinlegung und Zeitkapsel-Zeremonie", text: "Nahe Wagners 210. Geburtstag, deutsche Bundesdelegation anwesend." },
        { date: "2022", label: "Messerschmitt Stiftung sagt €700.000 zu", text: "Zur Unterstützung der Treppenhaussanierung." },
        { date: "2022", label: "€15 Millionen für das Wagner-Theater gesichert", text: "Aus dem lettischen Emissionshandelsinstrument (EKII)." },
        { date: "2020", label: "Deutscher Bundestag bewilligt €5,2M", text: "Bundeszuschuss für die Sanierung gesichert." },
        { date: "2020", label: "Lettisches Parlament übergibt Gebäude an den Verein", text: "Die Auferstehung kann beginnen." },
        { date: "2015", label: "Rigaer Richard-Wagner-Gesellschaft gegründet", text: "Die Rettungsmission beginnt." },
        { date: "2007", label: "Schließung des Gebäudes", text: "Konzerte stoppen wegen des baufälligen Zustands." },
        { date: "1988–2007", label: "Wagner-Saal", text: "Rigas Kammermusiksaal beherbergt fast zwei Jahrzehnte lang Konzerte." },
        { date: "1945–1992", label: "Gebäude beherbergt die Fundamentalbibliothek", text: "Dient als zentrale Forschungsbibliothek Lettlands." },
        { date: "1787–1939", label: "Heimat der Musse-Gesellschaft", text: "Die Gesellschaft etabliert einen der einflussreichsten Kultursalons des Baltikums." },
        { date: "1837–1839", label: "Richard Wagner in Riga", text: "Wagner dient als Chefdirigent des Rigaischen Stadttheaters." },
        { date: "1782", label: "Eröffnung des Rigaischen Stadttheaters", text: "Rigas erstes ständiges Theater öffnet seine Pforten." }
      ]
    },
    today: {
      title: "Wo es heute steht",
      raised: "Bisher gesammelt — €21 Mio. von €51 Mio. · Eröffnung 2028",
      status: "Die Bauarbeiten begannen 2023. Die Gründungsarbeiten sind abgeschlossen, und der Wiederaufbau wird fortgesetzt. Wenn die verbleibende Finanzierung gesichert ist, soll das Wagner-Theater 2028 wiedereröffnet werden.",
      timestamp: "Zuletzt aktualisiert im Juni 2026"
    },
    support: {
      title: "Verewigen Sie Ihren Namen in einem Gebäude, das Sie überdauert.",
      text: "Every major European concert hall already has someone's name on it. This one doesn't yet – the founding layer is still open. A name carried by the hall itself, founding status for those who give before opening, access to opening events and benefit concerts, and a hand in deciding what Wagner's legacy becomes next.",
      items: [
        { title: "Ihr Name im Saal:", text: "Benannte Sitzplätze, benannte Räume — ein dauerhafter Eintrag derjenigen, die dies möglich gemacht haben" },
        { title: "Gründerstatus:", text: "Spender, die vor der Eröffnung geben, haben ein anderes Gewicht als diejenigen, die danach spenden" },
        { title: "Zugang und Anerkennung:", text: "Eröffnungsveranstaltungen, Benefizkonzerte, Jahresberichte — Sie sind Teil der Geschichte" },
        { title: "Wagners Erbe gestalten:", text: "Hier hat er begonnen. Helfen Sie zu entscheiden, was als Nächstes kommt" }
      ],
      button: "Erfahren Sie, wie Sie unterstützen können →"
    },
    news: {
      title: "News & updates"
    }
  }
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = (['lv', 'en', 'de'].includes(lang) ? lang : 'lv') as 'lv' | 'en' | 'de';
  const t = translations[currentLang] || translations.lv;

  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function RebuildingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const currentLang = (['lv', 'en', 'de'].includes(lang) ? lang : 'lv') as 'lv' | 'en' | 'de';
  const t = translations[currentLang] || translations.lv;

  const result = await getPosts({
    per_page: 10,
    categories: NEWS_CATEGORY_MAP[currentLang]?.id,
    lang: currentLang,
  });

  const newsPosts = (result?.posts || [])
    .filter((p: any) => !isGalleryPost(p) && isPostInLanguage(p, currentLang))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: Hero Block */}
      <section className="vag-container bg-white pb-6 pt-6">
        <div
          className="relative h-[60vh] min-h-[460px] w-full overflow-hidden"
          style={{ borderRadius: 'var(--card-radius)' }}
        >
          {/* Layer 1: Photo */}
          <Image
            src="/wp-content/uploads/2025/09/IMGC4880_AuroraHDR2019-edit.jpg"
            alt="Vāgnera Nams"
            fill
            className="object-cover object-center"
            style={{ zIndex: 0 }}
            priority
          />

          {/* Layer 2: Dark gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.82) 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Layer 3: Text and CTA */}
          <div
            style={{ position: 'absolute', inset: 0, zIndex: 2 }}
            className="flex flex-col justify-end pb-20 md:pb-28 px-8 md:px-[68px]"
          >
            <div className="max-w-3xl text-left">
              <h2 className="mb-6 text-white uppercase tracking-tight font-serif text-2xl md:text-4xl lg:text-5xl leading-tight font-normal drop-shadow-md">
                {t.hero.overlayTitle}
              </h2>
              <div>
                <a
                  href="#support"
                  className="btn-flood inline-flex items-center justify-center bg-[#B49661] px-12 md:px-16 font-bold uppercase tracking-wider text-white whitespace-nowrap min-w-[280px] md:min-w-[340px] text-center transition-all hover:bg-[#9F834F]"
                  style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
                >
                  {t.hero.overlayCta}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* First body text below hero image */}
        <div className="pt-6 pb-6 px-8 md:px-[68px]">
          <h3
            className="text-black font-serif font-bold uppercase tracking-tight m-0 mb-3 text-xl md:text-2xl leading-tight"
            dangerouslySetInnerHTML={{ __html: t.hero.title }}
          />
          <div className="max-w-4xl">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-sans m-0">
              {t.hero.text}
            </p>
          </div>
        </div>
        <div className="h-px bg-gray-200 my-4" />
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
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#B49661]/10 text-[#B49661] font-bold text-sm mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1 uppercase tracking-wider" style={{ fontSize: 'var(--body)' }}>{m.date}</h4>
                      <p className="text-gray-700 leading-relaxed font-sans whitespace-pre-line">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href={`/${currentLang}/vesture`}
                  className="inline-flex items-center text-[#B49661] font-bold tracking-wider uppercase hover:underline text-sm font-sans"
                >
                  {t.rebuilding.button}
                </Link>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md rounded-[var(--card-radius)] border border-gray-100">
                <Image
                  src="/images/projekts/wagner_side_profile.jpg"
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

      {/* SECTION 3: WHAT YOUR SUPPORT RESTORES */}
      <section className="py-20 bg-[#F9F9F9] border-t border-b border-gray-100">
        <div className="vag-container">
          <div className="mb-10 max-w-4xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B49661] mb-3">
              {t.renovation.eyebrow}
            </p>
            <h2 className="mb-6 text-black tracking-tight font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-tight uppercase">
              {t.renovation.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-sans">
              {t.renovation.text}
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center pt-6">
            {/* Left side: Features */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-black font-normal mb-2 uppercase">
                  {t.renovation.feature1Title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg font-sans leading-relaxed">
                  {t.renovation.feature1Text}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-black font-normal mb-2 uppercase">
                  {t.renovation.feature2Title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg font-sans leading-relaxed">
                  {t.renovation.feature2Text}
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-black font-normal mb-2 uppercase">
                  {t.renovation.feature3Title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg font-sans leading-relaxed">
                  {t.renovation.feature3Text}
                </p>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md rounded-[var(--card-radius)] border border-gray-100">
                <Image
                  src={t.renovation.imageSrc}
                  alt={t.renovation.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-gray-500 italic font-sans text-center md:text-left">
                {t.renovation.imageCaption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The people behind it */}
      <section className="py-16 bg-white">
        <div className="vag-container">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Left Column - Texts */}
            <div className="w-full md:w-1/2 text-left">
              <h2 className="mb-8 text-black tracking-widest font-serif text-2xl md:text-3xl font-normal">
                {t.team.title}
              </h2>

              <div className="space-y-8 mb-8 font-sans">
                <p className="text-gray-700 leading-relaxed text-base">
                  {t.team.profile1}
                </p>

                <div className="border-l-2 border-[#B49661] pl-6 py-1">
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
                  className="text-[#B49661] font-bold hover:underline inline-flex items-center gap-1 uppercase tracking-wider text-sm"
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

      {/* SECTION 5: Endorsed at the Highest Level */}
      <section className="py-20 bg-[#F9F9F9] border-t border-b border-gray-200">
        <div className="vag-container">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#B49661] mb-3">
              {t.proof.eyebrow}
            </p>
            <h2 className="mb-6 text-black tracking-tight font-serif text-3xl md:text-5xl font-normal uppercase">
              {t.proof.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-sans">
              {t.proof.text}
            </p>
          </div>

          {/* Patron People Cards Grid (3 patrons) */}
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {/* Frank-Walter Steinmeier */}
            <div className="bg-white p-6 rounded-[var(--card-radius)] border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="relative w-full h-[280px] overflow-hidden rounded-[var(--card-radius-sm)] mb-4">
                  <Image src="/images/patrons/steinmeier.jpg" alt="Frank-Walter Steinmeier" fill className="object-cover object-[50%_0%]" />
                </div>
                <h3 className="font-serif font-bold text-black text-lg leading-snug">Frank-Walter Steinmeier</h3>
                <p className="text-xs text-[#B49661] font-bold uppercase tracking-wider mt-1 mb-3">{t.proof.steinmeierRole}</p>
                <p className="text-gray-600 text-xs font-sans leading-relaxed">
                  {t.proof.steinmeierComment}
                </p>
              </div>
            </div>

            {/* Egils Levits */}
            <div className="bg-white p-6 rounded-[var(--card-radius)] border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="relative w-full h-[280px] overflow-hidden rounded-[var(--card-radius-sm)] mb-4">
                  <Image src="/images/patrons/levits.jpg" alt="Egils Levits" fill className="object-cover object-[50%_15%]" />
                </div>
                <h3 className="font-serif font-bold text-black text-lg leading-snug">Egils Levits</h3>
                <p className="text-xs text-[#B49661] font-bold uppercase tracking-wider mt-1 mb-3">{t.proof.levitsRole}</p>
                <p className="text-gray-600 text-xs font-sans leading-relaxed">
                  {t.proof.levitsComment}
                </p>
              </div>
            </div>

            {/* Eva Wagner-Pasquier */}
            <div className="bg-white p-6 rounded-[var(--card-radius)] border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="relative w-full h-[280px] overflow-hidden rounded-[var(--card-radius-sm)] mb-4">
                  <Image src="/images/patrons/wagner.jpg" alt="Eva Wagner-Pasquier" fill className="object-cover object-[50%_0%]" />
                </div>
                <h3 className="font-serif font-bold text-black text-lg leading-snug">Eva Wagner-Pasquier</h3>
                <p className="text-xs text-[#B49661] font-bold uppercase tracking-wider mt-1 mb-3">{t.proof.evaRole}</p>
                <p className="text-gray-600 text-xs font-sans leading-relaxed">
                  {t.proof.evaComment}
                </p>
              </div>
            </div>
          </div>

          {/* Highlighted Quote from Eva Wagner-Pasquier */}
          <div className="bg-[#002142] text-white p-8 md:p-10 rounded-[var(--card-radius)] shadow-xl border-l-4 border-l-[#B49661] relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[#B49661] text-xs font-bold uppercase tracking-[0.2em] block mb-3">{t.proof.quoteEyebrow}</span>
              <blockquote className="font-serif italic text-lg md:text-2xl leading-relaxed text-gray-100 mb-4">
                {t.proof.evaQuote}
              </blockquote>
              <cite className="not-italic text-sm font-semibold text-gray-400 font-sans block">
                — {t.proof.evaQuoteAuthor}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: How we got here (Timeline) */}
      <section className="py-16 bg-white">
        <div className="vag-container max-w-4xl">
          <div className="text-left mb-16">
            <h2 className="text-black uppercase tracking-widest mb-4 font-serif text-2xl md:text-3xl font-normal">{t.history.title}</h2>
            <p className="text-gray-600 max-w-2xl font-sans text-sm md:text-base">{t.history.text}</p>
          </div>

          <div className="space-y-6 max-w-3xl">
            {t.history.events.map((ev, i) => (
              <div key={i} className="flex gap-4 md:gap-6 items-start">
                {/* Column 1: Fixed-width Date column */}
                <div className="w-32 md:w-40 shrink-0 text-right font-serif font-bold text-sm md:text-base text-[#B49661] pt-0.5">
                  {ev.date}
                </div>

                {/* Column 2: Bullet dot + vertical line */}
                <div className="relative flex flex-col items-center self-stretch shrink-0 w-4">
                  <div className="w-3 h-3 rounded-full bg-[#B49661] border-2 border-white shrink-0 z-10 mt-1" />
                  <div className="w-px bg-gray-200 flex-1 -mt-1" />
                </div>

                {/* Column 3: Event Content */}
                <div className="pb-8 font-sans">
                  <h3 className="font-bold text-black text-sm md:text-base mb-1">
                    {ev.label}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {ev.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Where It Stands Today (Metric Pills Removed Per User Request) */}
      <section className="py-16 bg-white">
        <div className="vag-container max-w-3xl">
          <div className="border-2 border-[#B49661] p-8 md:p-12 bg-white text-center shadow-lg" style={{ borderRadius: 'var(--card-radius)' }}>
            <h2 className="text-black uppercase tracking-widest mb-4 font-sans font-bold text-xl">
              {t.today.title}
            </h2>
            <div className="text-3xl md:text-5xl font-serif font-bold text-[#B49661] mb-8">
              {t.today.raised}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 h-5 rounded-full overflow-hidden mb-8 border border-gray-200 p-0.5">
              <div
                className="bg-[#B49661] h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(21 / 51) * 100}%` }}
              />
            </div>

            {/* Updated status text */}
            <p className="text-gray-700 font-sans max-w-xl mx-auto text-lg leading-relaxed">
              {t.today.status}
            </p>
          </div>

          <p className="text-right text-xs text-gray-400 font-sans italic mt-4">
            {t.today.timestamp}
          </p>
        </div>
      </section>

      {/* SECTION 8: Put your name in the building that outlasts you (Brand Blue Framed CTA Card) */}
      <section id="support" className="py-16 bg-[#F9F9F9]">
        <div className="vag-container max-w-3xl">
          <div
            className="border-2 border-[#B49661] p-8 md:p-12 bg-[#002142] text-white text-center shadow-xl"
            style={{ borderRadius: 'var(--card-radius)' }}
          >
            <h2 className="text-[#B49661] uppercase tracking-widest mb-6 font-serif text-2xl md:text-4xl font-normal leading-tight">
              {t.support.title}
            </h2>
            <p className="text-gray-300 font-sans max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-8">
              {t.support.text}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left font-sans text-sm mb-8 border-t border-b border-white/10 py-6">
              {t.support.items.map((item, i) => (
                <div key={i} className="bg-white/10 p-4 rounded border border-white/10">
                  <span className="block text-[#B49661] font-bold mb-1">{item.title}</span>
                  <span className="text-gray-200 text-xs leading-relaxed block">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href={`/${currentLang}/ziedojumi`}
                className="btn-flood inline-flex items-center justify-center bg-[#B49661] px-10 font-bold uppercase tracking-wider text-white transition-all hover:bg-[#9F834F]"
                style={{ height: 'var(--btn-height)', borderRadius: 'var(--card-radius-sm)', fontSize: 'var(--ui-nav)' }}
              >
                {t.support.button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: News & Updates (Strictly language filtered) */}
      {newsPosts.length > 0 && (
        <NewsSection posts={newsPosts} title={t.news.title} lang={currentLang} />
      )}
    </main>
  );
}
