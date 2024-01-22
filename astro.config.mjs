import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  buildOptions: {
    // Asset handling configuration
    // Example: If your images are in the 'assets' folder
  },
})
