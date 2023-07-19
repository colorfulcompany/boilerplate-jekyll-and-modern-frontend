/**
 *  postcss configuration object
 *
 * @returns {object}
 */
module.exports = () => {
  const plugins = [
    require('postcss-import'),
    require('csstools-postcss-sass-pre-release'),
    require('postcss-preset-env')({
      autoprefixer: true
    })
  ]

  if (process.env.NODE_ENV === 'production') {
    plugins.push(require('postcss-csso')({ restructure: false }))
  }

  return {
    parser: 'postcss-scss',
    plugins
  }
}
