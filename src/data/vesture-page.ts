/**
 * Static “Vēsture” copy aligned with https://vagneriga.lv/vagnera-teatris/ (LV source of truth).
 */

type Lang = 'lv' | 'en' | 'de';

export type VestureContent = {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroImage: string;
  sections: { title: string; paragraphs: string[] }[];
};

const HABERLAND_IMG =
  'https://vagneriga.lv/wp-content/uploads/2020/01/KRISTOF-HABERLAND.png';

const byLang: Record<Lang, VestureContent> = {
  lv: {
    metaTitle: 'Vēsture | Vagneriga',
    metaDescription:
      'Rīgas Pilsētas teātra un Vāgnera nama vēsture; par arhitektu Kristofu Haberlandu.',
    heroEyebrow: 'Rīgas Pilsētas teātris',
    heroTitle: 'Vēsture',
    heroLead:
      'Rīgas Pilsētas teātris tika atklāts 1782. gada 15. septembrī. Barona fon Fītinghofa uzdevumā arhitekts Kristofs Hāberlands izstrādāja projektu pirmajai kapitālajai teātra ēkai Rīgā. Šis klasicisma stila nams tika celts starp toreizējo pilsētas mūri (vēlāk – Wallstraße jeb Vaļņu iela) un tagadējo Riharda Vāgnera ielu pie paša nocietinājumu vaļņa. Jau esoša noliktava tika pārbūvēta par teātra zāli, bet jaunuzceltajā piebūvē izvietoja ieeju un saviesīgās telpas. Cauri trim gadsimtiem šī ēka ir piedzīvojusi daudzus nozīmīgus teātra un mūzikas dzīves notikumus Rīgā.',
    heroImage: HABERLAND_IMG,
    sections: [
      {
        title: 'Teātra zāle un kultūras dzīve',
        paragraphs: [
          'Koncertzālei bija trīs līmeņi, ieskaitot balkonu un galeriju. Nav saglabājusies precīzas informācijas par vietu skaitu teātra zālē. Tomēr dažādos avotos var atrast, ka zālē bijušas 500 – 600 skatītāju vietas. Rihards Vāgners, kas bija diriģents Rīgā no 1837. līdz 1839.gadam. Viņš slavēja zālē pakāpeniski pieaugošo sēdekļu izvietojumu, padziļināto orķestra telpu un pustumsu zālē. Šos arhitektūras principus viņš ieviesa slavenā Baireitas festivāla teātra būvniecībā. Tādējādi Vāgnera teātrim Rīgā ir bijusi būtiska ietekme uz visām mūsdienu teātra ēkām 19. un 20. gadsimtā.',
          'Gandrīz gadsimtu šis teātris, kurā darbojās drāmas, operas un baleta trupas, bija Rīgas kultūras dzīves centrs. Pirmajā — 1782./83. gada sezonā teātrim bija 120 abonementu. Tā bija izmeklēta publika, jo kalpotājiem un citiem prastiem ļaudīm ieeja teātrī bija noliegta. Jau pirmajos pastāvēšanas gadu desmitos tas repertuāra ziņā gāja kopsolī ar labākajiem Eiropas, sevišķi Vācijas teātriem, neskaitāmi Eiropas virtuozi tajā snieguši koncertus. Īsts opermākslas uzplaukums Rīgā sākās pēc teātra remonta 19. gs. 30. gadu otrajā pusē, kad 1837. – 1839. par diriģentu darbojās gados jaunais Rihards Vāgners.',
          'Teātra izrādes ēkā tika pārtrauktas 1863. gadā — līdz ar tagadējā Nacionālās operas nama uzcelšanu. Bijusī teātra zāle tika vairākkārt pārbūvēta un aizbūvēta un šobrīd nav saglabājusies. Daudz vēlāk, 1988. gadā ēkas augšējo stāvu, kur līdz Otrajam pasaules karam bija mitinājusies Rīgas vācu saviesīgā biedrība “Musse”, restaurēja un balles zāli piemēroja kamermūzikas koncertiem.',
          'Vāgnera zāle (Wagnersaal) – ar šādu nosaukumu šis Rīgas vēsturiskais nams bija pazīstams laikposmā no 1988. līdz 2007. gadam, kad tā augšējā stāvā darbojās koncertzāle. Tomēr ēkas tehniskā stāvokļa pasliktināšanās lika 2007. gadā koncertus pārtraukt.',
        ],
      },
      {
        title: 'Rīgas Riharda Vāgnera biedrība',
        paragraphs: [
          'Rīgas Riharda Vāgnera biedrības mērķis ir atjaunot šo Eiropas kultūras vēstures izcelsmes vietu.',
        ],
      },
      {
        title: 'Par mājas arhitektu — Kristofu Haberlandu',
        paragraphs: [
          'Kristofs Haberlands piedzima Rīgā, 1750. gada 1.janvārī. Abi viņa vecāki cēlušies no Saksijas. Jau agrā bērnībā Kristofs sāka mācīties no sava tēva mūrnieka amatu. Vēlāk viņš devās uz Vāciju un studēja Berlīnē un Drēzdenē. 1777. gadā Haberlands atgriezās Rīgā, nokārtoja amatnieku meistarības eksāmenu un tika uzņemts mūrnieku ģildē. 1778.gadā viņš kļuva par Rīgas galvenā arhitekta, J.P.Leihtes palīgu. Kad Leihts nomira 1789. gadā Haberlands tika iecelts kā viņa pēctecis. Viņš bija Rīgas galvenais arhitekts līdz 1797. gadam.',
          'Haberlands bija pirmais, kurš mēģināja Viduslaiku Rīgas tēlu transformēt atbilstoši Apgaismības idejām. Viņa daudzu inovatīvo ideju piemērošana un svaigais skats uz arhitektūru padarīja Haberlandu par vienu no klasicisma arhitektūras pionieriem Rīgā. Viņš ir projektējis apmēram 20 dzīvojamās mājas Rīgā, kā arī dažas baznīcas un muižas ēkas Rīgā un Igaunijā. Viena no tām baznīcām, Katlakalna luterāņu baznīca, kas atrodas netālu no Rīgas, tiek uzskatīta par viņa labāko darbu un tika būvēta kā romiešu panteons miniatūrā.',
          'Kristofs Haberlands nomira 1803. gada 7.martā, Rīgā. Viņš tika apbedīts Rīgas Lielajos kapos.',
        ],
      },
    ],
  },
  en: {
    metaTitle: 'History | Vagneriga',
    metaDescription:
      'History of the Riga City Theatre and Wagner House; architect Christoph Haberland.',
    heroEyebrow: 'Riga City Theatre',
    heroTitle: 'History',
    heroLead:
      'The Riga City Theatre opened on 15 September 1782. Commissioned by Baron von Vietinghoff, architect Christoph Haberland designed the first purpose-built theatre building in Riga. This neoclassical house stood between the former city wall (later Wallstraße / Vaļņu iela) and today’s Richard Wagner Street, right by the rampart. An existing warehouse was converted into the auditorium, while a new wing housed the entrance and social rooms. Across three centuries, the building has witnessed decisive moments in Riga’s theatre and musical life.',
    heroImage: HABERLAND_IMG,
    sections: [
      {
        title: 'The auditorium and cultural life',
        paragraphs: [
          'The concert hall had three levels, including a balcony and gallery. Exact seating capacity is not preserved, but sources suggest roughly 500–600 seats. Richard Wagner, who conducted in Riga from 1837 to 1839, praised the rising rake of the seating, the deep orchestra pit and the semi-dark auditorium—principles he later applied at the Bayreuth Festival Theatre. In this sense, the Riga theatre influenced theatre architecture in the 19th and 20th centuries.',
          'For almost a century the theatre—hosting drama, opera and ballet companies—was a centre of Riga’s cultural life. In its first 1782/83 season it had 120 subscribers: an exclusive audience, as servants and other “common” visitors were not admitted. From its earliest decades its repertoire kept pace with leading European, especially German, theatres, and countless European virtuosi performed there. A true flowering of opera in Riga began after renovations in the mid-1830s, when the young Richard Wagner served as conductor from 1837 to 1839.',
          'Performances in the building ended in 1863 with the opening of the present National Opera house. The old auditorium was rebuilt and built over several times and has not survived. Much later, in 1988, the upper floor—where the German society “Musse” had met before World War II—was restored and the ballroom adapted for chamber concerts.',
          'From 1988 to 2007 the historic house was known as the “Wagnersaal”, with a concert hall on the upper floor. Concerts had to stop in 2007 as the technical condition of the building deteriorated.',
        ],
      },
      {
        title: 'Richard Wagner Society of Riga',
        paragraphs: [
          'The society’s aim is to restore this place of origin in European cultural history.',
        ],
      },
      {
        title: 'The house architect — Christoph Haberland',
        paragraphs: [
          'Christoph Haberland was born in Riga on 1 January 1750. His parents came from Saxony. In childhood he learned his father’s masonry trade, then studied in Berlin and Dresden. In 1777 he returned to Riga, passed the master crafts examination and joined the masons’ guild. In 1778 he became assistant to the chief architect J. P. Leicht; when Leicht died in 1789, Haberland succeeded him and served as chief architect of Riga until 1797.',
          'He was among the first to reshape medieval Riga in line with Enlightenment ideas. His innovative projects and fresh approach made him a pioneer of neoclassicism in Riga. He designed some twenty town houses in Riga as well as churches and manor buildings in Riga and Estonia; the Lutheran church at Katlakalna, near Riga, is often considered his masterpiece, conceived like a Roman pantheon in miniature.',
          'Christoph Haberland died in Riga on 7 March 1803 and was buried in the Great Cemetery of Riga.',
        ],
      },
    ],
  },
  de: {
    metaTitle: 'Geschichte | Vagneriga',
    metaDescription:
      'Geschichte des Rigischen Stadttheaters und Wagner-Hauses; Architekt Christoph Haberland.',
    heroEyebrow: 'Rigaer Stadttheater',
    heroTitle: 'Geschichte',
    heroLead:
      'Das Rigische Stadttheater wurde am 15. September 1782 eröffnet. Im Auftrag von Baron von Vietinghoff entwarf der Architekt Christoph Haberland den ersten eigenständigen Theaterbau Rigas. Das klassizistische Haus stand zwischen der ehemaligen Stadtmauer (später Wallstraße / Vaļņu iela) und der heutigen Richard-Wagner-Straße direkt am Wall. Aus einer bestehenden Speicherhalle entstand der Zuschauerraum; im Neubau wurden Eingang und Gesellschaftsräume untergebracht. Über drei Jahrhunderte hinweg prägte das Haus bedeutende Momente des Theater- und Musiklebens in Riga.',
    heroImage: HABERLAND_IMG,
    sections: [
      {
        title: 'Zuschauerraum und Kulturleben',
        paragraphs: [
          'Der Konzertsaal hatte drei Ebenen inklusive Balkon und Galerie. Die genaue Sitzplatzanzahl ist nicht überliefert; Quellen sprechen von etwa 500–600 Plätzen. Richard Wagner, der von 1837 bis 1839 in Riga dirigierte, lobte die ansteigende Bestuhlung, das tiefe Orchestergraben und das halbdunkle Parkett—Prinzipien, die er später beim Bayreuther Festspielhaus umsetzte. Damit übte das Rigische Wagner-Theater spürbaren Einfluss auf Theaterarchitektur des 19. und 20. Jahrhunderts aus.',
          'Fast ein Jahrhundert lang war das Haus mit Drama-, Opern- und Ballettensembles ein Zentrum des Rigischen Kulturlebens. In der ersten Spielzeit 1782/83 hatte das Theater 120 Abonnenten; der Zugang war einer gehobenen Öffentlichkeit vorbehalten. Schon früh hielt das Repertoire Schritt mit führenden europäischen, besonders deutschen Theatern, und zahlreiche Virtuosen gastierten hier. Ein echter Aufschwung der Oper begann nach Umbauten Mitte der 1830er Jahre, als der junge Richard Wagner von 1837 bis 1839 als Dirigent wirkte.',
          'Die Aufführungen im Haus endeten 1863 mit der Eröffnung des heutigen Nationaloperenhauses. Der alte Zuschauerraum wurde mehrfach umgebaut und überbaut und ist nicht erhalten. 1988 wurde das obere Stockwerk—wo vor dem Zweiten Weltkrieg die deutsche Gesellschaft „Musse“ tagte—restauriert und der Ballsaal für Kammermusikkonzerte eingerichtet.',
          'Von 1988 bis 2007 war das historische Haus als „Wagnersaal“ bekannt, mit Konzertsaal im Obergeschoss. 2007 mussten die Konzerte wegen des schlechter werdenden technischen Zustands enden.',
        ],
      },
      {
        title: 'Richard-Wagner-Gesellschaft Riga',
        paragraphs: [
          'Ziel der Gesellschaft ist es, diesen Ursprungsort der europäischen Kulturgeschichte wiederherzustellen.',
        ],
      },
      {
        title: 'Der Hausarchitekt — Christoph Haberland',
        paragraphs: [
          'Christoph Haberland wurde am 1. Januar 1750 in Riga geboren; seine Eltern stammten aus Sachsen. Früh lernte er das Maurerhandwerk des Vaters, später studierte er in Berlin und Dresden. 1777 kehrte er nach Riga zurück, bestand die Meisterprüfung und wurde in die Maurerzunft aufgenommen. 1778 wurde er Assistent des Stadtbaumeisters J. P. Leicht; nach dessen Tod 1789 folgte er ihm nach und war bis 1797 Rigas Stadtbaumeister.',
          'Er gehörte zu den ersten, die das mittelalterliche Riga im Sinne der Aufklärung neu dachten. Seine innovativen Entwürfe machten ihn zu einem Pionier des Klassizismus in Riga. Er plante rund zwanzig Wohnhäuser in Riga sowie Kirchen und Herrenhäuser in Riga und Estland; die evangelisch-lutherische Kirche in Katlakalna bei Riga gilt oft als sein Hauptwerk, angelegt wie ein römisches Pantheon im Kleinformat.',
          'Christoph Haberland starb am 7. März 1803 in Riga und wurde auf dem Großen Friedhof beigesetzt.',
        ],
      },
    ],
  },
};

export function getVestureContent(lang: string): VestureContent {
  if (lang === 'en' || lang === 'de') return byLang[lang];
  return byLang.lv;
}
