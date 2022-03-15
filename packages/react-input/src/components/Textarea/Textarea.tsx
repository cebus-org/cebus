import * as React from 'react';
import { useTextarea } from './useTextarea';
import { renderTextarea } from './renderTextarea';
import { useTextareaStyles } from './useTextareaStyles';
import type { TextareaProps } from './Textarea.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 *  The Textarea allows for users to write and edit text on multiple lines.
 */
export const Textarea: ForwardRefComponent<TextareaProps> = React.forwardRef((props, ref) => {
  const state = useTextarea(props, ref);

  useTextareaStyles(state);

  return renderTextarea(state);
});
Textarea.displayName = 'Textarea';
