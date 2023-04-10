// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs/promises');

const outputPath = './src/components';
const indexPath = `${outputPath}/index.ts`;

function generateContent(exports) {
  let content = "export * from './types';\n";
  exports.forEach((ex) => {
    content += `${ex}\n`;
  });

  return content;
}

async function buildIndex() {
  const folder = await fs.readdir(outputPath, 'utf-8');
  const exports = [];

  await Promise.all(
    folder.flatMap(async (folderPath) => {
      try {
        await fs.open(`${outputPath}/${folderPath}/index.ts`);
        exports.push(`export * from './${folderPath}';`);
      } catch {
        try {
          await fs.open(`${outputPath}/${folderPath}/index.tsx`);
          exports.push(`export * from './${folderPath}';`);
        } catch {
          console.error(`❌ Could not find index.ts or index.tsx in ${folderPath}`);
        }
      }
    }),
  );

  console.log('- Creating file: index.ts');
  await fs.writeFile(indexPath, generateContent(exports), 'utf-8');
}

(function main() {
  console.log('🏗 Building index.ts...');
  new Promise(() => {
    buildIndex();
  }).then(() => console.log('✅ Finished building package.'));
})();
