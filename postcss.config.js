module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('csstools-postcss-sass-pre-release'),
    require('postcss-preset-env')({
      autoprefixer: true
    })
  ]
}
