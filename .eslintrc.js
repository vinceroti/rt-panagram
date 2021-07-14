module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  // required to lint *.vue files
  plugins: ["prettier","html"],
  // add your custom rules here
  rules: {
    "object-shorthand": "off",
    "prettier/prettier": "error",
    "camelcase": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
      },
    ],
  },
};
