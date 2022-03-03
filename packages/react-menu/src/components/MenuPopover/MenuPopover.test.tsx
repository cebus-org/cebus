import React from 'react';
import { MenuPopover } from './MenuPopover';
import type { MenuPopoverProps } from '@fluentui/react-menu';
import { isConformant } from '../../common/isConformant';

describe('MenuPopover', () => {
  isConformant({
    Component: MenuPopover as React.FunctionComponent<MenuPopoverProps>,
    displayName: 'MenuPopover',
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
