module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    '@zaihui/eslint-config-base',
    'plugin:vue/recommended',
  ],
  // override recommended rules
  // find details at https://github.com/vuejs/eslint-plugin-vue
  rules: {
    strict: 'error',
    'vue/max-attributes-per-line': ['error', { singleline: 4 }],
    'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
    'vue/html-closing-bracket-spacing': 'error'
  },
  plugins: [
    'vue'
  ]
}
