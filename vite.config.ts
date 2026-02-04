import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import path from 'path';

// Base URL configuration for different deployment targets
// Set VITE_BASE_URL environment variable for AWS or other deployments
const base = process.env.VITE_BASE_URL || './';

export default defineConfig({
  // Use './' for relative paths (works for GitHub Pages and AWS S3/CloudFront)
  // Can be overridden with VITE_BASE_URL environment variable
  base: base,
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
    // Generate source maps for debugging (can be disabled in production)
    sourcemap: false,
    // Optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
      },
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        // Optimize chunk splitting for better caching
        manualChunks: {
          vendor: ['gsap'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
  },
});
