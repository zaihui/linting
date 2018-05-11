/**
 * @fileoverview zaihui base eslint rules
 * @author jkzing
 */

module.exports = {
  extends: [
    '@zaihui/eslint-plugin-zaihui-base',
    require.resolve('./react'),
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
}



