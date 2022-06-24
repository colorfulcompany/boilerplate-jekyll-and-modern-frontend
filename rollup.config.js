/* eslint-disable import/no-default-export */
import { nodeResolve } from '@rollup/plugin-node-resolve'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import esbuild from 'rollup-plugin-esbuild'
import stimulus from 'rollup-plugin-stimulus'

const isProd = (process.env.NODE_ENV === 'production')
const esTargetVersion = 'es2017'

/**
 * rollup configuration function
 *
 * @returns {object}
 */
export default () => {
  const sourcemap = !isProd

  // defaults
  const plugins = [
    stimulus(),
    nodeResolve(),
    esbuild({
      sourceMap: sourcemap,
      minify: isProd,
      target: esTargetVersion
    })
  ]

  // place injectProcessEnv as last plugin
  plugins.push(
    injectProcessEnv({
      NODE_ENV: process.env.NODE_ENV
    })
  )

  return {
    input: 'frontend/javascripts/main.ts',
    output: {
      file: 'src/assets/javascripts/main.js',
      format: 'iife',
      sourcemap
    },
    plugins
  }
}
