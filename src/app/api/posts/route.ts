import { NextRequest, NextResponse } from 'next/server';
import { getPosts, getCategoryBySlug, GALLERY_CATEGORY_MAP, NEWS_CATEGORY_MAP } from '@/lib/wp';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tema = searchParams.get('tema') || 'visi';
  const kartot = searchParams.get('kartot') || 'jaunakais';
  const page = parseInt(searchParams.get('page') || '1');
  const lang = searchParams.get('lang') || 'lv';
  const type = searchParams.get('type') || 'jaunumi';

  const kartotOptions: Record<string, { orderby: string; order: 'asc' | 'desc' }> = {
    jaunakais: { orderby: 'date', order: 'desc' },
    vecakais: { orderby: 'date', order: 'asc' },
    alfabetiski: { orderby: 'title', order: 'asc' },
    popularakais: { orderby: 'date', order: 'desc' },
  };

  const activeSort = kartotOptions[kartot] || kartotOptions.jaunakais;

  try {
    let categoryId: number | undefined = undefined;
    if (tema !== 'visi') {
      const cat = await getCategoryBySlug(tema);
      if (cat) {
        categoryId = cat.id;
      }
    } else {
      const map = type === 'galerija' ? GALLERY_CATEGORY_MAP : NEWS_CATEGORY_MAP;
      const catConfig = map[lang] || map.lv;
      const parentCat = await getCategoryBySlug(catConfig.slug);
      if (parentCat) {
        categoryId = parentCat.id;
      } else {
        categoryId = catConfig.id;
      }
    }

    const data = await getPosts({
      per_page: 9,
      page: page,
      categories: categoryId,
      lang: lang,
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
      } catch {
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
      }
    }
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
