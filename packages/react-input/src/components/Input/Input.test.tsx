import React from 'react';
import { Input } from './Input';
import { InputProps } from './Input.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Input', () => {
  isConformant({
    Component: Input as React.FunctionComponent<InputProps>,
    displayName: 'Input',
    // The root ref is applied to the more relevant input element rather than the border.
    disabledTests: ['component-has-root-ref', 'make-styles-overrides-win'],
  });

  it('renders a basic input', () => {
    const renderedComponent = render(<Input />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a danger input', () => {
    const renderedComponent = render(<Input danger />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a disabled input', () => {
    const renderedComponent = render(<Input disabled />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a label Input', () => {
    const renderedComponent = render(<Input label="test" />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
