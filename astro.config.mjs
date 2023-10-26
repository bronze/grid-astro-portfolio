import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://grid-astro-portfolio.vercel.app/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://grid-astro-portfolio.vercel.app/sitemap-index.xml",
        "https://grid-astro-portfolio.vercel.app/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({injectReset: true}),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});
