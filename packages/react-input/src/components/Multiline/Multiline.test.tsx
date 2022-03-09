import React from 'react';
import { Multiline } from './Multiline';
import { MultilineProps } from './Multiline.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Multiline', () => {
  isConformant({
    Component: Multiline as React.FunctionComponent<MultilineProps>,
    displayName: 'Input',
    disabledTests: ['component-has-root-ref', 'make-styles-overrides-win'],
  });

  it('renders a basic Multiline', () => {
    const renderedComponent = render(<Multiline />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a danger Multiline', () => {
    const renderedComponent = render(<Multiline danger />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a disabled Multiline', () => {
    const renderedComponent = render(<Multiline disabled />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
