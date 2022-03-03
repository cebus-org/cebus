import * as React from 'react';
import { CardMedia } from './CardMedia';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('CardMedia', () => {
  isConformant({
    Component: CardMedia,
    displayName: 'CardMedia',
  });

  it('renders a basic CardMedia', () => {
    const renderedComponent = render(<CardMedia logo="test" />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
