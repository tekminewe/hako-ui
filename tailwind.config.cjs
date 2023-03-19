// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('./plugin.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [plugin()],
};
