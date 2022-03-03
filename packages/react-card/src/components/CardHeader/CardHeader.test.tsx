import * as React from 'react';
import { CardHeader } from './CardHeader';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('CardHeader', () => {
  isConformant({
    Component: CardHeader,
    displayName: 'CardHeader',
  });

  it('renders a basic CardHeader', () => {
    const renderedComponent = render(
      <CardHeader avatar={<div>CZ</div>} header={'This is a header'} description={'This is a subHeadline'} />,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
