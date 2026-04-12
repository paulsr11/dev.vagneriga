/**
 * Static content for /[lang]/projekts — adapted from https://vagneriga.lv/par-projektu/
 * Images are mirrored under /public/images/projekts/.
 */

const IMG = '/images/projekts';

export const projektsCopy = {
  lv: {
    metaTitle: 'Par projektu – Rīgas Vāgnera teātris',
    metaDescription:
      'Rīgas Vāgnera nama atjaunošanas projekts: vīzija GesamtkunstWerk 21, kultūras pasākumi, ēkas restaurācija un arhitektūras plāni.',
    heroEyebrow: 'Apraksts',
    heroTitle: 'Par projektu',
    heroLead:
      'Ēka ir izveidota kā funkcionāli pārdomāta skatuves un skatītāju telpa: plūsmas, tilpums un akustika veido vienu veselumu. Šīs funkcionālās arhitektūras atjaunošana ir projekta kodols — atgriezt namā tā paredzēto lomu kā kultūras pasākumu un kopīgas pieredzes vietu.',
    heroImage: `${IMG}/5.png`,
    sections: {
      vizija: {
        title: 'Vīzija',
        paragraphs: [
          'Mūsu iecere pēc Vāgnera teātra nama atjaunošanas ir piepildīt to ar jaunu, mūsdienīgu saturu.',
          'Vāgnera mērķis bija visu mākslu līdzvērtīga apvienošanās. Strukturālos priekšnoteikumus tam viņš iepazina savā Rīgas periodā, un var pieņemt, ka visaptverošajai pieejai, kāda raksturīga viņa darbiem, Rīga bijusi izejas punkts.',
          'Zem “GesamtkunstWerk 21” karoga ēka tiks izmantota dažādām vajadzībām un ļoti daudzveidīgās kombinācijās.',
          'Papildus teātra izrādēm, koncertiem un Vāgnera muzeja ekspozīcijas piedāvājumam nams kļūs par “GesamtkunstWerk 21” – 21. gadsimtā kopīgi radītu mākslas darbu inkubatoru. Klasiskie mākslinieki kopā ar radošiem cilvēkiem no dažādām jomām strādās šajā “rūpnīcā” (Werk), lai radītu ko pilnīgi jaunu. Šādā ceļā – un pilnīgi Vāgnera garā – katru gadu taps jauns kopdarbs.',
          'Tiks organizētas meistarklases mūzikā un citās mākslās. Starptautiski atzīti meistari apmācīs audzēkņus no Eiropas un visas pasaules. Dalībniekiem būs iespēja dzīvot un strādāt ēkā, kas līdzīga Vācijas valdības atbalstītajai Masimo villai Milānā.',
          'Rīgas Vācu teātra atdzimšana kļūs par Eiropas kultūras un politiskās vēstures simbolu, cilvēkus apvienojot un samierinot; tā kalpos par bākas uguni Eiropas Ziemeļaustrumos.',
        ],
      },
      kulturas: {
        title: 'Kultūras pasākumi',
        intro:
          'Vāgnera laikā teātrī pamatā tika iestudēti trīs žanru uzvedumi: opera (ieskaitot komisko operu – opereti), drāmas izrādes un balets. Notika arī pa kādam nelielam koncertam. Pēc Vāgnera zāles atjaunošanas namā varēs noritēt daudzveidīgi kultūras pasākumi.',
        bullets: [
          'muzikālā teātra mazās formas (piemēram, Kurta Veila, Bertolda Brehta u.c. lugas ar mūziku jeb dziesmuspēles; mūzikli; eksperimentālas muzikālās izrādes; operetes; seno operu (baroka, renesanses) izrādes;',
          'teatralizēti koncerti (nevienā no pašreizējām Rīgas mazajām koncertzālēm nav teatralizācijas skatuves iespēju);',
          'drāmas teātra mazo formu izrādes (sākot no monologa izrādēm un beidzot ar pantomīmu);',
          'kamermūzikas koncerti, it īpaši senās mūzikas koncerti, kam vēsturiskā zāle piešķirs sevišķu oreolu;',
          'zāle būs izmantojama arī dažādu mūzikas vienību mēģinājumiem.',
        ],
        thumbs: [`${IMG}/6.png`, `${IMG}/5.png`, `${IMG}/4.png`],
      },
      ekas: {
        title: 'Ēkas restaurācija',
        paragraphs: [
          'Topošais projekts idejiski balstīts uz četriem elementiem – pati atjaunotā ēka, baroka laika koncertzāle un 19.gs svētku zāle, mūzikas baudījums un muzejs/ekspozīcija. Tikai viss kopums ir zīmolu veidojošs un pietiekami spēcīgs apmeklētāju uzrunājošs kultūras produkts. Tieši šis spēks apvienojumā ļaus konkurēt topošajai atjaunotajai R. Vāgnera ēkai ar citiem muzejiem un koncertzālēm Latvijas, Ziemeļvalstu un Eiropas mērogā, bagātinās Latvijas iedzīvotāju un viesu iespējas baudīt kvalitatīvu kultūras piedāvājumu un attaisnos tā atjaunošanā ieguldītos resursus.',
          'Muzejs vai ekspozīcija topošajā Vāgnerā ēkā uzlūkojams kā medijs – spējīgs nodot visa nama atjaunošanas jēgas vēstījumu topošajam apmeklētājam. Tas saistīs vēsturisko ēku, R. Vāgnera personību, Rīgas un visas Eiropas baroka laika mūzikas dzīvi ar kultūras izziņas motivāciju apveltīto apmeklētāju. Muzejs/ekspozīcija būs tas, kas ieviesīs apritē šī perioda vēstures avotus – priekšmetus un/vai dokumentus no Latvijas muzeju un bibliotēku krātuvēm, kas līdz šim nav tikuši eksponēti vai kas netiek pastāvīgi eksponēti.',
        ],
      },
      avarijas: {
        title: 'Avārijas stāvoklis',
        paragraphs: [
          'Šobrīd ēkas tehniskais stāvoklis vērtējams kā neapmierinošs – pamatu sēšanās dēļ radušās plaisas sienās, nepieciešams veikt pamatu stiprināšanu, griestu pārsegumu remontu, inženierkomunikāciju atjaunošanu, pilnu kosmētisko remontu un vēsturisko elementu restaurāciju.',
          'Atjaunojot Vāgnera zāli, tiktu panākti vairāki būtiski ieguvumi, kas ne tikai veicinātu kultūras pasākumu dažādību un pieejamību Latvijas iedzīvotājiem, stiprinātu Rīgas un Latvijas kā Austrumeiropas kultūras centra tēlu un saikni ar Rihardu Vāgneru, bet arī radītu ieņēmumu plūsmas, kas ilgākā laika periodā ļautu atgūt atjaunošanā ieguldītos līdzekļus un nodrošinātu projekta ilgtspēju.',
        ],
        benefitsTitle: 'Svarīgākie ieguvumi:',
        benefits: [
          'vienīgās akustiski atbilstošās kamermūzikas zāles Rīgā atjaunošana;',
          'arhitektoniski nozīmīgā nama saglabāšana, modernizācija un kultūrvēsturiskā objekta publiska pieejamība;',
          'iespēja uz izdevīgiem komerciāliem nosacījumiem nodrošināt telpas Latvijas kultūras nozīmīgākajām struktūrvienībām – kamerorķestrim “Kremerata Baltica”, Valsts Akadēmiskajam korim “Latvija” un VAS “Latvijas Koncerti”;',
          'iespēja ēkā izveidot Riharda Vāgnera muzeju;',
          'iespēja veidot sadarbību ar Eiropas Riharda Vāgnera biedrībām.',
        ],
        photoInterior1: `${IMG}/MG_6842.jpg`,
        photoInterior2: `${IMG}/MG_6845.jpg`,
        photoInterior1Alt: 'Ēkas interjers',
        photoInterior2Alt: 'Ēkas interjers',
        photo1877: `${IMG}/1877_p73-f2761-2apr-650lieta-12lapa.jpg`,
        photoFacade: `${IMG}/VC481gnera4070.jpg`,
        photo1877Alt: 'Vēsturisks attēls — Rīgas pilsētas teātris 1877',
        photoFacadeAlt: 'Riharda Vāgnera ielas fasāde',
      },
      plani: {
        title: 'Arhitektūras plāni un griezumi',
        subtitle: 'Projektēšanas uzņēmuma “Zaigas Gailes birojs” izstrādātas skices Vāgnera mājas pārbūvei.',
        authors: 'Autori: arh. Zaiga Gaile, arh. Filips Pitens',
        alts: [
          'Situācijas plāns',
          'Zemes līmenis',
          '-1. līmenis',
          '1. stāvs',
          '2. stāvs',
          '3. stāvs',
          'Bēniņu stāvs',
          'Griezums A–A',
          'Griezumi BB un CC',
        ],
      },
    },
    planFiles: [
      `${IMG}/01_Wagner-theater_Situation-plan-1000x625.jpg`,
      `${IMG}/02_Wagner-theater_Ground-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/03_Wagner-theater_-1-level-plan-1-200-1000x625.jpg`,
      `${IMG}/04_Wagner-theater_First-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/05_Wagner-theater_Second-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/06_Wagner-theater_Third-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/07_Wagner-theater_Attic-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/08_Wagner-theater_Section-A-A-1000x625.jpg`,
      `${IMG}/09_Wagner-theater_sections-BB-_-CC-1-200-1000x625.jpg`,
    ],
  },
  en: {
    metaTitle: 'About the project – Wagner Theatre Riga',
    metaDescription:
      'Restoration of the Wagner House in Riga: GesamtkunstWerk 21 vision, cultural programme, building conservation and architectural drawings.',
    heroEyebrow: 'Overview',
    heroTitle: 'About the project',
    heroLead:
      'The building is function-driven architecture: stage and auditorium, circulation, volume and acoustics form a single whole. Restoring that functional logic is central to the project—returning the house to its intended role as a place for performance and shared cultural experience.',
    heroImage: `${IMG}/5.png`,
    sections: {
      vizija: {
        title: 'Vision',
        paragraphs: [
          'Our aim after restoring the Wagner theatre house is to fill it with new, contemporary content.',
          'Wagner’s goal was an equal union of all arts. He explored the structural foundations for that during his Riga years, and it is fair to say that Riga was the starting point for the all-embracing approach characteristic of his work.',
          'Under the banner of “GesamtkunstWerk 21” the building will serve many needs and highly diverse combinations.',
          'Beyond theatre performances, concerts and the Wagner museum, the house will become “GesamtkunstWerk 21”—an incubator for works of art created together in the 21st century. Classical artists will work alongside creative people from many fields in this “factory” (Werk) to create something entirely new. In this way—and very much in Wagner’s spirit—a new joint work will emerge every year.',
          'Masterclasses will be held in music and other arts. Internationally recognised masters will teach students from Europe and the world. Participants will be able to live and work in a building comparable to the Massimo villa in Milan supported by the German government.',
          'The rebirth of the Riga German theatre will stand as a symbol of European cultural and political history, uniting and reconciling people; it will serve as a beacon in north-eastern Europe.',
        ],
      },
      kulturas: {
        title: 'Cultural events',
        intro:
          'In Wagner’s time the theatre chiefly staged three genres: opera (including comic opera and operetta), drama and ballet, with occasional small concerts. After the Wagner Hall is restored, the house will host a wide range of cultural events.',
        bullets: [
          'small-scale musical theatre (e.g. Kurt Weill, Bertolt Brecht and similar plays with music, musicals, experimental musical shows, operettas, early opera from the Baroque and Renaissance);',
          'staged concerts (today’s small Riga concert halls lack a stage suited to theatrical staging);',
          'small-form drama (from monologues to pantomime);',
          'chamber concerts, especially early music, for which the historic hall will add a special atmosphere;',
          'the hall will also be available for rehearsals by various music groups.',
        ],
        thumbs: [`${IMG}/6.png`, `${IMG}/5.png`, `${IMG}/4.png`],
      },
      ekas: {
        title: 'Building restoration',
        paragraphs: [
          'The project rests on four ideas: the restored building itself, the Baroque concert hall and the 19th-century festive hall, the musical experience, and a museum or exhibition. Only the whole is strong enough as a cultural product to shape the brand. Together it will let the restored Wagner House compete with other museums and concert halls in Latvia, the Nordic countries and Europe, enrich what residents and visitors can experience, and justify the investment in restoration.',
          'The museum or exhibition is a medium to convey why the whole house is being restored. It will link the historic building, Wagner’s person, musical life in Riga and Baroque Europe with visitors motivated by cultural discovery. It will bring into circulation historical sources—objects and/or documents from Latvian museum and library stores that have not been shown or are not on permanent display.',
        ],
      },
      avarijas: {
        title: 'Structural condition',
        paragraphs: [
          'The building’s technical condition is poor: settlement of foundations has caused cracks in the walls; foundation strengthening, repair of ceiling structures, renewal of building services, full cosmetic repair and restoration of historic elements are required.',
          'Restoring the Wagner Hall would bring major benefits: more diverse and accessible cultural life for Latvia, a stronger image of Riga and Latvia as an East European cultural centre and a bond with Richard Wagner, and revenue streams that over time can recover investment and sustain the project.',
        ],
        benefitsTitle: 'Key benefits:',
        benefits: [
          'restoring Riga’s only acoustically suitable chamber-music hall;',
          'preserving and modernising an architecturally significant building and opening the heritage site to the public;',
          'the possibility to house leading Latvian cultural institutions—Kremerata Baltica, the State Academic Choir “Latvija” and Latvijas Koncerti—on favourable commercial terms;',
          'the possibility of a Richard Wagner museum in the building;',
          'the possibility of cooperation with European Wagner societies.',
        ],
        photoInterior1: `${IMG}/MG_6842.jpg`,
        photoInterior2: `${IMG}/MG_6845.jpg`,
        photoInterior1Alt: 'Building interior',
        photoInterior2Alt: 'Building interior',
        photo1877: `${IMG}/1877_p73-f2761-2apr-650lieta-12lapa.jpg`,
        photoFacade: `${IMG}/VC481gnera4070.jpg`,
        photo1877Alt: 'Historic image — Riga city theatre, 1877',
        photoFacadeAlt: 'Facade on Richard Wagner Street',
      },
      plani: {
        title: 'Plans and sections',
        subtitle: 'Sketches for the Wagner House reconstruction by Zaiga Gaile office.',
        authors: 'Authors: architect Zaiga Gaile, architect Philip Peeters',
        alts: [
          'Site plan',
          'Ground floor',
          'Level -1',
          'First floor',
          'Second floor',
          'Third floor',
          'Attic floor',
          'Section A–A',
          'Sections BB and CC',
        ],
      },
    },
    planFiles: [
      `${IMG}/01_Wagner-theater_Situation-plan-1000x625.jpg`,
      `${IMG}/02_Wagner-theater_Ground-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/03_Wagner-theater_-1-level-plan-1-200-1000x625.jpg`,
      `${IMG}/04_Wagner-theater_First-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/05_Wagner-theater_Second-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/06_Wagner-theater_Third-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/07_Wagner-theater_Attic-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/08_Wagner-theater_Section-A-A-1000x625.jpg`,
      `${IMG}/09_Wagner-theater_sections-BB-_-CC-1-200-1000x625.jpg`,
    ],
  },
  de: {
    metaTitle: 'Über das Projekt – Wagner-Theater Riga',
    metaDescription:
      'Sanierung des Wagner-Hauses in Riga: Vision GesamtkunstWerk 21, Kulturprogramm, Gebäudeerhalt und Architekturpläne.',
    heroEyebrow: 'Überblick',
    heroTitle: 'Über das Projekt',
    heroLead:
      'Das Haus ist als funktionsgetriebene Architektur konzipiert: Bühne und Zuschauerraum, Erschließung, Raum und Akustik bilden eine Einheit. Genau diese funktionale Logik wiederherzustellen steht im Mittelpunkt des Projekts — das Gebäude zurückzuführen auf seine Rolle als Ort für Aufführung und gemeinsames kulturelles Erlebnis.',
    heroImage: `${IMG}/5.png`,
    sections: {
      vizija: {
        title: 'Vision',
        paragraphs: [
          'Unser Ziel nach der Wiederherstellung des Wagner-Theaterhauses ist, es mit neuem, zeitgemäßem Inhalt zu füllen.',
          'Wagners Ziel war die gleichwertige Vereinigung aller Künste. Die strukturellen Voraussetzungen dafür erarbeitete er in seiner Rigaer Zeit; man kann annehmen, dass Riga der Ausgangspunkt für den umfassenden Ansatz war, der seinem Werk eigen ist.',
          'Unter der Flagge „GesamtkunstWerk 21“ wird das Gebäude vielfältigen Nutzungen und sehr unterschiedlichen Kombinationen dienen.',
          'Neben Theateraufführungen, Konzerten und dem Wagner-Museum wird das Haus zu „GesamtkunstWerk 21“ – einem Inkubator für im 21. Jahrhundert gemeinsam geschaffene Kunstwerke. Klassische Künstler werden mit kreativen Menschen aus vielen Bereichen in dieser „Fabrik“ (Werk) zusammenarbeiten, um völlig Neues zu schaffen. So – ganz im Geiste Wagners – entsteht jedes Jahr ein neues Gemeinschaftswerk.',
          'Es werden Meisterkurse in Musik und anderen Künsten angeboten. International anerkannte Meister werden Teilnehmer aus Europa und der ganzen Welt unterrichten. Die Teilnehmer können in einem Gebäude leben und arbeiten, das der von der deutschen Regierung unterstützten Villa Massimo in Mailand vergleichbar ist.',
          'Die Wiedergeburt des Rigas Deutschen Theaters wird zum Symbol europäischer Kultur- und Politikgeschichte werden, Menschen verbinden und versöhnen; sie wird als Leuchtfeuer in Nordosteuropa dienen.',
        ],
      },
      kulturas: {
        title: 'Kulturelle Veranstaltungen',
        intro:
          'Zu Wagners Zeit wurden im Theater vor allem drei Gattungen gespielt: Oper (einschließlich komischer Oper und Operette), Schauspiel und Ballett, dazu gelegentlich kleine Konzerte. Nach der Wiederherstellung des Wagnersaals wird das Haus ein vielfältiges Kulturprogramm aufnehmen können.',
        bullets: [
          'kleine Formen des Musiktheaters (z. B. Kurt Weill, Bertolt Brecht und ähnliche musikalische Theaterstücke, Musicals, experimentelle Musiktheaterformen, Operetten, frühe Oper aus Barock und Renaissance);',
          'theatralisierte Konzerte (in Rigas kleinen Konzertsälen fehlen heute Bühnenmöglichkeiten für szenische Umsetzung);',
          'kleine Formen des Sprechtheaters (vom Monolog bis zur Pantomime);',
          'Kammermusik-Konzerte, besonders Alte Musik, der der historische Saal besondere Atmosphäre verleiht;',
          'der Saal kann auch für Proben verschiedener Ensembles genutzt werden.',
        ],
        thumbs: [`${IMG}/6.png`, `${IMG}/5.png`, `${IMG}/4.png`],
      },
      ekas: {
        title: 'Gebäudesanierung',
        paragraphs: [
          'Das Projekt fußt auf vier Elementen: das sanierte Gebäude selbst, der barocke Konzertsaal und der festliche Saal des 19. Jahrhunderts, das Musikerlebnis sowie Museum oder Ausstellung. Erst das Ganze bildet ein markenstiftendes, starkes kulturelles Angebot. So kann das wiederhergestellte Wagner-Haus mit Museen und Konzertsälen in Lettland, den nordischen Ländern und Europa mithalten, das Angebot für Einwohner und Gäste bereichern und die Investition in die Sanierung rechtfertigen.',
          'Museum oder Ausstellung sind Medium, um die Bedeutung der gesamten Sanierung zu vermitteln. Sie verbinden das historische Gebäude, Wagners Person, das Musikleben Rigas und Barocheuropas mit einem kulturhistorisch interessierten Publikum. Sie bringen Quellen dieser Epoche – Objekte und/oder Dokumente aus lettischen Museen und Bibliotheken – in Umlauf, die bisher nicht oder nicht dauerhaft gezeigt wurden.',
        ],
      },
      avarijas: {
        title: 'Baulicher Zustand',
        paragraphs: [
          'Der technische Zustand des Gebäudes ist unbefriedigend: Setzungen der Fundamente haben Risse in den Wänden verursacht; Fundamentverstärkung, Instandsetzung der Deckenkonstruktionen, Erneuerung der technischen Anlagen, vollständige kosmetische Instandsetzung und Restaurierung historischer Elemente sind erforderlich.',
          'Die Wiederherstellung des Wagnersaals brächte wesentliche Vorteile: mehr Vielfalt und Zugänglichkeit im Kulturleben Lettlands, ein stärkeres Bild Rigas und Lettlands als ostmitteleuropäisches Kulturzentrum und die Verbindung zu Richard Wagner sowie Einnahmequellen, die langfristig die Investitionen refinanzieren und das Projekt tragen können.',
        ],
        benefitsTitle: 'Wichtigste Vorteile:',
        benefits: [
          'Wiederherstellung des einzigen akustisch geeigneten Kammermusiksaals in Riga;',
          'Erhalt und Modernisierung eines architektonisch bedeutenden Gebäudes und öffentliche Zugänglichkeit des Kulturdenkmals;',
          'die Möglichkeit, führenden lettischen Kultureinrichtungen – Kremerata Baltica, Staatsakademischem Chor „Latvija“ und Latvijas Koncerti – zu günstigen kommerziellen Bedingungen Räume zu geben;',
          'die Möglichkeit eines Richard-Wagner-Museums im Gebäude;',
          'die Möglichkeit der Zusammenarbeit mit europäischen Wagner-Gesellschaften.',
        ],
        photoInterior1: `${IMG}/MG_6842.jpg`,
        photoInterior2: `${IMG}/MG_6845.jpg`,
        photoInterior1Alt: 'Innenraum',
        photoInterior2Alt: 'Innenraum',
        photo1877: `${IMG}/1877_p73-f2761-2apr-650lieta-12lapa.jpg`,
        photoFacade: `${IMG}/VC481gnera4070.jpg`,
        photo1877Alt: 'Historische Ansicht — Rigas Stadttheater, 1877',
        photoFacadeAlt: 'Fassade in der Richard-Wagner-Straße',
      },
      plani: {
        title: 'Pläne und Schnitte',
        subtitle: 'Skizzen zum Umbau des Wagner-Hauses vom Büro Zaiga Gaile.',
        authors: 'Autoren: Architektin Zaiga Gaile, Architekt Philip Peeters',
        alts: [
          'Lageplan',
          'Erdgeschoss',
          'Ebene -1',
          'Erster Stock',
          'Zweiter Stock',
          'Dritter Stock',
          'Dachgeschoss',
          'Schnitt A–A',
          'Schnitte BB und CC',
        ],
      },
    },
    planFiles: [
      `${IMG}/01_Wagner-theater_Situation-plan-1000x625.jpg`,
      `${IMG}/02_Wagner-theater_Ground-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/03_Wagner-theater_-1-level-plan-1-200-1000x625.jpg`,
      `${IMG}/04_Wagner-theater_First-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/05_Wagner-theater_Second-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/06_Wagner-theater_Third-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/07_Wagner-theater_Attic-floor-plan-1-200-1000x625.jpg`,
      `${IMG}/08_Wagner-theater_Section-A-A-1000x625.jpg`,
      `${IMG}/09_Wagner-theater_sections-BB-_-CC-1-200-1000x625.jpg`,
    ],
  },
} as const;

export type ProjektsLang = keyof typeof projektsCopy;

export function getProjektsContent(lang: string) {
  const l = (lang === 'en' || lang === 'de' ? lang : 'lv') as ProjektsLang;
  return projektsCopy[l];
}
