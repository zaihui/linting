/**
 * @fileoverview zaihui base tslint rules
 * @author jkzing
 */
const path = require('path');

module.exports = {
  extends: [
    'tslint-react',
    '@zaihui/tslint-config-base',
  ],
  rules: {
    'jsx-alignment': true,
    'jsx-ban-elements': false,
    'jsx-ban-props': false,
    'jsx-boolean-value': [true, 'never'],
    'jsx-curly-spacing': [true, 'never'],
    'jsx-equals-spacing': [true, 'never'],
    'jsx-key': false,
    'jsx-no-bind': false,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'jsx-no-string-ref': true,
    'jsx-use-translation-function': false,
    'jsx-self-close': true,
    'jsx-space-before-trailing-slash': true,
    'jsx-wrap-multiline': false,
  },
};



