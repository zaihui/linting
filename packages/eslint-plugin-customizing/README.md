# @zaihui/eslint-plugin-customizing

customize rule for zaihui

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `@zaihui/eslint-plugin-customizing`:

```bash
npm install @zaihui/eslint-plugin-customizing --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@zaihui/eslint-plugin-customizing` globally.

## Usage A

Add `customizing` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@zaihui/customizing"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@zaihui/customizing/rule-name": 2
  }
}
```

## Usage B

```json
{
  "extends": ["plugin:@zaihui/customizing/recommended"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "customizing/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
