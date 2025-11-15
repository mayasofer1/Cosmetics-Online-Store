import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Cosmetics-Online-Store/',

  plugins: [react()],

  server: {
    proxy: {
      '/products': 'http://localhost:3000',
      '/orders': 'http://localhost:3000',
    },
  },
});
