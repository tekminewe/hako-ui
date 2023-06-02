import plugin from 'tailwindcss/plugin';

export interface PluginOptions {
  /**
   * The prefix to use for all the CSS variables.
   * @default 'hk-'
   * @example 'hk-'
   */
  cssVarPrefix?: string;
}

export type PluginCreator = (options?: PluginOptions) => typeof plugin;

export type LayoutColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
