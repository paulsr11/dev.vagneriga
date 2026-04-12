/**
 * Shared constants for the app. Centralizes repeated URLs and config
 * so future domain/CDN changes are in one place.
 */

/** Base URL for WordPress media (uploads). Use this so images load from the CMS host. */
export const CMS_MEDIA_BASE = process.env.NEXT_PUBLIC_CMS_MEDIA_BASE ?? 'https://dev2.vagneriga.lv';

/** Fallback image URL when WP featured media is missing (cards, grids). */
export const FALLBACK_FEATURED_IMAGE =
  `${CMS_MEDIA_BASE}/wp-content/uploads/2025/09/20210830_VacijasVestnieciba_VagneraZale_039-650x433-1.jpg`;
