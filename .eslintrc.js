// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//   },
//   parser: 'vue-eslint-parser',
//   parserOptions: {
//     parser: '@typescript-eslint/parser',
//   },
//   extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
//   plugins: [],
//   rules: {},
// }

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs', 'prettier', 'prettier/vue'],
  plugins: ['prettier'],
  // Add your custom rules here:
  rules: {},
};
