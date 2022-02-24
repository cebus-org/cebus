import {
  backgroundCSSVariable,
  hoverCSSVariable,
  pressedCSSVariable,
  foregroundHoverCSSVariable,
  foregroundPressedCSSVariable,
} from './useButtonStyles';
import { tokens } from '@pongo-ui/react-theme';
import type { ButtonState } from './Button.types';

export const useButtonState = (state: ButtonState): ButtonState => {
  const { disabled } = state;

  const CSSVariables = {
    [backgroundCSSVariable]: (tokens as any)[state.color! + (disabled ? 'Disabled' : '')],
    [hoverCSSVariable]: (tokens as any)[state.color! + 'Hover'],
    [pressedCSSVariable]: (tokens as any)[state.color! + 'Pressed'],
    [foregroundHoverCSSVariable]: (tokens as any)[state.color! + 'ForegroundHover'],
    [foregroundPressedCSSVariable]: (tokens as any)[state.color! + 'ForegroundPressed'],
  };

  // Apply CSS variables to root.
  state.root.style = {
    ...CSSVariables,
    ...state.root.style,
  };

  return state;
};
