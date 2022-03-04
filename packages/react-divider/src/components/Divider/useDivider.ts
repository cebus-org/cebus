import * as React from 'react';
import type { DividerProps, DividerState } from './Divider.types';
import { useDivider_unstable } from '@fluentui/react-divider';

/**
 * Returns the props and state required to render the component
 * @param props - User-provided props to the Divider component.
 * @param ref - User-provided ref to be passed to the Divider component.
 */
export const useDivider = (props: DividerProps, ref: React.Ref<HTMLElement>): DividerState => {
  const { color = 'inherit' } = props;

  const state = useDivider_unstable(props, ref);

  return {
    color,
    ...state,
  };
};
