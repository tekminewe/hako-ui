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

/**
 * Construct the class name
 * @param {string} name
 * @param {string} prefix
 * @returns {string}
 */
const constructClassName = (name, prefix) => {
  return `${prefix}${name}`;
};

/** @type {import('./src/components/types').PluginCreator} */
module.exports = (options) => {
  const { cssVarPrefix = 'hk-' } = options || {};
  const cssClassPrefix = 'hk-';
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
          [`--${cssVarPrefix}background-dark`]: '#e5e5e5',
          [`--${cssVarPrefix}on-background-dark`]: '#171717',
          [`--${cssVarPrefix}background-darker`]: '#a3a3a3',
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
        colors: {
          transparent: 'transparent',
          currentColor: 'currentColor',
          ...generateColors(cssVarPrefix),
        },
        spacing: {
          [constructClassName('2xs', cssClassPrefix)]: '0.25rem',
          [constructClassName('xs', cssClassPrefix)]: '0.5rem',
          [constructClassName('sm', cssClassPrefix)]: '0.75rem',
          [constructClassName('md', cssClassPrefix)]: '1rem',
          [constructClassName('lg', cssClassPrefix)]: '1.25rem',
          [constructClassName('xl', cssClassPrefix)]: '1.5rem',
          [constructClassName('2xl', cssClassPrefix)]: '1.75rem',
          [constructClassName('3xl', cssClassPrefix)]: '2rem',
          [constructClassName('4xl', cssClassPrefix)]: '2.25rem',
          [constructClassName('5xl', cssClassPrefix)]: '2.5rem',
          [constructClassName('6xl', cssClassPrefix)]: '2.75rem',
        },
        fontSize: {
          [constructClassName('xs', cssClassPrefix)]: ['0.75rem', '1rem'],
          [constructClassName('sm', cssClassPrefix)]: ['0.875rem', '1.25rem'],
          [constructClassName('md', cssClassPrefix)]: ['1rem', '1.5rem'],
          [constructClassName('lg', cssClassPrefix)]: ['1.25rem', '1.75rem'],
          [constructClassName('xl', cssClassPrefix)]: ['1.5rem', '2rem'],
          [constructClassName('2xl', cssClassPrefix)]: ['1.875rem', '2.25rem'],
          [constructClassName('3xl', cssClassPrefix)]: ['3rem', '1'],
        },
      },
    },
  );
};
