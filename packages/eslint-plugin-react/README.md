# @zaihui/eslint-plugin-react

base eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@zaihui/eslint-plugin-react`:

```
$ npm install @zaihui/eslint-plugin-react --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@zaihui/eslint-plugin-react` globally.

## Usage

Add `@zaihui/vue` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@zaihui/react"
    ]
}
```

Choose suitable configuration.
```json
{
    "extends": [
        "plugin:@zaihui/react/base", // or
        "plugin:@zaihui/react/with-ts
    ]
}
```
