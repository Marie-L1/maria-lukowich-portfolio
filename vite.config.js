// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/maria-lukowich-portfolio/', // This sets the correct base path
  plugins: [react()],
});
