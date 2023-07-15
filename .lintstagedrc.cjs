module.exports = {
  '*.js': (files) => `yarn run eslint ${files.join(' ')}`,
  '*.?(s)css': (files) => `yarn run stylelint ${files.join(' ')}`
}
