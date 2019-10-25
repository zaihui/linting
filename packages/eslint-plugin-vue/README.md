# @zaihui/eslint-plugin-vue

base eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@zaihui/eslint-plugin-vue`:

```
$ npm install @zaihui/eslint-plugin-vue --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@zaihui/eslint-plugin-vue` globally.

## Usage

Add `@zaihui/vue` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@zaihui/vue"
    ]
}
```

Choose suitable configuration.
```json
{
    "extends": [
        "plugin:@zaihui/vue/base", // or
        "plugin:@zaihui/vue/with-ts
    ]
}
```





