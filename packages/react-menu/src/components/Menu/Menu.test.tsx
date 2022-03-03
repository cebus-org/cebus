import React from 'react';
import { Menu } from './Menu';
import type { MenuProps } from '@fluentui/react-menu';
import { isConformant } from '../../common/isConformant';

describe('Menu', () => {
  isConformant({
    Component: Menu as React.FunctionComponent<MenuProps>,
    displayName: 'Menu',
    disabledTests: [
      'component-handles-ref',
      'component-has-root-ref',
      'component-handles-classname',
      'component-has-static-classname',
      'consistent-callback-args',
      'make-styles-overrides-win',
    ],
  });
});
