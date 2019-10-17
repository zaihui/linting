module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    require.resolve('./base'),
    'plugin:@typescript-eslint/recommended'
  ],
}
