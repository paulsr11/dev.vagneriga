import { NextRequest, NextResponse } from 'next/server';
import { getProjects, getCategoryBySlug } from '@/lib/wp';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tema = searchParams.get('tema') || 'visi';
  const kartot = searchParams.get('kartot') || 'jaunakais';
  const page = parseInt(searchParams.get('page') || '1');

  const kartotOptions: Record<string, { orderby: string; order: 'asc' | 'desc' }> = {
    jaunakais: { orderby: 'date', order: 'desc' },
    vecakais: { orderby: 'date', order: 'asc' },
    alfabetiski: { orderby: 'title', order: 'asc' },
    popularakais: { orderby: 'date', order: 'desc' },
  };

  if (kartot === 'popularakais') {
    kartotOptions.popularakais = { orderby: 'date', order: 'desc' };
  }

  const activeSort = kartotOptions[kartot] || kartotOptions.jaunakais;

  try {
    let categoryId: number | undefined = undefined;
    if (tema !== 'visi') {
      const cat = await getCategoryBySlug(tema, 'project_category');
      if (cat) {
        categoryId = cat.id;
      }
    }

    const data = await getProjects({
      per_page: 9,
      page: page,
      categories: categoryId,
      orderby: activeSort.orderby,
      order: activeSort.order
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Project Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
