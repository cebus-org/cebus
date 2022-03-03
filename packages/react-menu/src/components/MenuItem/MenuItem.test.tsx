import React from 'react';
import { MenuItem } from './MenuItem';
import type { MenuItemProps } from '@fluentui/react-menu';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('MenuItem', () => {
  isConformant({
    Component: MenuItem as React.FunctionComponent<MenuItemProps>,
    displayName: 'MenuItem',
    disabledTests: ['component-handles-classname', 'make-styles-overrides-win'],
  });

  it('renders correctly', () => {
    const result = render(<MenuItem>Test Item</MenuItem>);
    expect(result.container).toMatchSnapshot();
  });

  it('renders secondaryContent correctly', () => {
    const result = render(<MenuItem secondaryContent="test">Test Item</MenuItem>);
    expect(result.container).toMatchSnapshot();
  });

  it('renders disabled correctly', () => {
    const result = render(<MenuItem disabled>Test Item</MenuItem>);
    expect(result.container).toMatchSnapshot();
  });
});
