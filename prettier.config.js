/** @type {import('prettier').Options} */
module.exports = {
  semi: false,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  arrowParens: 'always',
  proseWrap: 'always',
  printWidth: 100,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
}
