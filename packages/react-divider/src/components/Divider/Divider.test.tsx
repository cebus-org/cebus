import React from 'react';
import { Divider } from './Divider';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';
import { resetIdsForTests } from '@fluentui/react-utilities';

describe('Divider', () => {
  isConformant({
    Component: Divider,
    displayName: 'Divider',
  });

  beforeEach(() => {
    resetIdsForTests();
  });

  it('renders a divider', () => {
    const result = render(<Divider />);

    expect(result.baseElement).toMatchSnapshot();
  });

  it('renders a divider with content', () => {
    const result = render(<Divider>This is a test</Divider>);

    expect(result.baseElement).toMatchSnapshot();
  });
});
