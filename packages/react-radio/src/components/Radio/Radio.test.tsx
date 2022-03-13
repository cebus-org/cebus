import React from 'react';
import { RadioGroup } from './Radio';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('RadioGroup', () => {
  isConformant({
    Component: RadioGroup,
    displayName: 'RadioGroup',
  });

  it('renders correctly', () => {
    const result = render(<RadioGroup>Test</RadioGroup>);
    expect(result.container).toMatchSnapshot();
  });
});
