import { webLightTokens, webDarkTokens } from './web/index';
import { fonts } from './font/index';

export const webLightTheme = {
  ...webLightTokens,
  ...fonts,
};

export const webDarkTheme = {
  ...webDarkTokens,
  ...fonts,
};
