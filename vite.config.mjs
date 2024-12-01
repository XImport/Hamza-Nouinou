// Plugins
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import ViteFonts from "unplugin-fonts/vite";
import Markdown from "vite-plugin-md";
// import markdownItToc from "markdown-it-toc-done-right";
import markdownItAnchor from "markdown-it-anchor";
// import Markdown from 'vite-plugin-md';

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      template: { transformAssetUrls },
      include: [/\.vue$/, /\.md$/], // Allow .vue and .md files
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(markdownItAnchor, {
          permalink: markdownItAnchor.permalink.ariaHidden({
            placement: "before",
            symbol: "",
            class: "header-anchor",
          }),
          slugify: (str) => {
            return str
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]/g, "")
              .replace(/<!--\s*Key\s*-->/g, "")
              .trim();
          },
          uniqueSlugStartIndex: 1,
          level: [1, 2, 3, 4], // Ensure all header levels are processed
        });
      },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900",
          },
        ],
      },
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
});
