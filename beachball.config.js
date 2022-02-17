module.exports = {
  tag: 'latest',
  generateChangelog: true,
  ignorePatterns: [
    '**/*.{shot,snap}',
    '**/*.{test,spec}.{ts,tsx}',
    '**/*.stories.tsx',
    '**/.eslintrc.*',
    '**/__fixtures__/**',
    '**/__coverage__/**',
    '**/__mocks__/**',
    '**/common/isConformant.ts',
    '**/jest.config.js',
    '**/tests/**',
  ],
};
