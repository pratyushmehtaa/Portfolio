import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    include: ['@tsparticles/react', 'tsparticles'],
  },
  build: {
    rollupOptions: {
      // Remove externals to allow proper bundling
      external: [],
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
