import * as React from 'react';
import { renderText, useText, useTextStyles } from '../Text';
import type { TextProps } from '../Text';
import { mergeClasses } from '@griffel/react';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

export function createText(
  defaultProps: TextProps,
  useStyles: () => Record<any, string>,
  displayName: string,
): React.FunctionComponent<TextProps> {
  const TextComponent: ForwardRefComponent<TextProps> = React.forwardRef((props, ref) => {
    const mergedProps = { ...defaultProps, ...props };
    const styles = useStyles();
    const state = useText(mergedProps as TextProps, ref);

    useTextStyles(state);

    state.root.className = mergeClasses(state.root.className, styles.root, mergedProps.className);

    return renderText(state);
  });
  TextComponent.displayName = displayName;

  return TextComponent;
}
