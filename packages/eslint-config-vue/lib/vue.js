module.exports = {
  extends: [
    'plugin:vue/recommended'
  ],

  // override recommended rules
  // find details at https://github.com/vuejs/eslint-plugin-vue
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 4 }],
    'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
    'vue/html-closing-bracket-spacing': 'error'
  }
};
