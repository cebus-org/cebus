import * as React from 'react';
import { Table } from './Table';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('Table', () => {
  isConformant({
    Component: Table,
    displayName: 'Table',
  });

  it('renders a basic Table', () => {
    const renderedComponent = render(<Table label="test" />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
