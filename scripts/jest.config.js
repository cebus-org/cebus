// import path from 'path';
// import { fileURLToPath } from 'url';

// const dirname = path.dirname(fileURLToPath(import.meta.url));

// export default {
//   displayName: 'react-storybook',
//   preset: 'ts-jest',
//   collectCoverage: true,
//   setupFilesAfterEnv: ['./config/tests.js'],
//   testMatch: ['<rootDir>/src/**/*.test.ts(x)?'],
//   testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
// };

import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

<<<<<<< HEAD
export const JestPreset = {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    chalk: 'chalk/source/index.js',
    '#ansi-styles': 'chalk/source/vendor/ansi-styles/index.js',
    '#supports-color': 'chalk/source/vendor/supports-color/index.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'mts', 'mjs', 'js', 'cjs'],
=======
export default {
  displayName: 'react-storybook',
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom-sixteen',
  setupFilesAfterEnv: ['./config/tests.js'],
>>>>>>> 56c06662a9c96952b8b33f081629012c8b3ecb6e
  testMatch: ['<rootDir>/src/**/*.test.ts(x)?'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: path.resolve(dirname, 'babel.config.js') }],
  },
};
