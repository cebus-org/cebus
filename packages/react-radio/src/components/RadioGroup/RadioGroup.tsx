import * as React from 'react';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

import { useRadioGroup_unstable, renderRadioGroup_unstable } from '@fluentui/react-radio';
import { useRadioGroupStyles } from './useRadioGroupStyles';
import type { RadioGroupProps } from './RadioGroup.types';

/**
 * A RadioGroup component presents a set of options where only one option can be selected.
 */
export const RadioGroup: ForwardRefComponent<RadioGroupProps> = React.forwardRef((props, ref) => {
  const state = useRadioGroup_unstable(props, ref);

  useRadioGroupStyles(state);

  return renderRadioGroup_unstable(state);
});

RadioGroup.displayName = 'RadioGroup';
