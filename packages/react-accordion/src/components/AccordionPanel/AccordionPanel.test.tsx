import * as React from 'react';
import { AccordionPanel } from './AccordionPanel';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('AccordionPanel', () => {
  isConformant({
    Component: AccordionPanel,
    displayName: 'AccordionPanel',
  });

  describe('Snapshot tests', () => {
    it('renders a basic AccordionPanel', () => {
      const result = render(<AccordionPanel />);

      expect(result.baseElement).toMatchSnapshot();
    });
  });
});
