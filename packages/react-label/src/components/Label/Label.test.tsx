import React from 'react';
import { Label } from './Label';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Label', () => {
  isConformant({
    Component: Label,
    displayName: 'Label',
  });

  it('renders a basic label', () => {
    const renderedComponent = render(<Label>This is a test</Label>);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
