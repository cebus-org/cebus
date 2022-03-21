import * as React from 'react';
import { TableRow } from './TableRow';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('TableRow', () => {
  isConformant({
    Component: TableRow,
    displayName: 'TableRow',
  });

  it('renders a basic Table', () => {
    const renderedComponent = render(<TableRow />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
