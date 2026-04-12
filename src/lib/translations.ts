import type { WPRecord } from '@/types/wp';

/**
 * Client-safe translation helper. Do NOT import from lib/wp in client components
 * as that module uses Node.js Buffer.
 */
export function getTranslatedField(acf: WPRecord | null, fieldName: string, lang: string, fallback: unknown = "") {
  if (!acf) return fallback;
  const translatedValue = acf[`${fieldName}_${lang}`];
  if (translatedValue !== undefined && translatedValue !== null) return translatedValue;
  return acf[fieldName] ?? fallback;
}

/** Normalize ACF image field to URL string. Handles object { url }, string, or invalid. */
export function getImageUrl(value: unknown, fallback: string): string {
  if (!value) return fallback;
  if (typeof value === 'string' && (value.startsWith('http') || value.startsWith('/'))) return value;
  if (typeof value === 'object' && value !== null && 'url' in value && typeof (value as { url: string }).url === 'string') return (value as { url: string }).url;
  return fallback;
}
