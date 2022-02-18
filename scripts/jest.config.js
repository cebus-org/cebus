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

export default {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    chalk: 'chalk/source/index.js',
    '#ansi-styles': 'chalk/source/vendor/ansi-styles/index.js',
    '#supports-color': 'chalk/source/vendor/supports-color/index.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'mts', 'mjs', 'js', 'cjs'],
  testMatch: ['<rootDir>/src/**/*.test.ts(x)?'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: path.resolve(dirname, 'babel.config.js') }],
  },
};
