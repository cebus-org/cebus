import React from 'react';
import { Toolbar } from './Toolbar';
import { ToolbarProps } from './Toolbar.types';
import { isConformant } from '../../common/isConformant';

describe('Toolbar', () => {
  isConformant({
    Component: Toolbar as React.FunctionComponent<ToolbarProps>,
    displayName: 'Toolbar',
  });
});
