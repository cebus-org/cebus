import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  displayName: 'react-storybook',
  preset: 'ts-jest',
  collectCoverage: true,
  setupFilesAfterEnv: ['./config/tests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
};
