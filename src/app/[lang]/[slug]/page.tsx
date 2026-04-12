import { Metadata } from 'next';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/wp';
import NewsSection from '@/components/blocks/NewsSection';
import EventsList from '@/components/blocks/EventsList';
import WpContent from '@/components/WpContent';
import * as cheerio from 'cheerio';

interface PostPageProps {
  params: Promise<{ slug: string; lang: string }>;
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) return { title: 'Jaunumi | Vagneriga' };

  let title = (post.seo?.title || post.title?.rendered) ?? '';
  const description = post.seo?.description || "";

  if (lang !== 'lv' && post.acf) {
    const transTitle = post.acf[`title_${lang}`];
    if (typeof transTitle === 'string') title = transTitle;
  }

  return {
    title: `${title} | Vagneriga`,
    description: description,
    alternates: { canonical: post.seo?.canonical || "" },
    openGraph: {
      title: post.seo?.og_title || title,
      description: post.seo?.og_description || description,
      images: post.seo?.og_image ? [post.seo.og_image] : [],
    },
  };
}

export default async function Page({ params }: PostPageProps) {
  const { slug, lang } = await params;
  
  const [post, { posts: latestPosts }] = await Promise.all([
    getPostBySlug(slug),
    getPosts({ per_page: 3 })
  ]);

  if (!post) {
    notFound();
  }

  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0] as { source_url?: string } | undefined;
  const featuredImage = featuredMedia?.source_url;
  const categories = (post._embedded?.['wp:term']?.[0] || []) as Record<string, unknown>[];

  // Helper to check if an image is "wide" (wider than 16:9)
  const isWideImage = ($el: cheerio.Cheerio<any>, _$: cheerio.CheerioAPI) => {
    let width = 0;
    let height = 0;

    const $img = $el.is('img') ? $el : $el.find('img').first();
    const $link = $el.is('a') ? $el : $el.closest('a');

    const dataSize = $link.attr('data-size');
    if (dataSize && dataSize.includes('x')) {
      const [w, h] = dataSize.split('x').map(Number);
      width = w; height = h;
    }

    if (!width) width = Number($img.attr('width'));
    if (!height) height = Number($img.attr('height'));

    const src = $img.attr('src') || "";
    const match = src.match(/-(\d+)x(\d+)/);
    if (!width && match) {
      width = Number(match[1]);
      height = Number(match[2]);
    }

    if (width && height) {
      return (width / height) > 1.75;
    }
    
    if (!width && src.toLowerCase().endsWith('.png')) {
      return true; 
    }
    
    return false;
  };

  const processHtml = (html: string, options: { isLv: boolean }) => {
    const $ = cheerio.load(html);
    
    $(
      '.post-thumb, .post-header, .post-top-details, .post-meta, .post-comments, ' +
      '.gallery-like, .post-title, .post-bottom-details, .post-nav, #respond'
    ).remove();

    const $contentContainer = $('.post-content').length > 0 ? $('.post-content').first() : $('body');

    // Basic cleaning for both versions
    $contentContainer.find('a').each((i, el) => {
      const $link = $(el);
      const $imgs = $link.find('img');
      if ($imgs.length > 0) $link.empty().append($imgs);
    });

    $contentContainer.find('.element, .element-inner, .flip-wrap, .flip-img-wrap, .thumb-wrap, .portfolio-all-wrap, .oshine-gallery-module, .portfolio-container').each((i, el) => {
      const $el = $(el);
      const $candidates = $el.find('img, a').filter((i, child) => {
        const $child = $(child);
        return $child.is('img') || ($child.is('a') && $child.find('img').length > 0);
      });
      const $topLevelContents = $candidates.filter((i, candidate) => {
        const $candidate = $(candidate);
        return $candidate.parentsUntil($el).filter((i, parent) => $candidates.index(parent) !== -1).length === 0;
      });
      if ($topLevelContents.length > 0) $el.replaceWith($topLevelContents);
    });

    $contentContainer.find('p').each((i, el) => {
      const $el = $(el);
      const hasImages = $el.find('img').length > 0;
      const hasSignificantText = $el.text().replace(/\s|&nbsp;/g, '').length > 0;
      if (hasImages && !hasSignificantText) $el.replaceWith($el.find('a, img'));
    });

    // Gallery grouping only for LV (which has the images)
    if (options.isLv) {
      let currentGroup: cheerio.Cheerio<any>[] = [];
      const $children = $contentContainer.contents();
      $children.each((i, el) => {
        const $el = $(el);
        const isImage = $el.is('img') || ($el.is('a') && $el.find('img').length > 0);
        const isWhitespace = el.type === 'text' && $el.text().trim() === "";
        const isBr = $el.is('br');
        const isGroupableImage = isImage && !isWideImage($el, $);
        
        if (isGroupableImage) {
          currentGroup.push($el);
        } else if (isWhitespace || isBr) {
          // keep grouping
        } else {
          if (currentGroup.length > 1) {
            const $wrapper = $('<div class="dynamic-gallery-grid"></div>');
            currentGroup[0].before($wrapper);
            currentGroup.forEach($item => $wrapper.append($item));
          }
          currentGroup = [];
        }
      });
      if (currentGroup.length > 1) {
        const $wrapper = $('<div class="dynamic-gallery-grid"></div>');
        currentGroup[0].before($wrapper);
        currentGroup.forEach($item => $wrapper.append($item));
      }
    }

    // Final global cleanup
    $contentContainer.find('*').each((i, el) => {
      const className = $(el).attr('class');
      if (className) $(el).attr('class', className.replace(/\bclearfix\b/g, '').trim());
      if ($(el).attr('class') === '') $(el).removeAttr('class');
    });
    $contentContainer.find('p').each((i, el) => {
      if (!$(el).html()?.trim() || $(el).html() === '&nbsp;') $(el).remove();
    });
    $contentContainer.contents().each((i, el) => {
      if (el.type === 'text') {
        const text = $(el).text();
        if (text.includes('clearfix')) $(el).replaceWith(text.replace(/clearfix[^\s>]*>?/g, ''));
      }
    });

    return { $, $contentContainer };
  };

  // 1. Process LV content ALWAYS to extract media
  const { $: $lv, $contentContainer: $lvParsed } = processHtml(post.content?.rendered ?? '', { isLv: true });
  const oldDate = $lv('.post-meta').not('.post-comments').first().text().trim();

  // Extract media from cleaned LV version (avoiding nested duplicates)
  const lvMedia: string[] = [];
  const $lvMediaCandidates = $lvParsed.find('img, iframe, .dynamic-gallery-grid');
  
  $lvMediaCandidates.each((i, el) => {
    const $el = $lv(el);
    // Skip images that are already inside a gallery grid
    if ($el.is('img') && $el.closest('.dynamic-gallery-grid').length > 0) {
      return;
    }
    // Outer HTML of the element
    lvMedia.push($lv('<div>').append($el.clone()).html() || "");
  });
  const lvMediaHtml = lvMedia.join('\n');

  let displayTitle = post.title?.rendered ?? '';
  let finalHtml = "";

  if (lang !== 'lv') {
    const translatedTitle = post.acf?.[`title_${lang}`];
    const translatedContent = post.acf?.[`content_${lang}`];

    if (typeof translatedTitle !== 'string' || typeof translatedContent !== 'string') {
      redirect(`/${lang}/jaunumi`);
    }

    displayTitle = translatedTitle;
    const { $contentContainer: $transParsed } = processHtml(translatedContent, { isLv: false });
    finalHtml = ($transParsed.html() || "") + '<div class="mt-12">' + lvMediaHtml + '</div>';
  } else {
    finalHtml = $lvParsed.html() || "";
  }

  const displayDate = (oldDate && oldDate.length > 5) ? oldDate : new Date(post.date ?? '').toLocaleDateString(lang === 'lv' ? 'lv-LV' : lang === 'en' ? 'en-US' : 'de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const labels: Record<string, { [key: string]: string }> = {
    jaunumi: { lv: 'JAUNUMI', en: 'NEWS', de: 'NEUIGKEITEN' },
    pasakumi: { lv: 'TUVĀKIE PASĀKUMI', en: 'UPCOMING EVENTS', de: 'KOMMENDE VERANSTALTUNGEN' },
    datums: { lv: 'DATUMS', en: 'DATE', de: 'DATUM' }
  };

  return (
    <article className="min-h-screen bg-white">
      {/* 1. Header Area: Date + Title */}
      <header className="vag-container pt-12 md:pt-16 text-center">
        <div className="mb-4 flex flex-col items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-gray-400">
          <div className="flex gap-4">
            {categories.map((cat: Record<string, unknown>) => (
              <span key={String(cat.id ?? '')}>{String((cat.acf as Record<string, unknown>)?.[`name_${lang}`] ?? cat.name ?? '')}</span>
            ))}
            {categories.length > 0 && <span>/</span>}
            <span>{labels.datums[lang]}: {displayDate}</span>
          </div>
        </div>
        
        <h1 className="mb-12 max-w-4xl mx-auto leading-[1.1]">
          {displayTitle}
        </h1>
      </header>

      {/* 2. Main Content Area */}
      <div className="vag-container pb-20">
        <div className="mx-auto max-w-[800px]">
          {featuredImage && (
            <div 
              className="relative mb-12 aspect-[16/9] w-full overflow-hidden"
              style={{ borderRadius: 'var(--card-radius)' }}
            >
              <Image
                src={featuredImage}
                alt={displayTitle}
                fill
                className="object-cover"
                sizes="(min-width: 1240px) 1240px, 100vw"
                priority
              />
            </div>
          )}
          
          <WpContent html={finalHtml || ""} />
        </div>
      </div>

      <div className="border-t border-gray-100 mt-20">
        <NewsSection posts={latestPosts} title={labels.jaunumi[lang]} lang={lang} />
        <EventsList title={labels.pasakumi[lang]} lang={lang} />
      </div>
    </article>
  );
}
