/** Static LV content aligned with https://vagneriga.lv/sponsori/ */

/** Large logos for “Galvenie atbalstītāji” two-column block (from vagneriga.lv). */
export const GALVENIE_LOGO_AA = '/images/sponsors/auswaertiges-amt-official.png';
export const GALVENIE_LOGO_EKII = '/images/sponsors/ekii.png';

export const GALVENIE_ATBALSTITAJI_PARAGRAPHS_LV = [
  'Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050, atjaunojot un restaurējot Rīgas Vāgnera namu” 5 000 000 eiro apmērā līdzfinansē Vācijas Ārlietu ministrija.',
  'Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050, atjaunojot un restaurējot Rīgas Vāgnera namu” 15 000 000 eiro apmērā finansē emisijas kvotu izsolīšanas instruments.',
  'Projekta īstenošanas rezultātā plānots sasniegt oglekļa dioksīda emisijas samazinājumu vismaz par 78 982,24 kgCO2 gadā, savukārt plānotais enerģijas patēriņš apkurei nepārsniegs 87,59 kWh/m2 gadā.',
];

const GALVENIE_ATBALSTITAJI_PARAGRAPHS_EN = [
  'The project “Greenhouse gas emission reduction at Riga Wagner House, 4 Riharda Vāgnera Street, Riga, LV-1050, by restoring and renovating Riga Wagner House” is co-financed by the German Federal Foreign Office with EUR 5,000,000.',
  'The project “Greenhouse gas emission reduction at Riga Wagner House, 4 Riharda Vāgnera Street, Riga, LV-1050, by restoring and renovating Riga Wagner House” is financed by the EU Emissions Trading System with EUR 15,000,000.',
  'Implementation of the project is expected to reduce CO₂ emissions by at least 78,982.24 kg CO₂ per year, while planned energy use for heating will not exceed 87.59 kWh/m² per year.',
];

const GALVENIE_ATBALSTITAJI_PARAGRAPHS_DE = [
  'Das Projekt „Reduzierung der Treibhausgasemissionen im Rigaer Wagner-Haus, Riharda Vāgnera iela 4, Riga, LV-1050, durch Sanierung und Restaurierung des Rigaer Wagner-Hauses“ wird vom Auswärtigen Amt mit 5.000.000 Euro kofinanziert.',
  'Das Projekt „Reduzierung der Treibhausgasemissionen im Rigaer Wagner-Haus, Riharda Vāgnera iela 4, Riga, LV-1050, durch Sanierung und Restaurierung des Rigaer Wagner-Hauses“ wird durch den EU-Emissionshandel mit 15.000.000 Euro finanziert.',
  'Durch die Projektumsetzung soll der CO₂-Ausstoß um mindestens 78.982,24 kg CO₂ pro Jahr gesenkt werden; der geplante Energieverbrauch für die Heizung soll 87,59 kWh/m² pro Jahr nicht überschreiten.',
];

export function galvenieAtbalstitajiParagraphs(lang: string): string[] {
  if (lang === 'en') return GALVENIE_ATBALSTITAJI_PARAGRAPHS_EN;
  if (lang === 'de') return GALVENIE_ATBALSTITAJI_PARAGRAPHS_DE;
  return GALVENIE_ATBALSTITAJI_PARAGRAPHS_LV;
}

export const RIHARDA_VAGNERA_BIEDRIBAS = [
  'Richard Wagner Association RWV Berlin-Brandenburg',
  'Richard Wagner Association Coburg',
  'Richard Wagner Association Frankfurt a.M.',
  'Richard Wagner Association Freiburg',
  'Richard Wagner Association Minden',
];

export const FONDI_UN_ORGANIZACIJAS = [
  'City Invest SIA',
  'Ellex Kļaviņš ZAB',
  'Grenardi SIA',
  'Investīciju risinājumi SIA',
  'Inženieru centrs Komforts SIA',
  'JCI Latvia Biedrība',
  'Nordic Partners AS',
  'Omnium Plus SIA',
  'Association of the Four Baltic Noble Corporations',
  'SKG Nordic SIA',
  'Sudraba Arhitektūra SIA',
  'SZK T SIA',
  'SZK un Partneri SIA',
  'Latvijas valsts meži',
  'Valsts kultūrkapitāla fonds',
  'Verttex SIA',
];

