import * as React from 'react';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { renderRadio_unstable, useRadio_unstable } from '@fluentui/react-radio';
import type { RadioProps } from './Radio.types';
import { useRadioStyles } from './useRadioStyles';

/**
 * Radio component is a wrapper for a radio button with a label.
 */
export const Radio: ForwardRefComponent<RadioProps> = React.forwardRef((props, ref) => {
  const state = useRadio_unstable(props, ref);

  useRadioStyles(state);

  return renderRadio_unstable(state);
});
Radio.displayName = 'Radio';
