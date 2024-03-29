module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "no-console": "off",
    "linebreak-style": "off",
    "prettier/prettier": "off",
    "no-else-return": "off"
  },
  env: {
    browser: true
  }
};
