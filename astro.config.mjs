// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'https://kthread.dev',
  integrations: [mdx(), sitemap(), markdoc()],
  adapter: cloudflare({
    cloudflareModules: true,
    imageService: "compile",
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.jsonc',
      persist: {
        path: './.cache/wrangler/v3'
      },
    },
  }),
});