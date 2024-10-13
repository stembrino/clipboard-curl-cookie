/** @type {import('eslint').Linter.FlatConfig} */
const config = [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        globals: {
          browser: "readonly",
          es6: true,
        },
      },
    },
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      semi: ["error", "always"],
      // quotes: ["error", "double"],
    },
  },
  {
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": ["error"],
    },
    files: ["**/*.js"],
  },
];

module.exports = config;
