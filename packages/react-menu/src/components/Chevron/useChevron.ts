import * as React from 'react';
import type { ChevronProps, ChevronState } from './Chevron.types';
import { useIcon } from '@cebus/react-icon';
import { useChevronState } from './useChevronState';

export const useChevron = (props: ChevronProps, ref: React.Ref<SVGSVGElement>): ChevronState => {
  const { color = 'inherit', open } = props;
  const iconState = useIcon({ color, ...props }, ref);
  const state = { open, ...iconState };

  useChevronState(state);

  return state;
};
