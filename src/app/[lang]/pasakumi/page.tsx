import { Metadata } from 'next';
import { getProjects, getCategoryBySlug, getPageBySlug, getTranslatedField } from '@/lib/wp';
import ProjectsFilterGrid from '@/components/blocks/ProjectsFilterGrid';

export const metadata: Metadata = {
  title: 'Pasākumi - Vagneriga',
  description: 'Rīgas Vāgnera Nama pasākumi, koncerti un operas',
};

interface PasakumiPageProps {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{
    tema?: string;
    kartot?: string;
    page?: string;
  }>;
}

export default async function PasakumiPage({ params, searchParams }: PasakumiPageProps) {
  const { lang } = await params;
  const sParams = await searchParams;
  const currentTema = sParams.tema || 'visi';
  const currentKartot = sParams.kartot || 'jaunakais';
  const currentPage = parseInt(sParams.page || '1');

  // Fetch page data for potential custom content
  const page = await getPageBySlug('pasakumi');
  const acf = page?.acf || {};

  const pageData = {
    title: getTranslatedField(acf, 'title', lang, "Pasākumi"),
    subtitle: getTranslatedField(acf, 'subtitle', lang, "Rīgas Vāgnera Nams")
  };

  // Resolve initial category ID
  let categoryId: number | undefined = undefined;
  if (currentTema !== 'visi') {
    const cat = await getCategoryBySlug(currentTema, 'project_category');
    if (cat) {
      categoryId = cat.id;
    }
  }

  // Initial fetch for SSR
  const { projects, totalPages } = await getProjects({
    per_page: 9,
    page: currentPage,
    categories: categoryId,
    orderby: 'date',
    order: 'desc'
  });

  return (
    <main className="min-h-screen bg-white">
      <ProjectsFilterGrid 
        initialProjects={projects}
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
