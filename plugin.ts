import plugin from 'tailwindcss/plugin';

export default plugin(
  ({ addBase, theme }) => {
    addBase({
      ':root': {
        '--primary': '#7c3aed',

        '--text': '#171717',
        '--text-light': '#404040',
        '--text-lighter': ' #737373',

        '--background': '#fafafa',
        '--background-light': '#f5f5f5',
        '--background-lighter': '#e5e5e5',
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
        colors: {
          transparent: 'transparent',
          current: 'currentColor',

          primary: 'var(--primary)',

          text: 'var(--text)',
          'text-light': 'var(--text-light)',
          'text-lighter': 'var(--text-lighter)',

          background: 'var(--background)',
          'background-dark': 'var(--background-dark)',
          'background-darker': 'var(--background-darker)',
        },
        spacing: {
          '2xs': '0.25rem',
          xs: '0.5rem',
          sm: '0.75rem',
          base: '1rem',
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
