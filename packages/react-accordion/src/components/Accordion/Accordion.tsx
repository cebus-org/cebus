import * as React from 'react';
import {
  useAccordion_unstable,
  renderAccordion_unstable,
  useAccordionContextValues_unstable,
} from '@fluentui/react-accordion';
import type { AccordionProps } from './Accordion.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The AccordionItem component is used to show and hide nested information.
 */
export const Accordion: ForwardRefComponent<AccordionProps> = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const state = useAccordion_unstable({ collapsible: true, multiple: true, ...props }, ref);

    const contextValues = useAccordionContextValues_unstable(state);

    return renderAccordion_unstable(state, contextValues);
  },
);

Accordion.displayName = 'Accordion';
