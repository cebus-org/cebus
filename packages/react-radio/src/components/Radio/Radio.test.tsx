import React from 'react';
import { Radio } from './Radio';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('Radio', () => {
  isConformant({
    Component: Radio,
    displayName: 'Radio',
    primarySlot: 'input',
  });

  it('renders correctly', () => {
    const result = render(<Radio value="2" label="hello" />);
    expect(result.container).toMatchSnapshot();
  });
});
