import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/wp';
import NewsSection from '@/components/blocks/NewsSection';
import EventsList from '@/components/blocks/EventsList';
import WpContent from '@/components/WpContent';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post?.seo) return { title: 'Jaunumi | Vagneriga' };

  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: { canonical: post.seo.canonical },
    openGraph: {
      title: post.seo.og_title || post.seo.title,
      description: post.og_description || post.seo.description,
      images: post.seo.og_image ? [post.seo.og_image] : [],
    },
  };
}

export default async function Page({ params }: PostPageProps) {
  const { slug } = await params;
  
  const [post, { posts: latestPosts }] = await Promise.all([
    getPostBySlug(slug),
    getPosts({ per_page: 3 })
  ]);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const date = new Date(post.date).toLocaleDateString('lv-LV', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="min-h-screen bg-white">
      {/* 1. Featured Image at the very top (Container Width) */}
      {featuredImage && (
        <div className="vag-container pt-12">
          <div 
            className="relative mb-12 aspect-[21/9] w-full overflow-hidden"
            style={{ borderRadius: 'var(--card-radius)' }}
          >
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* 2. Header Area: Date + Title */}
      <header className="vag-container text-center">
        <div className="mb-4 flex justify-center gap-4 text-[12px] font-bold uppercase tracking-widest text-gray-400">
          {categories.map((cat: any) => (
            <span key={cat.id}>{cat.name}</span>
          ))}
          {categories.length > 0 && <span>/</span>}
          <span>{date}</span>
        </div>
        
        <h1 className="mb-16 max-w-4xl mx-auto leading-[1.1]">
          {post.title.rendered}
        </h1>
      </header>

      {/* 3. Main Content Area */}
      <div className="vag-container pb-20">
        <div className="mx-auto max-w-[800px]">
          <WpContent html={post.content.rendered} />
        </div>
      </div>

      {/* 4. Bottom Sections (Headings matched to reference) */}
      <div className="border-t border-gray-100 mt-20">
        <NewsSection posts={latestPosts} title="JAUNUMI" />
        <EventsList title="TUVĀKIE PASĀKUMI" />
      </div>
    </article>
  );
}
