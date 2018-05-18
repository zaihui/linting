/**
 * @fileoverview zaihui base tslint rules
 * @author jkzing
 */
const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  rules: { // base on https://github.com/airbnb/javascript/tree/44dbd0bdc41d08eb5de8ad698099ae44240f4b0d
    // tslint-consistent-codestyle
    'object-shorthand-properties-first': true, // 3.5
    'no-else-after-return': false, // 16.3

    // tslint-eslint-rules
    'ter-prefer-arrow-callback': [true, {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }], // 8.1
    'ter-arrow-parens': [
      true,
      'as-needed',
      { 'requireForBlockBody': true },
    ], // 8.4
    'brace-style': [
      true,
      '1tbs',
      { allowSingleLine: true },
    ], // 16.2
    'ter-indent': [
      true,
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
        ignoreComments: false
      },
    ], // 19.1
    'space-in-parens': [true, 'never'], // 19.9
    'array-bracket-spacing': [true, 'never'], // 19.10
    'object-curly-spacing': [true, 'always'], // 19.11

    // tslint-microsoft-contrib
    'prefer-array-literal': true, // 4.1
    'no-function-constructor-with-string-args': true, // 7.10
    'no-increment-decrement': false, // 13.6
    'function-name': [
      true,
      {
        'function-regex': /^[a-z$][\w\d]+$/,
        'method-regex': /^[a-z$][\w\d]+$/,
        'private-method-regex': /^[a-z$][\w\d]+$/,
        'protected-method-regex': /^[a-z$][\w\d]+$/,
        'static-method-regex': /^[a-z$][\w\d]+$/,
      }, // 23.1
    ],
    'import-name': false, // 23.6

    // tslint
    'prefer-const': true, // 2.1, 13.1
    'no-var-keyword': true, // 2.2
    'object-literal-shorthand': true, // 3.3, 3.4
    'object-literal-key-quotes': [true, 'as-needed'], // 3.6
    quotemark: [
      true,
      'single',
      'jsx-double',
    ], // 6.1
    'no-eval': true, // 6.4
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always', // 7.11
        named: 'never', // 19.3
      },
    ],
    'no-parameter-reassignment': false, // 7.12
    align: [
      true,
      'arguments',
      'parameters',
    ], // 7.15
    'arrow-parens': false, // 8.2
    'no-duplicate-imports': true, // 10.4
    'one-variable-per-declaration': [true, 'ignore-for-loop'], // 13.2
    'triple-equals': [true, 'allow-null-check', 'allow-undefined-check'], // 15.1
    'no-boolean-literal-compare': true, // 15.3
    curly: [true, 'ignore-same-line'], // 16.1
    'comment-format': [true, 'check-space'], // 18.3
    indent: [true, 'space'], // 19.1
    whitespace: [
      true,
      'check-branch', // 19.3
      'check-decl', // 19.4
      'check-operator', // 19.4
      'check-preblock', // 19.2
    ],
    eofline: true, // 19.5
    'max-line-length': [true, 100], // 19.12
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never',
      },
    ], // 20.2
    semicolon: [true, 'never'], // 21.1
    'no-construct': true, // 22.2, 22.3, 22.6
    radix: false, // 22.3
    'variable-name': [true, 'check-format'], // 23.2
    'no-this-assignment': false, // 23.5
  },
};



