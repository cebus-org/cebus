import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  testEnvironment: 'jest-environment-jsdom-sixteen',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    chalk: 'chalk/source/index.js',
    '#ansi-styles': 'chalk/source/vendor/ansi-styles/index.js',
    '#supports-color': 'chalk/source/vendor/supports-color/index.js',
  },
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'mts', 'mjs', 'js', 'cjs'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: path.resolve(dirname, 'babel.config.js') }],
  },
};
