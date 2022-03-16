import * as React from 'react';
import {
  useAccordionHeaderContextValues_unstable,
  useAccordionHeader_unstable,
  renderAccordionHeader_unstable,
} from '@fluentui/react-accordion';
import { useAccordionHeaderStyles } from './useAccordionHeaderStyles';
import type { AccordionHeaderProps } from './AccordionHeader.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The AccordionItem component is used to show and hide nested information.
 */
export const AccordionHeader: ForwardRefComponent<AccordionHeaderProps> = React.forwardRef((props, ref) => {
  const state = useAccordionHeader_unstable(props, ref);

  const contextValues = useAccordionHeaderContextValues_unstable(state);

  useAccordionHeaderStyles(state);

  return renderAccordionHeader_unstable(state, contextValues);
});

AccordionHeader.displayName = 'AccordionHeader';
