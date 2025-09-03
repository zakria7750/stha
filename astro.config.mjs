import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://jeddah-alhawbani-flatbed.com',
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    server: {
      host: '0.0.0.0',
      hmr: {
        clientPort: 443
      }
    },
    build: {
      cssCodeSplit: false
    },
    define: {
      __REPLIT_ENV__: true
    }
  }
});
