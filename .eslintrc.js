module.exports = {
  env: {
    es2017: true,
    browser: true,
    es2020: false,
    es2021: false
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  extends: [
    'standard',
    'plugin:jsdoc/recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          FunctionDeclaration: true,
          MethodDefinition: true
        }
      }
    ],
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off'
  },
  ignorePatterns: [
    'vendor/**/*.js'
  ]
}
