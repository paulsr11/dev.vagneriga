import { Metadata } from 'next';
import { getPosts, getCategoryBySlug, getPageBySlug, getTranslatedField } from '@/lib/wp';
import NewsFilterGrid from '@/components/blocks/NewsFilterGrid';

export const metadata: Metadata = {
  title: 'Galerija - Vagneriga',
  description: 'Vāgnera Biedrības galerija un fotoarhīvs',
};

interface GalerijaPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{
    tema?: string;
    kartot?: string;
    page?: string;
  }>;
}

export default async function GalerijaPage({ params, searchParams }: GalerijaPageProps) {
  const { lang } = await params;
  const sParams = await searchParams;
  const currentTema = sParams.tema || 'visi';
  const currentKartot = sParams.kartot || 'jaunakais';
  const currentPage = parseInt(sParams.page || '1');

  // Fetch page data for potential custom content
  const page = await getPageBySlug('galerija');
  const acf = page?.acf || {};

  const pageData = {
    title: getTranslatedField(acf, 'title', lang, "Galerija"),
    subtitle: getTranslatedField(acf, 'subtitle', lang, "Vāgnera Biedrības")
  };

  // Resolve initial category ID
  let categoryId: number | undefined = undefined;
  if (currentTema !== 'visi') {
    const cat = await getCategoryBySlug(currentTema);
    if (cat) {
      categoryId = cat.id;
    }
  } else {
    // Force specific category for this page
    const parentCat = await getCategoryBySlug('galerija');
    if (parentCat) {
      categoryId = parentCat.id;
    }
  }

  // Initial fetch for SSR
  const { posts, totalPages } = await getPosts({
    per_page: 9,
    page: currentPage,
    categories: categoryId,
    orderby: 'date',
    order: 'desc'
  });

  return (
    <main className="min-h-screen bg-white">
      <NewsFilterGrid 
        initialPosts={posts}
        initialTotalPages={totalPages}
        initialTema={currentTema}
        initialKartot={currentKartot}
        title={pageData.title}
        subtitle={pageData.subtitle}
        lang={lang}
      />
    </main>
  );
}
