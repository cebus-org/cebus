import * as React from 'react';
import {
  useAccordionHeaderContextValues_unstable,
  useAccordionHeader_unstable,
  renderAccordionHeader_unstable,
} from '@fluentui/react-accordion';
import { useAccordionHeaderStyles } from './useAccordionHeaderStyles';
import type { AccordionHeaderProps } from './AccordionHeader.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { ChevronIcon } from '@pongo-ui/react-icon';

/**
 * The AccordionItem component is used to show and hide nested information.
 */
export const AccordionHeader: ForwardRefComponent<AccordionHeaderProps> = React.forwardRef((props, ref) => {
  const state = useAccordionHeader_unstable(
    {
      // expandIcon: (
      //   <svg width="16" height="16" viewBox="0 0 2048 2048" fill="none" xmlns="http://www.w3.org/2000/svg">
      //     <rect
      //       x="911.207"
      //       y="1394.66"
      //       width="1058.19"
      //       height="160"
      //       rx="80"
      //       transform="rotate(-45 911.207 1394.66)"
      //       fill="black"
      //     />
      //     <rect
      //       x="387.542"
      //       y="646.405"
      //       width="1058.63"
      //       height="160"
      //       rx="80"
      //       transform="rotate(45 387.542 646.405)"
      //       fill="black"
      //     />
      //   </svg>
      // ),
      ...props,
    },
    ref,
  );

  const contextValues = useAccordionHeaderContextValues_unstable(state);

  useAccordionHeaderStyles(state);

  return renderAccordionHeader_unstable(state, contextValues);
});

AccordionHeader.displayName = 'AccordionHeader';
