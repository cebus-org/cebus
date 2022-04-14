import {
  backgroundCSSVariable,
  hoverCSSVariable,
  pressedCSSVariable,
  foregroundHoverCSSVariable,
  foregroundPressedCSSVariable,
} from './useButtonStyles';
import { tokens } from '@cebus/react-theme';
import type { ButtonState } from './Button.types';

export const useButtonState = (state: ButtonState): ButtonState => {
  const { color, disabled } = state;

  const CSSVariables = {
    [backgroundCSSVariable]: (tokens as any)[color + (disabled ? 'Disabled' : '')],
    [hoverCSSVariable]: (tokens as any)[color + 'Hover'],
    [pressedCSSVariable]: (tokens as any)[color + 'Pressed'],
    [foregroundHoverCSSVariable]: (tokens as any)[color + 'ForegroundHover'],
    [foregroundPressedCSSVariable]: (tokens as any)[color + 'ForegroundPressed'],
  };

  // Apply CSS variables to root.
  state.root.style = {
    ...CSSVariables,
    ...state.root.style,
  };

  return state;
};
