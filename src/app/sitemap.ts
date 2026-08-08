import { MetadataRoute } from 'next';

const BASE_URL = 'https://vagneriga.lv';

const staticRoutes = [
  '',
  '/rebuilding',
  '/donations',
  '/jaunumi',
  '/galerija',
  '/sponsori',
  '/biedriba',
  '/kontakti',
  '/nams',
  '/muzejs',
  '/pasakumi',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}/en${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    const wpApiUrl = process.env.NEXT_PUBLIC_WP_API_URL || 'https://vagneriga.lv/wp-json/wp/v2';
    const res = await fetch(`${wpApiUrl}/posts?per_page=100&_fields=slug,date`, {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const posts = await res.json();
      if (Array.isArray(posts)) {
        posts.forEach((post: { slug: string; date?: string }) => {
          routes.push({
            url: `${BASE_URL}/en/jaunumi/${post.slug}`,
            lastModified: post.date ? new Date(post.date) : new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
          });
        });
      }
    }
  } catch (err) {
    console.error('Failed to fetch posts for sitemap generation:', err);
  }

  return routes;
}
