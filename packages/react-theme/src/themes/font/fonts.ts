import type { Fonts } from '../../types';
import { fontFamilyTokens, fontOpacityTokens, fontSizeTokens, fontLineHeightTokens, fontWeightTokens } from './index';

export const fonts: Fonts = {
  ...fontFamilyTokens,
  ...fontOpacityTokens,
  ...fontSizeTokens,
  ...fontLineHeightTokens,
  ...fontWeightTokens,
};
