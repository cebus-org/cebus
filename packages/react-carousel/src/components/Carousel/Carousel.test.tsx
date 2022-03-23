import * as React from 'react';
import { Carousel } from './Carousel';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Carousel', () => {
  isConformant({
    Component: Carousel,
    displayName: 'Carousel',
  });

  describe('Snapshot tests', () => {
    it('renders a basic Avatar', () => {
      const result = render(<Carousel />);

      expect(result.baseElement).toMatchSnapshot();
    });
  });
});
