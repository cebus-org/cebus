module.exports = {
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    chalk: 'chalk/source/index.js',
    '#ansi-styles': 'chalk/source/vendor/ansi-styles/index.js',
    '#supports-color': 'chalk/source/vendor/supports-color/index.js',
  },
  verbose: true,
  collectCoverage: true,

  testMatch: ['<rootDir>/src/**/*.test.ts(x)?'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/lib-commonjs/', '/dist/'],
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: __dirname + '/babel.config.js' }],
  },
};
