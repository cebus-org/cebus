const root = require('../../../.storybook/main');

const testedComponentPackages = [
  'react-button',
  'react-link',
  'react-text',
  'react-card',
  'react-menu',
  'react-divider',
  'react-avatar',
  'react-input',
  'react-toolbar',
  'react-icon',
  'react-tabs',
  'react-label',
  'react-switch',
  'react-radio',
  'react-checkbox',
  'react-layout',
  'react-accordion',
  'react-dialog',
  'react-table',
];

const componentStoryPaths = testedComponentPackages.map(
  packageName => '../../../packages/' + packageName + '/src/stories/*.stories.@(js|jsx|ts|tsx)',
);

module.exports = {
  stories: [...componentStoryPaths],

  babel: {},
  typescript: {
    reactDocgen: false,
  },
  addons: [...root.addons],
};
