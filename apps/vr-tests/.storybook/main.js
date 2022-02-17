const root = require('../../../.storybook/main');

const testedComponentPackages = [
  'react-avatar',
  'react-button',
  'react-card',
  'react-checkbox',
  'react-divider',
  'react-icon',
  'react-label',
  'react-link',
  'react-rating',
  'react-switch',
  'react-slider',
  'react-text',
  'react-tabs',
  'react-textfield',
  'react-tooltip',
];

const componentStoryPaths = testedComponentPackages.map(
  packageName => '../../../packages/pongo-ui/packages/' + packageName + '/src/stories/*.stories.@(js|jsx|ts|tsx)',
);

module.exports = {
  stories: [...componentStoryPaths],

  babel: {},
  typescript: {
    reactDocgen: false,
  },
  addons: [...root.addons],
};
