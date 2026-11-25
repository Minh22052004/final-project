import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Gắn 2 plugin: React và Tailwind
  plugins: [react(), tailwindcss()],

  server: {
    port: 5173,
    // PROXY: mọi yêu cầu bắt đầu bằng /api sẽ được Vite chuyển tiếp sang server Express
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});