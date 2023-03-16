# hako-ui

A collection of UI components built with utility-first CSS framework TailwindCSS

## Getting Started

Hako UI can be used in any React project that uses TailwindCSS. If you don't have TailwindCSS installed in your project, you can follow the [TailwindCSS installation guide](https://tailwindcss.com/docs/installation) to get started.

1. Install the `hako-ui` package.

```bash
pnpm install hako-ui
```

2. Add `hako-ui` as a TailwindCSS plugin and update the `content` inside the `tailwind.config.js` file:

```js
module.exports = {
  // Other config options...

  content: [
    // Add hako-ui path
    './node_modules/hako-ui/**/*.js',
  ],
  plugins: [
    // Add hako-ui as plugin
    require('hako-ui/plugin'),
  ],
};
```
