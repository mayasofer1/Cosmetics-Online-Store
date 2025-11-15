import { defineConfig } from 'vite'; // Import Vite configuration function
import react from '@vitejs/plugin-react'; // React plugin for Vite

// Export Vite config object
export default defineConfig({
  server: {
    proxy: {
      '/products': 'http://localhost:3000', // API route for product data (proxy to backend server)
      '/orders': 'http://localhost:3000',   // API route for submitting orders
    }
  },
  plugins: [react()], // Use React plugin (adds support for JSX, fast refresh, etc.)
});