export const PRIVATPERSONAS = `
Āboliņš Gundars
Amoliņš Atis
Anča Santa
Ančs Māris
Antāns Andris
Avramenko Jeļena
Baklāne Anda
Bauze Vaiva
Bauer-Schultze Uta Rosa
Bayer Harriet Manuela (Dr.)
Belkius Alexandra & Pankrath Klaus-Rüdiger
Berger Andreas
Bjorks Igors
Bluķe Dace
Bossong Franz
Breže Andris
Broka Baiba
Cālītis Pauls Juris
Caune Anita
Caune Dainis
Čeže Mikus
Cine Radmila
Čivžele Jana
Daudziņa Zane
Daudziņš Vilis
Domburs Jānis
Draper Charles
Dripe Jānis
Dundurs Sigits
Fabian Sell (Dr.)
Firth Denys
France Richard
Gabrāne Rebeka
Gaile Barbara
Gaile Zaiga
Gailis Gatis
Gailis Māris
Gailis Mārtiņs
Gauert Jürgen
Geck Sabine
Ģelzis Kristaps
Giles Martin
Gorshkov Timofei
Grosa Silvija
Grundwald Peter
Hartmann Gabriele Gloria
Heinrihsons Ivars
Hermanis Alvis
Hunt Colin
Ihnow Barbara
Irbe Jānis
Jākobsons Jānis
Kalniņa Ilze
Kalniņš Māris
Kalniņš Silvija
Kaugure Laima
Kirke Frančeska
Kirta Nora
Kļaviņa Elita
Kļaviņš Filips Klāvs
Klotiņš Arnolds
Kocherscheid Karl
Kovisārs Indulis
Kovisārs Pēteris
Kusiņš Gunārs
Kühne Beatrice (Dr.)
Kupsch-Petzel Heidrun Roswith
Lāce Māra
Laiviņa Gundega
Lichtfeld Brigitte Clara Hedwig
Lielā Dace
Liepa Lauris
Lorence Renāte
Lorenzen-Schmidt Jutta Petra Hilde
Luhaera Ilze
Mattes Herta (Dr.)
Mähs Angelika
McDonald Ieva
Messer-Krol Ulrike
Miķelsons Kārlis
Mitrēvics Jānis
Mkrtchyan Ovik
Moeller J. Dr. u. Sigri
Mora Maira
Muižnieks Indriķis
Neiburga Andra
Orrell Margaret
Pabrika Diana
Pasternaka Kristine
Petraškēvičs Juris
Pikāns Andis
Pīlēna Ilze
Procevska Olga
Putāne Agita
Putāns Andris
Putnina Gaile Maija
Putniņš Didzis
Rāvis Guntis
Razuma Regīna
Riķe Inese
Riņķe Astrīda
Raddek-Zeretzke Eva
Romans Pauls
Roth Thomas
Rubene Vija
Rubenis Ojārs
Rudzāte Daiga
Siksne Baiba
Sīlis Andis
Sīlis Georgs
Schultze Wilfried Alfred Friedrich
Skelton Peter
Skopiņa Laine
Skujiņa Ligita
Slaņķis Māris
Smeltere Asnāte
Šmite Andra
Southern David
Spinga Marika
Šteimane Inga
Stradiņš Pēteris
Strode Aleksandra
Supe Ilze
Svece Artis
Tauriņa Agnese
Tomsone Lolita
Upatniece Ilze
Upatnieks Gunārs
Vaivode Gunda
Veisberga Ruta
Verhoustinska Henrieta
Vērpe Edgars
Vilks Andris
Viktorovs Rauls
Viktorova Marika
Von Heydebreck H.-G. (Dr.) und M.
Walter Ita Marianne
Woodhead David
Zālīte Margita Margo
Zandersone Iluta
Zariņa Guna
Zariņš Kristaps
Zariņš Reinis
Zemzare Ingrīda
Znotiņš Kaspars
Zuzāns Jānis
Zvirgzdiņš Vitālijs
`
  .trim()
  .split('\n')
  .map((s) => s.trim())
  .filter(Boolean);
