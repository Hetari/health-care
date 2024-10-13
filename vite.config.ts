import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/health-care/',
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['ScrollBar', 'ScrollArea'].includes(tag),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
