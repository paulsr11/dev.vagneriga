import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  lang?: string;
}

const labels: Record<string, { [key: string]: string }> = {
  lasit: { lv: 'Lasīt', en: 'Read', de: 'Lesen' },
  skatit_visas: { lv: 'Skatīt visas', en: 'View all', de: 'Alle ansehen' },
  jaunumi: { lv: 'Jaunumi', en: 'News', de: 'Neuigkeiten' },
};

export function NewsCard({ title, category, date, image, slug, lang = 'lv' }: NewsCardProps) {
  return (
    <Link href={`/${lang}/jaunumi/${slug}`} className="flex h-full flex-col overflow-hidden bg-white group"
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
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex justify-between font-semibold tracking-wider text-gray-500" style={{ fontSize: 'var(--ui-label)' }}>
          <span className="uppercase">{category}</span>
          <span>{date}</span>
        </div>
        <h3 className="mb-6 text-black tracking-tight group-hover:underline flex-1">
          {title}
        </h3>
        <div className="flex justify-end mt-auto">
          <span className="font-bold uppercase tracking-widest text-black group-hover:text-accent transition-colors" style={{ fontSize: 'var(--ui-label)' }}>
            {labels.lasit[lang]} <span className="ml-1">›</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function NewsSection({ posts, title, lang = 'lv' }: { posts: any[], title?: string, lang?: string }) {
  if (!posts || posts.length === 0) return null;

  const sectionTitle = title || labels.jaunumi[lang];

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
          const translatedCategory = categories[0]?.[`name_${lang}`] || categories[0]?.name || labels.jaunumi[lang];

          const date = new Date(post.date).toLocaleDateString(lang === 'lv' ? 'lv-LV' : lang === 'en' ? 'en-US' : 'de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });

          return (
            <NewsCard 
              key={post.id}
              slug={post.slug}
              title={translatedTitle}
              category={translatedCategory}
              date={date}
              image={featuredImage}
              lang={lang}
            />
          );
        })}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href={`/${lang}/jaunumi`}
          className="font-bold uppercase underline decoration-1 underline-offset-4 tracking-widest hover:text-accent transition-colors" 
          style={{ fontSize: 'var(--ui-nav)' }}
        >
          {labels.skatit_visas[lang]}
        </Link>
      </div>
    </section>
  );
}
