import React from 'react';
import { Radio } from './Radio';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('Radio', () => {
  isConformant({
    Component: Radio,
    displayName: 'Radio',
  });

  it('renders correctly', () => {
    const result = render(<Radio>Test</Radio>);
    expect(result.container).toMatchSnapshot();
  });
});
