import * as React from 'react';
import { AccordionHeader } from './AccordionHeader';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';
import { AccordionHeaderProps } from './AccordionHeader.types';

describe('AccordionHeader', () => {
  isConformant({
    Component: AccordionHeader as React.FunctionComponent<AccordionHeaderProps>,
    displayName: 'AccordionHeader',
    disabledTests: ['component-handles-classname'],
  });

  describe('Snapshot tests', () => {
    it('renders a basic AccordionHeader', () => {
      const result = render(<AccordionHeader>Test</AccordionHeader>);

      expect(result.baseElement).toMatchSnapshot();
    });
  });
});
