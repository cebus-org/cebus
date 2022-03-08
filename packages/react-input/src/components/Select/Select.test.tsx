import React from 'react';
import { Select } from './Select';
import { Option } from '../Option';
import { SelectProps } from './Select.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Select', () => {
  isConformant({
    Component: Select as React.FunctionComponent<SelectProps>,
    displayName: 'Select',
    disabledTests: ['make-styles-overrides-win'],
  });

  it('renders a basic Select', () => {
    const renderedComponent = render(<Select />);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a basic Select with an option', () => {
    const renderedComponent = render(
      <Select>
        <Option value="test">Test</Option>
      </Select>,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a basic Select with an option and Header', () => {
    // This is checked to ensure it doesn't attempt to generate an item for anything other than an Option
    const renderedComponent = render(
      <Select>
        <h1>This isa test</h1>
        <Option value="test">Test</Option>
      </Select>,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a Select contentBefore and contentAfter', () => {
    const renderedComponent = render(
      <Select contentBefore="hello" contentAfter="test">
        <h1>This isa test</h1>
        <Option value="test">Test</Option>
      </Select>,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a disabled Select and applies prop to native select element', () => {
    const renderedComponent = render(
      <Select contentBefore="hello" contentAfter="test" disabled>
        <h1>This isa test</h1>
        <Option value="test">Test</Option>
      </Select>,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
