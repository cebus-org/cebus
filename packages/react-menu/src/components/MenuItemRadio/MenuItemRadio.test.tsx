import React from 'react';
import { MenuItemRadio } from './MenuItemRadio';
import type { MenuItemRadioProps } from '@fluentui/react-menu';
import { isConformant } from '../../common/isConformant';

describe('MenuItemRadio', () => {
  isConformant({
    Component: MenuItemRadio as React.FunctionComponent<MenuItemRadioProps>,
    displayName: 'MenuItemRadio',
    disabledTests: ['component-handles-classname', 'make-styles-overrides-win'],
  });
});
