import type { IconState } from './Icon.types';
import { fillCSSVariable } from './useIconStyles';
import { tokens } from '@pongo-ui/react-theme';

export const useIconState = (state: IconState): IconState => {
  const { color, disabled, viewBox } = state;

  let CSSVariables = {};

  if (color) {
    CSSVariables = { [fillCSSVariable]: (tokens as any)[color + (disabled ? 'Disabled' : '')] };
  } else {
    CSSVariables = { [fillCSSVariable]: disabled ? tokens.inheritDisabled : tokens.textColor };
  }

  state.root.xmlns = 'http://www.w3.org/2000/svg';
  state.root.viewBox = viewBox;
  state.root.focusable = 'false';

  // Apply CSS variables to root.
  state.root.style = {
    ...CSSVariables,
    ...state.root.style,
  };

  return state;
};
