const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://dev2.vagneriga.lv/wp-json/wp/v2';
const WP_HOST = 'dev2.vagneriga.lv';

function getAuthHeader() {
  const user = process.env.WP_AUTH_USER || 'headless';
  const pass = process.env.WP_AUTH_PASS || 'vagner-headless-2026';
  return 'Basic ' + Buffer.from(`${user}:${pass}`).toString('base64');
}

function getHeaders() {
  return {
    'Authorization': getAuthHeader(),
    'Host': WP_HOST,
  };
}

function sanitizeUrls(data: any) {
  if (!data) return data;
  return JSON.parse(JSON.stringify(data).replace(/http:\/\/dev2\.vagneriga\.lv/g, 'https://dev2.vagneriga.lv'));
}

export async function getPage(id: number | string) {
  const res = await fetch(`${WP_API_URL}/pages/${id}?_embed`, {
    next: { revalidate: 60 },
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch page ${id}: ${res.statusText}`);
  }

  return sanitizeUrls(await res.json());
}

export async function getPageBySlug(slug: string) {
  const res = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed`, {
    next: { revalidate: 60 },
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch page ${slug}: ${res.statusText}`);
  }

  const pages = await res.json();
  return sanitizeUrls(pages[0]) || null;
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 60 },
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch post ${slug}: ${res.statusText}`);
  }

  const posts = await res.json();
  return sanitizeUrls(posts[0]) || null;
}

export async function getPosts(params: { per_page?: number; page?: number; categories?: string | number; orderby?: string; order?: 'asc' | 'desc' } = {}) {
  const query = new URLSearchParams({
    _embed: '1',
    per_page: (params.per_page || 10).toString(),
    page: (params.page || 1).toString(),
  });

  if (params.categories) {
    query.append('categories', params.categories.toString());
  }

  if (params.orderby) {
    query.append('orderby', params.orderby);
  }

  if (params.order) {
    query.append('order', params.order);
  }

  const res = await fetch(`${WP_API_URL}/posts?${query.toString()}`, {
    next: { revalidate: 60 },
    headers: getHeaders(),
  });

  if (!res.ok) {
    console.error(`Fetch failed: ${WP_API_URL}/posts?${query.toString()}`, res.status, res.statusText);
    throw new Error(`Failed to fetch posts: ${res.statusText}`);
  }

  const posts = await res.json();
  const totalPosts = parseInt(res.headers.get('X-WP-Total') || '0');
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0');

  return { posts: sanitizeUrls(posts), totalPosts, totalPages };
}

export async function getProjects(params: { per_page?: number; page?: number; categories?: string | number; orderby?: string; order?: 'asc' | 'desc' } = {}) {
  const query = new URLSearchParams({
    _embed: '1',
    per_page: (params.per_page || 10).toString(),
    page: (params.page || 1).toString(),
  });

  if (params.categories) {
    query.append('project_category', params.categories.toString());
  }

  if (params.orderby) {
    query.append('orderby', params.orderby);
  }

  if (params.order) {
    query.append('order', params.order);
  }

  const res = await fetch(`${WP_API_URL}/project?${query.toString()}`, {
    next: { revalidate: 60 },
    headers: getHeaders(),
  });

  if (!res.ok) {
    console.error(`Fetch failed: ${WP_API_URL}/project?${query.toString()}`, res.status, res.statusText);
    return { projects: [], totalProjects: 0, totalPages: 0 };
  }

  const projects = await res.json();
  const totalProjects = parseInt(res.headers.get('X-WP-Total') || '0');
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0');

  return { projects: sanitizeUrls(projects), totalProjects, totalPages };
}

export async function getCategoryBySlug(slug: string, taxonomy: string = 'categories') {
  const res = await fetch(`${WP_API_URL}/${taxonomy}?slug=${slug}`, {
    next: { revalidate: 60 },
    headers: getHeaders(),
  });

  if (!res.ok) {
    console.warn(`Failed to fetch category ${slug} from taxonomy ${taxonomy}: ${res.statusText}`);
    return null;
  }

  const categories = await res.json();
  return sanitizeUrls(categories[0]) || null;
}

export function getTranslatedField(acf: any, fieldName: string, lang: string, fallback: any = "") {
  if (!acf) return fallback;
  // Try language-specific field first (e.g. title_lv, title_en, title_de)
  const translatedValue = acf[`${fieldName}_${lang}`];
  if (translatedValue) return translatedValue;
  
  // Fallback to the base field name
  return acf[fieldName] || fallback;
}

export async function getSettings() {
  // Use the same base URL but different namespace
  const settingsUrl = WP_API_URL.replace('/wp/v2', '/vag/v1/settings');
  
  const res = await fetch(settingsUrl, {
    next: { revalidate: 60 },
    headers: getHeaders(),
  });
  
  if (!res.ok) {
    console.error('Settings fetch failed:', res.status, res.statusText);
    return null;
  }
  return sanitizeUrls(await res.json());
}

export async function getFAQs() {
  const page = await getPageBySlug('faq');
  if (!page) return null;
  return page.acf?.faq_items || null;
}
