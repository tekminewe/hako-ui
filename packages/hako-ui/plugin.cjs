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
  'danger100',
  'on-danger100',
  'danger5',
  'warning',
  'on-warning',
  'info',
  'on-info',

  'neutral100',
  'neutral90',
  'neutral80',
  'neutral70',
  'neutral60',
  'neutral50',
  'neutral40',
  'neutral30',
  'neutral20',
  'neutral10',
  'neutral5',
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
          [`--${cssVarPrefix}danger100`]: '#f44336',
          [`--${cssVarPrefix}on-danger100`]: '#fafafa',
          [`--${cssVarPrefix}danger5`]: '#fef2f2',
          [`--${cssVarPrefix}warning`]: '#ff9800',
          [`--${cssVarPrefix}on-warning`]: '#fafafa',
          [`--${cssVarPrefix}info`]: '#2196f3',
          [`--${cssVarPrefix}on-info`]: '#fafafa',

          [`--${cssVarPrefix}neutral100`]: '#0a0a0a',
          [`--${cssVarPrefix}neutral90`]: '#171717',
          [`--${cssVarPrefix}neutral80`]: '#262626',
          [`--${cssVarPrefix}neutral70`]: '#404040',
          [`--${cssVarPrefix}neutral60`]: '#525252',
          [`--${cssVarPrefix}neutral50`]: '#737373',
          [`--${cssVarPrefix}neutral40`]: '#a3a3a3',
          [`--${cssVarPrefix}neutral30`]: '#d4d4d4',
          [`--${cssVarPrefix}neutral20`]: '#e5e5e5',
          [`--${cssVarPrefix}neutral10`]: '#f5f5f5',
          [`--${cssVarPrefix}neutral5`]: '#fafafa',
        },
        body: {
          backgroundColor: theme('colors.background'),
          color: theme('colors.on-background100'),
          fontSize: theme('fontSize.base'),
        },
      });
    },
    {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            overlay: 'rgba(0, 0, 0, 0.15)',
            ...generateColors(cssVarPrefix),
          },
        },
      },
    },
  );
};
