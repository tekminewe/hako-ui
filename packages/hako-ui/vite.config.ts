import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import path from 'path';
import { readdirSync } from 'fs';
import packageJson from './package.dist.json';

// Generate package.json for each sub folder in src/components when building the library.
const subFolderJsonConfigs = readdirSync('./src/components/')
  .filter((path) => !path.includes('.'))
  .map((path) => {
    return {
      outputFolder: `./dist/${path}`,
      baseContents: {
        name: `${packageJson.name}/${path}`,
        main: packageJson.main,
        module: packageJson.module,
        types: packageJson.types,
        sideEffects: packageJson.sideEffects,
      },
    };
  });

const entryFiles = readdirSync('./src/components/').reduce((files, componentName) => {
  if (componentName === 'index') {
    return {
      ...files,
      index: path.resolve(__dirname, './src/components/index.ts'),
    };
  }

  if (componentName.includes('.')) {
    return files;
  }

  return {
    ...files,
    [componentName]: path.resolve(__dirname, `./src/components/${componentName}/index.ts`),
  };
}, {} as Record<string, string>);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      beforeWriteFile: (filePath: string) => {
        return { filePath: filePath.replace('/components', '') };
      },
    }),
    svgr(),
    react(),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    lib: {
      entry: {
        ...entryFiles,
        plugin: path.resolve(__dirname, './plugin.cjs'),
      },
      fileName(format, entryName) {
        if (entryName === 'plugin' || entryName === 'index') {
          return `${entryName}.${format === 'es' ? 'js' : 'cjs'}`;
        }
        return `${entryName}/index.${format === 'es' ? 'js' : 'cjs'}`;
      },
    },
    rollupOptions: {
      external: ['react'],
      plugins: [...subFolderJsonConfigs.map(generatePackageJson)],
    },
  },
});
