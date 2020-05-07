module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": [2, {"anonymous": "never", "named": "never"}],
    'object-curly-spacing': ["error", "never"],
    "indent": ["off", 2],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
