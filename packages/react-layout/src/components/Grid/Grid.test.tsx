import React from 'react';
import { Grid } from './Grid';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Grid', () => {
  isConformant({
    Component: Grid,
    displayName: 'Grid',
  });

  it('renders a basic Grid', () => {
    const renderedComponent = render(<Grid contentSize="0px" />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
