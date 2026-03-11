import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import markdoc from "@astrojs/markdoc";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  site: "https://kthread.dev",
  output: "server",
  integrations: [
    mdx(),
    sitemap(),
    markdoc(),
    playformInline({
      Exclude: [(file) => file.toLowerCase().includes("katex")],
    }),
  ],
  adapter: cloudflare({
    imageService: {
      imageService: { build: "compile", runtime: "cloudflare-binding" },
    },
  }),
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    ssr: {
      external: ["canvaskit-wasm", "node:crypto", "stream"],
      noExternal: [],
    },
  },
  build: {
    assets: "assets",
    inlineStylesheets: "always",
    concurrency: 2,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },
});
