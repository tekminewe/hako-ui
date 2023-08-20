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

  'rounded',

  // New colors
  'success-bg',
  'success-text',
  'success-border',

  'info-bg',
  'info-text',
  'info-border',

  'warning-bg',
  'warning-text',
  'warning-border',
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
    ({ addBase, theme, addComponents }) => {
      addBase({
        ':root': {
          [`--${cssVarPrefix}primary`]: '#7c3aed',
          [`--${cssVarPrefix}on-primary`]: '#fafafa',

          [`--${cssVarPrefix}success`]: '#16a34a',
          [`--${cssVarPrefix}on-success`]: '#fafafa',
          [`--${cssVarPrefix}danger100`]: '#f44336',
          [`--${cssVarPrefix}on-danger100`]: '#fafafa',
          [`--${cssVarPrefix}danger5`]: '#fef2f2',
          [`--${cssVarPrefix}warning`]: '#d97706',
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
          [`--${cssVarPrefix}neutral5`]: '#fdfdfd',

          [`--${cssVarPrefix}rounded`]: '0.375rem',

          // New colors
          [`--${cssVarPrefix}success-bg`]: '#dcfce7',
          [`--${cssVarPrefix}success-text`]: '#16a34a',
          [`--${cssVarPrefix}success-border`]: '#16a34a',

          [`--${cssVarPrefix}info-bg`]: '#dbeafe',
          [`--${cssVarPrefix}info-text`]: '#2563eb',
          [`--${cssVarPrefix}info-border`]: '#2563eb',

          [`--${cssVarPrefix}warning-bg`]: '#fef3c7',
          [`--${cssVarPrefix}warning-text`]: '#d97706',
          [`--${cssVarPrefix}warning-border`]: '#d97706',
        },
        body: {
          backgroundColor: theme('colors.neutral5'),
          color: theme('colors.neutral90'),
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.5'),
          borderColor: `var(--${cssVarPrefix}neutral30)`,
        },
      });
      addComponents({
        '.hk-typo-h1': {
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.9'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.hk-typo-h2': {
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.8'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.hk-typo-h3': {
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.7'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.hk-typo-highlight': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.medium'),
          lineHeight: theme('lineHeight.5'),
        },
        '.hk-typo-body': {
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.5'),
        },
        '.hk-typo-small': {
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.4'),
        },
        '.hk-rounded': {
          borderRadius: `var(--${cssVarPrefix}rounded)`,
        },
        '.hk-border': {
          borderColor: theme('colors.neutral30'),
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
