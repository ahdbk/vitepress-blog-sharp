module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
      ecmaVersion: 2020,
      parser: {
        ts: "@typescript-eslint/parser",
      }
    },
    // I forget what this was supposed to do
    /*
    env: {
      node: true,
      browser: true,
      commonjs: true,
      jest: true,
      es6: true,
    },
    */
    extends: ['plugin:vue/vue3-recommended'],
    ignorePatterns: ['dist/', 'node_modules/', '*.json', '.temp/'],
    rules: { /**/ },
  };