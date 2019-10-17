module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    '@zaihui/base',
    'plugin:vue/base',
    'plugin:vue/recommended',
  ],
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'vue'
  ],
  // override recommended rules
  // find details at https://github.com/vuejs/eslint-plugin-vue
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 4 }],
    'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
    'vue/html-closing-bracket-spacing': 'error'
  }
}
