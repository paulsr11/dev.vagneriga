/** Minimal types for WordPress / ACF API responses to avoid `any` */

export type WPRecord = Record<string, unknown>;

/** Page or post from WP API; allows optional common fields + index signature */
export interface WPPageOrPost extends WPRecord {
  seo?: { title?: string; description?: string; canonical?: string; og_title?: string; og_description?: string; og_image?: string };
  acf?: WPRecord;
  title?: { rendered?: string };
  content?: { rendered?: string };
  date?: string;
  _embedded?: Record<string, unknown[]>;
}

export interface WPBlock {
  acf_fc_layout?: string;
  [key: string]: unknown;
}

export type WPSlide = { type: "image"; src: string; alt: string } | { type: "video"; sources: { src: string; type: string }[] };
