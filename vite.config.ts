import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), svgr(), react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    lib: {
      entry: [path.resolve(__dirname, './src/components/index.ts'), path.resolve(__dirname, './plugin.ts')],
    },
    rollupOptions: {
      external: ['react'],
    },
  },
});
