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

  'background',
  'on-background',

  'background-dark',
  'on-background-dark',

  'background-darker',
  'on-background-darker',
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
  const { cssVarPrefix = 'hk-' } = options || {};
  return plugin(
    ({ addBase, theme }) => {
      addBase({
        ':root': {
          [`--${cssVarPrefix}primary`]: '#7c3aed',
          [`--${cssVarPrefix}on-primary`]: '#fafafa',

          [`--${cssVarPrefix}success`]: '#4caf50',
          [`--${cssVarPrefix}on-success`]: '#fafafa',
          [`--${cssVarPrefix}danger`]: '#f44336',
          [`--${cssVarPrefix}on-danger`]: '#fafafa',
          [`--${cssVarPrefix}warning`]: '#ff9800',
          [`--${cssVarPrefix}on-warning`]: '#fafafa',
          [`--${cssVarPrefix}info`]: '#2196f3',
          [`--${cssVarPrefix}on-info`]: '#fafafa',

          [`--${cssVarPrefix}background`]: '#fafafa',
          [`--${cssVarPrefix}on-background`]: '#171717',
          [`--${cssVarPrefix}background-dark`]: '#f5f5f5',
          [`--${cssVarPrefix}on-background-dark`]: '#171717',
          [`--${cssVarPrefix}background-darker`]: '#e5e5e5',
          [`--${cssVarPrefix}on-background-darker`]: '#171717',
        },
        body: {
          backgroundColor: theme('colors.background'),
          color: theme('colors.on-background'),
          fontSize: theme('fontSize.base'),
        },
      });
    },
    {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            ...generateColors(cssVarPrefix),
          },
        },
      },
    },
  );
};