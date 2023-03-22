module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    allowImportExportEverywhere: true,
  },
  ecmaFeatures: {
    jsx: true,
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: ['error', 2],
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
};
