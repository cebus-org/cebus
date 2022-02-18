/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ['airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: ['deprecation', 'import', '@typescript-eslint', 'jest', 'jsx-a11y', 'react', 'react-hooks'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'no-unused-expressions': 'off',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  ignorePatterns: ['coverage', 'dist', 'dist-storybook', 'lib', 'lib-commonjs', '**/__snapshots__', 'node_modules'],
  rules: {
    'no-unused-vars': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};

module.exports = config;
