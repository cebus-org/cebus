import React from 'react';
import { Option } from './Option';
import { OptionProps } from './Option.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Option', () => {
  isConformant({
    Component: Option as React.FunctionComponent<OptionProps>,
    displayName: 'Option',
    disabledTests: ['make-styles-overrides-win', 'component-handles-classname'],
  });

  it('renders a basic InputWrapper', () => {
    const renderedComponent = render(<Option value="test" />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
