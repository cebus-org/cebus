import * as React from 'react';
import { AccordionHeader } from './AccordionHeader';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('AccordionHeader', () => {
  isConformant({
    Component: AccordionHeader,
    displayName: 'AccordionHeader',
  });

  describe('Snapshot tests', () => {
    it('renders a basic AccordionHeader', () => {
      const result = render(<AccordionHeader>Test</AccordionHeader>);

      expect(result.baseElement).toMatchSnapshot();
    });
  });
});
