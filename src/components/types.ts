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
