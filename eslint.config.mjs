import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest, 
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules, 
      "prettier/prettier": ["error", { "endOfLine": "auto" }], 
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off", 
    },
  },
];