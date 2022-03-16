import * as React from 'react';
import { AccordionItem } from './AccordionItem';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('AccordionItem', () => {
  isConformant({
    Component: AccordionItem,
    displayName: 'AccordionItem',
  });

  describe('Snapshot tests', () => {
    it('renders a basic AccordionItem', () => {
      const result = render(<AccordionItem />);

      expect(result.baseElement).toMatchSnapshot();
    });
  });
});
