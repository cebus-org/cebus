const babelJestMd = require('babel-jest');
const babelJest = babelJestMd.__esModule ? babelJestMd.default : babelJestMd;

const { babelConfig } = require('./babel.config');

module.exports = babelJest.createTransformer({ ...babelConfig });
