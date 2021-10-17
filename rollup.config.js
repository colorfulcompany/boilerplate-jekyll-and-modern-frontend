import { nodeResolve } from '@rollup/plugin-node-resolve'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import esbuild from 'rollup-plugin-esbuild'
import stimulus from 'rollup-plugin-stimulus'

const isProd = (process.env.NODE_ENV === 'production')

/**
 * rollup configuration function
 *
 * @returns {object}
 */
export default () => {
  let sourcemap = true

  // defaults
  const plugins = [
    stimulus(),
    nodeResolve()
  ]

  if (isProd) {
    plugins.push(
      esbuild({
        minify: true,
        sourceMap: false
      })
    )
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
