import Image from 'next/image';
import Link from 'next/link';

interface ConcertCardProps {
  title: string;
  category: string;
  date: string;
  time: string;
  image: string;
  slug: string;
  lang?: string;
}

const labels: Record<string, { [key: string]: string }> = {
  biletes: { lv: 'Biļetes', en: 'Tickets', de: 'Tickets' },
  skatit_visas: { lv: 'Skatīt visas', en: 'View all', de: 'Alle ansehen' },
  koncerti: { lv: 'Koncerti', en: 'Concerts', de: 'Konzerte' },
};

export function ConcertCard({ title, category, date, time, image, slug, lang = 'lv' }: ConcertCardProps) {
  return (
    <Link href={`/${lang}/pasakumi/${slug}`} className="flex h-full flex-col overflow-hidden bg-white group"
      style={{ 
        borderRadius: 'var(--card-radius-sm)', 
        boxShadow: 'var(--card-shadow)' 
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 pb-0">
        <div className="mb-2 flex justify-between font-semibold tracking-wider text-gray-500" style={{ fontSize: 'var(--ui-label)' }}>
          <span>{category}</span>
          <span>{date}</span>
        </div>
        <div className="mb-4 text-right font-semibold tracking-wider text-gray-500" style={{ fontSize: 'var(--ui-label)' }}>
          {time}
        </div>
        <h3 className="mb-8 text-black tracking-tight group-hover:underline">
          {title}
        </h3>
      </div>
      <div 
        className="w-full mt-auto flex items-center justify-center bg-[#af9f66] font-bold tracking-[0.1em] text-black transition-all group-hover:bg-black group-hover:text-white uppercase"
        style={{ height: 'var(--btn-height)', fontSize: 'var(--ui-label)' }}
      >
        {labels.biletes[lang]}
      </div>
    </Link>
  );
}

export default function ConcertsSection({ posts, title, lang = 'lv' }: { posts: any[], title?: string, lang?: string }) {
  if (!posts || posts.length === 0) return null;

  const sectionTitle = title || labels.koncerti[lang];

  return (
    <section 
      className="vag-container"
      style={{ paddingBlock: 'var(--section-padding)' }}
    >
      <div className="mb-12 flex items-center gap-6">
        <div className="h-px flex-1 bg-gray-200"></div>
        <h2 className="text-black uppercase tracking-widest">{sectionTitle}</h2>
        <div className="h-px flex-1 bg-gray-200"></div>
      </div>
      
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => {
          const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://dev.vagneriga.lv/wp-content/uploads/2025/09/20210830_VacijasVestnieciba_VagneraZale_039-650x433-1.jpg";
          const categories = post._embedded?.['wp:term']?.[0] || [];
          
          const translatedTitle = post[`title_${lang}`] || post.title.rendered;
          const translatedCategory = categories[0]?.[`name_${lang}`] || categories[0]?.name || labels.koncerti[lang];

          const dateObj = new Date(post.date);
          const date = dateObj.toLocaleDateString(lang === 'lv' ? 'lv-LV' : lang === 'en' ? 'en-US' : 'de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
          const time = dateObj.toLocaleTimeString(lang === 'lv' ? 'lv-LV' : lang === 'en' ? 'en-US' : 'de-DE', {
            hour: '2-digit',
            minute: '2-digit'
          });

          return (
            <ConcertCard 
              key={post.id}
              slug={post.slug}
              title={translatedTitle}
              category={translatedCategory}
              date={date}
              time={time}
              image={featuredImage}
              lang={lang}
            />
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href={`/${lang}/pasakumi`}
          className="font-bold uppercase underline decoration-1 underline-offset-4 tracking-widest hover:text-accent transition-colors" 
          style={{ fontSize: 'var(--ui-nav)' }}
        >
          {labels.skatit_visas[lang]}
        </Link>
      </div>
    </section>
  );
}
