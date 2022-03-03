import * as React from 'react';
import { Card } from './Card';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Card', () => {
  isConformant({
    Component: Card,
    displayName: 'Card',
  });

  it('renders a basic Card', () => {
    const renderedComponent = render(<Card>This is a card.</Card>);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
