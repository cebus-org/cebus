import React from 'react';
import { Menu } from './Menu';
import type { MenuProps } from '@fluentui/react-menu';
import { isConformant } from '../../common/isConformant';
import { MenuTrigger } from '../MenuTrigger/index';
import { MenuList } from '../MenuList/index';
import { MenuItem } from '../MenuItem/index';
import { MenuPopover } from '../MenuPopover/index';

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
    requiredProps: {
      children: [
        <MenuTrigger key="trigger">
          <button>MenuTrigger</button>
        </MenuTrigger>,
        <MenuPopover key="popover">
          <MenuList>
            <MenuItem>Item</MenuItem>
          </MenuList>
        </MenuPopover>,
      ],
    },
  });
});
