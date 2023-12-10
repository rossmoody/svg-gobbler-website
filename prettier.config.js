/** @type {import('prettier').Options} */
module.exports = {
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  tailwindFunctions: ['clsx'],
  trailingComma: 'all',
}
