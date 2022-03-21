import * as React from 'react';
import { TableBody } from './TableBody';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('TableBody', () => {
  isConformant({
    Component: TableBody,
    displayName: 'TableBody',
  });

  it('renders a basic Table', () => {
    const renderedComponent = render(<TableBody />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
