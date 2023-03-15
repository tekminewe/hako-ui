import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/stories/assets'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/stories/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
    },
  },
});
