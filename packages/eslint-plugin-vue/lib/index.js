/**
 * @fileoverview zaihui base eslint rules
 * @author jkzing
 */

module.exports = {
  configs: {
    'base': require('./base'),
    'with-ts': require('./ts'),
  },
  rules: {
    strict: 'error',
  },
}



