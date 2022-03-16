import * as React from 'react';
import { Accordion } from './Accordion';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Accordion', () => {
  isConformant({
    Component: Accordion,
    displayName: 'Accordion',
    disabledTests: ['consistent-callback-args', 'make-styles-overrides-win'],
  });

  describe('Snapshot tests', () => {
    it('renders a basic Accordion', () => {
      const result = render(<Accordion />);

      expect(result.baseElement).toMatchSnapshot();
    });
  });
});
