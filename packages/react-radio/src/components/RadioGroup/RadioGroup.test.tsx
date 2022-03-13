import React from 'react';
import { RadioGroup } from './RadioGroup';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('RadioGroup', () => {
  isConformant({
    Component: RadioGroup,
    displayName: 'RadioGroup',
    disabledTests: ['consistent-callback-args'],
  });

  it('renders correctly', () => {
    const result = render(<RadioGroup>Test</RadioGroup>);
    expect(result.container).toMatchSnapshot();
  });
});
