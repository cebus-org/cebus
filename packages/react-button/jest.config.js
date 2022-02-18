module.exports = {
  displayName: 'react-button',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-sixteen',
  collectCoverage: true,
  setupFilesAfterEnv: ['./config/tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
};
