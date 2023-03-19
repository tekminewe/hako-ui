// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/**
 * Colors of the theme
 */
const colors = [
  'primary',
  'on-primary',
  'success',
  'on-success',
  'danger',
  'on-danger',
  'warning',
  'on-warning',
  'info',
  'on-info',

  'text',
  'text-light',
  'text-lighter',

  'background',
  'background-dark',
  'background-darker',
];

/**
 * Generate the colors for the theme
 * @param {string} prefix
 * @returns {typeof Record<string, string>}
 */
const generateColors = (prefix) => {
  return colors.reduce((themeColors, color) => {
    themeColors[color] = `var(--${prefix}${color})`;
    return themeColors;
  }, {});
};

/** @type {import('./src/components/types').PluginCreator} */
module.exports = (options) => {
  const { prefix = 'hk-' } = options || {};
  return plugin(
    ({ addBase, theme }) => {
      addBase({
        ':root': {
          [`--${prefix}primary`]: '#7c3aed',
          [`--${prefix}on-primary`]: '#fafafa',

          [`--${prefix}success`]: '#4caf50',
          [`--${prefix}on-success`]: '#fafafa',
          [`--${prefix}danger`]: '#f44336',
          [`--${prefix}on-danger`]: '#fafafa',
          [`--${prefix}warning`]: '#ff9800',
          [`--${prefix}on-warning`]: '#fafafa',
          [`--${prefix}info`]: '#2196f3',
          [`--${prefix}on-info`]: '#fafafa',

          [`--${prefix}text`]: '#171717',
          [`--${prefix}text-light`]: '#404040',
          [`--${prefix}text-lighter`]: ' #737373',

          [`--${prefix}background`]: '#fafafa',
          [`--${prefix}background-dark`]: '#f5f5f5',
          [`--${prefix}background-darker`]: '#e5e5e5',
        },
        body: {
          backgroundColor: theme('colors.background'),
          fontSize: theme('fontSize.base'),
        },
      });
    },
    {
      darkMode: 'class',
      theme: {
        extend: {
          colors: generateColors(prefix),
          spacing: {
            '2xs': '0.25rem',
            xs: '0.5rem',
            sm: '0.75rem',
            md: '1rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '1.75rem',
            '3xl': '2rem',
            '4xl': '2.25rem',
            '5xl': '2.5rem',
            '6xl': '2.75rem',
          },
          fontSize: {
            xs: ['0.75rem', '1rem'],
            sm: ['0.875rem', '1.25rem'],
            base: ['1rem', '1.5rem'],
            lg: ['1.25rem', '1.75rem'],
            xl: ['1.5rem', '2rem'],
            '2xl': ['1.875rem', '2.25rem'],
            '3xl': ['3rem', '1'],
          },
        },
      },
    },
  );
};
