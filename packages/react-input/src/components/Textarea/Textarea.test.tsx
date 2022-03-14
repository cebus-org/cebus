import React from 'react';
import { Textarea } from './Textarea';
import { TextareaProps } from './Textarea.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Textarea', () => {
  isConformant({
    Component: Textarea as React.FunctionComponent<TextareaProps>,
    displayName: 'Input',
    disabledTests: ['component-has-root-ref', 'make-styles-overrides-win'],
  });

  it('renders a basic Textarea', () => {
    const renderedComponent = render(<Textarea />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a danger Textarea', () => {
    const renderedComponent = render(<Textarea danger />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a disabled Textarea', () => {
    const renderedComponent = render(<Textarea disabled />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
