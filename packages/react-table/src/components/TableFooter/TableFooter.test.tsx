import * as React from 'react';
import { TableFooter } from './TableFooter';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('TableFooter', () => {
  isConformant({
    Component: TableFooter,
    displayName: 'TableFooter',
  });

  it('renders a basic Table', () => {
    const renderedComponent = render(<TableFooter />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
