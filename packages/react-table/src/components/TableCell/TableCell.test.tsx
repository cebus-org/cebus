import * as React from 'react';
import { TableCell } from './TableCell';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('TableCell', () => {
  isConformant({
    Component: TableCell,
    displayName: 'TableCell',
  });

  it('renders a basic Table', () => {
    const renderedComponent = render(<TableCell />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
