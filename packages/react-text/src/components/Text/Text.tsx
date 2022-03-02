import * as React from 'react';
import { useText } from './useText';
import { renderText } from './renderText';
import { useTextStyles } from './useTextStyles';
import type { TextProps } from './Text.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Text control standardizes font styling across a webpage.
 */
export const Text: ForwardRefComponent<TextProps> = React.forwardRef((props, ref) => {
  const state = useText(props, ref);

  useTextStyles(state);

  return renderText(state);
});
Text.displayName = 'Text';
