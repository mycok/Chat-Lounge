module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  "overrides": [
    {
        "files": ["*.test.js"],
        "env": {
            "mocha": true
        },
        "rules": {
            "func-names": "off",
            "prefer-arrow-callback": "off"
        }
    }
],
  rules: {
  },
};
