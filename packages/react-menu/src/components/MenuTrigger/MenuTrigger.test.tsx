import React from 'react';
import { MenuTrigger } from './MenuTrigger';
import type { MenuTriggerProps } from '@fluentui/react-menu';
import { isConformant } from '../../common/isConformant';

describe('MenuTrigger', () => {
  isConformant({
    Component: MenuTrigger as React.FunctionComponent<MenuTriggerProps>,
    displayName: 'MenuTrigger',
    disabledTests: [
      'component-handles-ref',
      'component-has-root-ref',
      'component-handles-classname',
      'make-styles-overrides-win',
    ],
  });
});
