import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // 👈 Add Jest globals
      },
    },
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
