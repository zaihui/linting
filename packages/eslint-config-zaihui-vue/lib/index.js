/**
 * @fileoverview zaihui base eslint rules
 * @author jkzing
 */

module.exports = {
  extends: [
    '@zaihui/zaihui-base',
    require.resolve('./vue')
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



