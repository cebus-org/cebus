import React from 'react';
import { Toolbar } from './ToolbarButton';
import { ToolbarProps } from './ToolbarButton.types';
import { isConformant } from '../../common/isConformant';

describe('Toolbar', () => {
  isConformant({
    Component: Toolbar as React.FunctionComponent<ToolbarProps>,
    displayName: 'Toolbar',
  });
});
