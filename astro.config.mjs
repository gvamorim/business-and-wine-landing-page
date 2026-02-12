import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Default: Cloudflare Pages at https://businessandwine.pages.dev/ (root).
// For GitHub Pages, the workflow sets BASE_PATH and SITE_URL.
export default defineConfig({
  site: process.env.SITE_URL || 'https://businessandwine.pages.dev',
  base: process.env.BASE_PATH || '/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
