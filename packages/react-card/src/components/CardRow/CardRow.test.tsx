import * as React from 'react';
import { CardRow } from './CardRow';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('CardRow', () => {
  isConformant({
    Component: CardRow,
    displayName: 'CardRow',
  });

  it('renders a basic CardRow', () => {
    const renderedComponent = render(<CardRow>This is a test</CardRow>);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
