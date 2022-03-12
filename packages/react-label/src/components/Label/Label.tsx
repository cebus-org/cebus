import * as React from 'react';
import { useLabel_unstable, renderLabel_unstable } from '@fluentui/react-label';
import { useLabelStyles } from './useLabelStyles';
import type { LabelProps } from '@fluentui/react-label';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Label control provides a title to a form component.
 */
export const Label: ForwardRefComponent<LabelProps> = React.forwardRef((props, ref) => {
  const state = useLabel_unstable(props, ref);

  useLabelStyles(state);

  return renderLabel_unstable(state);
});
Label.displayName = 'Label';
