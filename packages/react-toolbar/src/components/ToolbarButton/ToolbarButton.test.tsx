import React from 'react';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarButtonProps } from './ToolbarButton.types';
import { isConformant } from '../../common/isConformant';

describe('ToolbarButton', () => {
  isConformant({
    Component: ToolbarButton as React.FunctionComponent<ToolbarButtonProps>,
    displayName: 'ToolbarButton',
  });
});
