module.exports = {
  plugins: [
    require('prettier-plugin-import-sort'),
    require('prettier-plugin-organize-attributes'),
    require('prettier-plugin-organize-imports'),
  ],
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
