
# eslint-config-o2team-wx [![Build Status](https://travis-ci.org/o2team/eslint-config-o2team.svg?branch=master)](https://travis-ci.org/o2team/eslint-config-o2team)

> ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs.html) for WXAPP based on the O2Team Javascript Style Guide


## Installation

```
$ npm install --save-dev eslint eslint-config-o2team-wx
```

## Usage

### eslint-config-o2team-wx

Once the `eslint-config-o2team-wx` package is installed, you can use it by specifying `o2team-wx` in the `extends` section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "o2team-wx",
  "rules": {
    // Additional, per-project rules...
  }
}
```

Or you can specifying `eslint-config-o2team-wx` in the `eslintConfig` section of your `package.json`

```json
{
  "eslintConfig": {
    "extends": "eslint-config-o2team-wx"
  }
}
```

## [License](LICENSE)
