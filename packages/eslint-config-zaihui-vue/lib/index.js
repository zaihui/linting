/**
 * @fileoverview zaihui base eslint rules
 * @author jkzing
 */

module.exports = {
  extends: [
    'plugin:vue/essential'
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



