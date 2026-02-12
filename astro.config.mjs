import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// For GitHub Pages: base must match repo name (project site URL path)
export default defineConfig({
  site: process.env.SITE_URL || 'https://gvamorim.github.io',
  base: '/business-and-wine-landing-page/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
