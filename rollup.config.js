import { nodeResolve } from '@rollup/plugin-node-resolve'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import esbuild from 'rollup-plugin-esbuild'
import stimulus from 'rollup-plugin-stimulus'

/**
 * rollup configuration function
 *
 * @returns {object}
 */
export default () => {
  // defaults
  const plugins = [
    stimulus(),
    nodeResolve(),
    esbuild({
      minify: process.env.NODE_ENV === 'production'
    })
  ]
  let sourcemap = true

  // production 向け
  // sourcemap は出力しない
  if (process.env.NODE_ENV === 'production') {
    sourcemap = false
  }

  // place injectProcessEnv as last plugin
  plugins.push(
    injectProcessEnv({
      NODE_ENV: process.env.NODE_ENV
    })
  )

  return {
    input: 'frontend/javascripts/main.js',
    output: {
      file: 'src/assets/javascripts/main.js',
      format: 'iife',
      sourcemap
    },
    plugins
  }
}
