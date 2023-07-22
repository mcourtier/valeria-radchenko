module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs', 
    'prettier',
    'prettier/vue',
    '@nuxt/eslint-config',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: ['prettier', 'tailwind'],
  // Add your custom rules here:
  rules: {},
};
