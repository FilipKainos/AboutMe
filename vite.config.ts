import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    nunjucks({
      templatesDir: path.resolve(__dirname, 'templates'),
      variables: {},
      nunjucksEnvironment: {
        options: {
          autoescape: true,
        },
      },
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
