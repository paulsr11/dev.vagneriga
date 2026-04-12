import { Metadata } from 'next';
import { getPageBySlug, getTranslatedField } from '@/lib/wp';
import WpContent from '@/components/WpContent';
import { notFound } from 'next/navigation';

interface CookiePolicyPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: CookiePolicyPageProps): Promise<Metadata> {
  const { lang } = await params;
  const page = await getPageBySlug('sikdatnes');
  
  const title = lang === 'lv' ? 'Sīkdatņu politika' : lang === 'en' ? 'Cookie Policy' : 'Cookie-Richtlinie';

  if (!page) return { title: `${title} | Vagneriga` };

  return {
    title: `${getTranslatedField(page.acf ?? null, 'title', lang, title)} | Vagneriga`,
    description: page.seo?.description || "",
  };
}

export default async function CookiePolicyPage({ params }: CookiePolicyPageProps) {
  const { lang } = await params;
  const page = await getPageBySlug('sikdatnes');

  const defaultTitles: Record<string, string> = {
    lv: 'Sīkdatņu politika',
    en: 'Cookie Policy',
    de: 'Cookie-Richtlinie'
  };

  const title = page ? getTranslatedField(page.acf ?? null, 'title', lang, defaultTitles[lang]) : defaultTitles[lang];
  
  // Fallback content if WordPress page doesn't exist yet
  const fallbackContent: Record<string, string> = {
    lv: `
      <p>Šī sīkdatņu politika izskaidro, kā Rīgas Vāgnera nams izmanto sīkdatnes un līdzīgas tehnoloģijas, lai atpazītu jūs, kad apmeklējat mūsu vietni.</p>
      <h3>Kas ir sīkdatnes?</h3>
      <p>Sīkdatnes ir mazi datu faili, kas tiek saglabāti jūsu datorā vai mobilajā ierīcē, kad apmeklējat vietni. Sīkdatnes plaši izmanto vietņu īpašnieki, lai nodrošinātu vietņu darbību vai uzlabotu to efektivitāti, kā arī sniegtu atskaites informāciju.</p>
      <h3>Kāpēc mēs izmantojam sīkdatnes?</h3>
      <p>Mēs izmantojam pirmās puses un trešo pušu sīkdatnes vairāku iemeslu dēļ:</p>
      <ul>
        <li><strong>Nepieciešamās sīkdatnes:</strong> Šīs sīkdatnes ir stingri nepieciešamas, lai sniegtu jums pakalpojumus, kas pieejami mūsu vietnē.</li>
        <li><strong>Analītiskās sīkdatnes:</strong> Šīs sīkdatnes vāc informāciju, kas tiek izmantota apkopotā veidā, lai palīdzētu mums saprast, kā tiek izmantota mūsu vietne.</li>
      </ul>
      <h3>Kā es varu kontrolēt sīkdatnes?</h3>
      <p>Jums ir tiesības izlemt, vai pieņemt vai noraidīt sīkdatnes. Jūs varat iestatīt savas preferences mūsu sīkdatņu piekrišanas rīkā.</p>
    `,
    en: `
      <p>This Cookie Policy explains how Riga Vagner House uses cookies and similar technologies to recognize you when you visit our website.</p>
      <h3>What are cookies?</h3>
      <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
      <h3>Why do we use cookies?</h3>
      <p>We use first-party and third-party cookies for several reasons:</p>
      <ul>
        <li><strong>Essential cookies:</strong> These cookies are strictly necessary to provide you with services available through our website.</li>
        <li><strong>Analytics cookies:</strong> These cookies collect information that is used in aggregate form to help us understand how our website is being used.</li>
      </ul>
      <h3>How can I control cookies?</h3>
      <p>You have the right to decide whether to accept or reject cookies. You can set your preferences in our cookie consent tool.</p>
    `,
    de: `
      <p>Diese Cookie-Richtlinie erklärt, wie das Rigaer Wagner-Haus Cookies und ähnliche Technologien verwendet, um Sie beim Besuch unserer Website zu erkennen.</p>
      <h3>Was sind Cookies?</h3>
      <p>Cookies sind kleine Datendateien, die auf Ihrem Computer oder Mobilgerät gespeichert werden, wenn Sie eine Website besuchen. Cookies werden von Website-Betreibern häufig verwendet, um ihre Websites funktionsfähig zu machen oder effizienter zu gestalten sowie um Berichtsinformationen zu liefern.</p>
      <h3>Warum verwenden wir Cookies?</h3>
      <p>Wir verwenden First-Party- und Third-Party-Cookies aus mehreren Gründen:</p>
      <ul>
        <li><strong>Essenzielle Cookies:</strong> Diese Cookies sind unbedingt erforderlich, um Ihnen die über unsere Website verfügbaren Dienste bereitzustellen.</li>
        <li><strong>Analyse-Cookies:</strong> Diese Cookies sammeln Informationen, die in zusammengefasster Form verwendet werden, um uns zu helfen, die Nutzung unserer Website zu verstehen.</li>
      </ul>
      <h3>Wie kann ich Cookies kontrollieren?</h3>
      <p>Sie haben das Recht zu entscheiden, ob Sie Cookies akzeptieren oder ablehnen. Sie können Ihre Einstellungen in unserem Cookie-Zustimmungstool festlegen.</p>
    `
  };

  const content = page ? (getTranslatedField(page.acf ?? null, 'content', lang, page.content?.rendered) || fallbackContent[lang]) : fallbackContent[lang];

  return (
    <article className="min-h-screen bg-white py-20">
      <div className="vag-container">
        <div className="mx-auto max-w-[800px]">
          <h1 className="mb-12 text-center">{title}</h1>
          <WpContent html={content} />
        </div>
      </div>
    </article>
  );
}
