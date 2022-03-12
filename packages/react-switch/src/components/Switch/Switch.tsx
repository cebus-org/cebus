import * as React from 'react';
import { useSwitch } from './useSwitch';
import { useSwitchStyles } from './useSwitchStyles';
import { renderSwitch } from './renderSwitch';
import type { SwitchProps } from './Switch.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Switch allows users to toggle a value between an on and off state.
 */
export const Switch: ForwardRefComponent<SwitchProps> = React.forwardRef((props, ref) => {
  const state = useSwitch(props, ref);

  useSwitchStyles(state);

  return renderSwitch(state);
});
Switch.displayName = 'Switch';
