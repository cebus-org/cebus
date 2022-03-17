import React from 'react';
import { Stack } from './Stack';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Input', () => {
  isConformant({
    Component: Stack,
    displayName: 'Stack',
  });

  it('renders a basic Stack', () => {
    const renderedComponent = render(<Stack />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a divider Stack', () => {
    const renderedComponent = render(
      <Stack divider={' - '}>
        <p>Hello</p>
        <p>Hello</p>
      </Stack>,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a divider Stack with once child', () => {
    const renderedComponent = render(
      <Stack divider={' - '}>
        <p>Hello</p>
      </Stack>,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a vertical Stack', () => {
    const renderedComponent = render(<Stack vertical />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('Correctly applies horizontal/vertical alignment to Stack (vertical)', () => {
    const renderedComponent = render(<Stack vertical horizontalAlignment="center" verticalAlignment="center" />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('Correctly applies horizontal/vertical alignment to Stack (horizontal)', () => {
    const renderedComponent = render(<Stack horizontalAlignment="center" verticalAlignment="center" />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
