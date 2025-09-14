import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_MONGODB_URI': JSON.stringify(process.env.MONGODB_URI || 'mongodb+srv://nne:4v0wk6i5DCgYBctY@doomtestcluster.shrzauy.mongodb.net/nne2026'),
    global: 'globalThis',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
