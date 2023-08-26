// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 84,
  useTabs: true,
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  endOfLine: "crlf"
};

export default config;