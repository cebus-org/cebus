import type { Fonts } from '../../types';
import { fontFamilyTokens } from './fontFamilyTokens';
import { fontOpacityTokens } from './fontOpacityTokens';
import { fontSizeTokens } from './fontSizeTokens';
import { fontLineHeightTokens } from './fontLineHeightTokens';
import { fontWeightTokens } from './fontWeightTokens';

export const fonts: Fonts = {
  ...fontFamilyTokens,
  ...fontOpacityTokens,
  ...fontSizeTokens,
  ...fontLineHeightTokens,
  ...fontWeightTokens,
};
