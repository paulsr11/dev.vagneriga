import { NextRequest, NextResponse } from 'next/server';
import { getPosts, getCategoryBySlug } from '@/lib/wp';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tema = searchParams.get('tema') || 'visi';
  const kartot = searchParams.get('kartot') || 'jaunakais';
  const page = parseInt(searchParams.get('page') || '1');

  const kartotOptions: Record<string, { orderby: string; order: 'asc' | 'desc' }> = {
    jaunakais: { orderby: 'date', order: 'desc' },
    vecakais: { orderby: 'date', order: 'asc' },
    alfabetiski: { orderby: 'title', order: 'asc' },
    popularakais: { orderby: 'date', order: 'desc' }, // Replaced comment_count with date as it was causing 400 errors
  };

  if (kartot === 'popularakais') {
    // Reverted to date as comment_count is not supported by the current WP setup
    kartotOptions.popularakais = { orderby: 'date', order: 'desc' };
  }

  const activeSort = kartotOptions[kartot] || kartotOptions.jaunakais;

  try {
    let categoryId: number | undefined = undefined;
    if (tema !== 'visi') {
      const cat = await getCategoryBySlug(tema);
      if (cat) {
        categoryId = cat.id;
      }
    } else {
      const parentCat = await getCategoryBySlug('jaunumi');
      if (parentCat) {
        categoryId = parentCat.id;
      }
    }

    const data = await getPosts({
      per_page: 9,
      page: page,
      categories: categoryId,
      orderby: activeSort.orderby,
      order: activeSort.order
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Post Fetch Error:', error);
    // Fallback to default fetch if specific sorting fails
    if (kartot === 'popularakais') {
      try {
        const data = await getPosts({
          per_page: 9,
          page: page,
          orderby: 'date',
          order: 'desc'
        });
        return NextResponse.json(data);
      } catch (innerError) {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
      }
    }
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
