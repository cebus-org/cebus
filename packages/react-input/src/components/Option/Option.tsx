import * as React from 'react';
import { renderOption } from './renderOption';
import { useOption } from './useOption';
import type { OptionProps } from './Option.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The option component used for children within Select.
 */
export const Option: ForwardRefComponent<OptionProps> = React.forwardRef((props, ref) => {
  const state = useOption(props, ref as any);

  return renderOption(state);
}) as ForwardRefComponent<OptionProps>;

Option.displayName = 'Option';
