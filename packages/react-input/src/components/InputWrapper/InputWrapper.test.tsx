import React from 'react';
import { InputWrapper } from './InputWrapper';
import { InputWrapperProps } from './InputWrapper.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('InputWrapper', () => {
  isConformant({
    Component: InputWrapper as React.FunctionComponent<InputWrapperProps>,
    displayName: 'InputWrapper',
    disabledTests: ['make-styles-overrides-win'],
  });

  it('renders a basic InputWrapper', () => {
    const renderedComponent = render(<InputWrapper />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a basic InputWrapper danger', () => {
    const renderedComponent = render(<InputWrapper danger />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a basic InputWrapper disabled', () => {
    const renderedComponent = render(<InputWrapper disabled />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
