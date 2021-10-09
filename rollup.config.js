import { terser } from 'rollup-plugin-terser'
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
    esbuild()
  ]
  let sourcemap = true

  // production 向け
  // 圧縮するが license 表記だけ残す
  // sourcemap は出力しない
  if (process.env.NODE_ENV === 'production') {
    plugins.push(terser({
      format: {
        /**
         * @param {object} node
         * @param {object} comment
         * @returns {boolean}
         */
        comments: (node, comment) => /@license/.test(comment.value)
      }
    }))
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
