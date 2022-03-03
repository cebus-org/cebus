import React from 'react';
import { MenuList } from './MenuList';
import type { MenuListProps } from '@fluentui/react-menu';
import { isConformant } from '../../common/isConformant';

describe('MenuList', () => {
  isConformant({
    Component: MenuList as React.FunctionComponent<MenuListProps>,
    displayName: 'MenuList',
    disabledTests: ['consistent-callback-args'],
  });
});
