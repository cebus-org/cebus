import * as React from 'react';
import { TableHeader } from './TableHeader';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('TableHeader', () => {
  isConformant({
    Component: TableHeader,
    displayName: 'TableHeader',
  });

  it('renders a basic Table', () => {
    const renderedComponent = render(<TableHeader />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
