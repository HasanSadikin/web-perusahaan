import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), react(), sanity({
    projectId: 'm68unj3e',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  })]
});