const prettier = require('eslint-plugin-prettier');
module.exports = [
  {
    files: ['src/**/*.{ts, tsx}'],
    rules: {
      semi: 'error',
    },
    plugins: {
      prettier,
    },
  },
];
