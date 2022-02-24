import { webLightTokens, webDarkTokens } from './web/index';
import type { Theme } from '../types';
import { fonts } from './font/index';

export const webLightTheme: Theme = {
  ...webLightTokens,
  ...fonts,
};

export const webDarkTheme: Theme = {
  ...webDarkTokens,
  ...fonts,
};
