module.exports = {
  env: {
    es2015: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2015
  },
  extends: [
    'standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  ignorePatterns: [
    'vendor/**/*.js'
  ]
}
