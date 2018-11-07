import { Config } from '@stencil/core';
import builtins from 'rollup-plugin-node-builtins';

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [builtins()],
  globalStyle: 'src/global/app.css',
  nodeResolve: { browser: true }
};
