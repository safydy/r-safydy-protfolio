import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    partytown({
      config: {
        // Add the "dataLayer.push" as a forwarding-event with GA
        forward: ['dataLayer.push'],
      },
    })
  ],
  output: "server",
  adapter: netlify()
});