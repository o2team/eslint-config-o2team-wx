module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/strict',
    './rules/style',
    './rules/variables',
    './rules/es6'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  globals: {
    App: false,
    Behavior: false,
    Component: false,
    Page: false,
    getApp: false,
    getCurrentPages: false,
    wx: false
  }
}
