const path = require('path')

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
		sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  extends: [
    require.resolve('./base'),
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'vue'
  ],
  rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/indent": ["error", 2],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"delimiter": "none",
					"requireLast": true
				},
				"singleline": {
					"delimiter": "semi",
					"requireLast": false
				}
			}
		],
		"@typescript-eslint/no-param-reassign": "off",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/quotes": [
			"error",
			"single"
		],
		"@typescript-eslint/semi": [
			"error",
			"never"
		],
    "arrow-parens": [
			"off",
			"as-needed"
    ],
    "camelcase": "error",
    "curly": [
			"error",
			"multi-line"
    ],
    "eol-last": "error",
    "eqeqeq": [
			"error",
			"smart"
    ],
    "id-blacklist": "error",
    "id-match": "error",
    "max-len": [
			"error",
			{
				"code": 100,
				"ignorePattern": "^import |^export \\{(.*?)\\}|class [a-zA-Z]+ implements |//",
			}
    ],
    "no-duplicate-imports": "error",
    "no-eval": "error",
    "no-new-wrappers": "error",
    "no-underscore-dangle": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "quote-props": [
			"error",
			"as-needed"
    ],
    "radix": "off",
    "space-before-function-paren": [
			"error",
			{
				"anonymous": "always",
				"named": "never"
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      files: ['*.ts{,x}'],
      parserOptions: {
        project: 'tsconfig.json',
        ecmaFeatures: {
          "jsx": true,
        },
      },
      rules: {
				"@typescript-eslint/explicit-function-return-type": ["warn"],
        "@typescript-eslint/tslint/config": [
          "error",
          {
						"rulesDirectory": [
							path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
							path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
							path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
						],
						"rules": {
							"align": false,
							"array-bracket-spacing": [
									true,
									"never"
							],
							"brace-style": [
									true,
									"1tbs",
									{
										"allowSingleLine": true
									}
							],
							"comment-format": [
									true,
									"check-space"
							],
							"no-boolean-literal-compare": true,
							"no-function-constructor-with-string-args": true,
							"object-curly-spacing": [
									true,
									"always"
							],
							"object-shorthand-properties-first": true,
							"prefer-array-literal": true,
							"space-in-parens": [
									true,
									"never"
							],
							"ter-arrow-parens": [
									true,
									"as-needed",
									{
											"requireForBlockBody": false
									}
							],
							"ter-indent": [
								true,
								2,
								{
										"SwitchCase": 1,
										"VariableDeclarator": 1,
										"outerIIFEBody": 1,
										"FunctionDeclaration": {
												"parameters": 1,
												"body": 1
										},
										"FunctionExpression": {
												"parameters": 1,
												"body": 1
										},
										"CallExpression": {
												"arguments": 1
										},
										"ArrayExpression": 1,
										"ObjectExpression": 1,
										"ImportDeclaration": 1,
										"flatTernaryExpressions": false,
										"ignoreComments": false
								}
							],
							"ter-prefer-arrow-callback": [
								true,
								{
									"allowNamedFunctions": false,
									"allowUnboundThis": true
								}
							],
							"trailing-comma": [
								true,
								{
									"multiline": "always",
									"singleline": "never"
								}
							],
							"whitespace": [
								true,
								"check-branch",
								"check-decl",
								"check-operator",
								"check-preblock"
							]
						}
          }
        ]
      }
    }
  ]
}
