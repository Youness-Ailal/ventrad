import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ventrad.co",

  integrations: [tailwind(), icon(), sitemap(), astroI18next()],
  vite: {
    ssr: {
      noExternal: ["webcoreui"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
