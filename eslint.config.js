import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['src/**/*.{ts, tsx}'],
    rules: {
      semi: 'error',
    },
  },
];
