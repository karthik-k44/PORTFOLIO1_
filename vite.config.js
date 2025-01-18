import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIO1_/',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
   } // Match your repository name
});