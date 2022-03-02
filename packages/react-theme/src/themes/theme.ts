import { webLightTokens, webDarkTokens } from './web';
import { fonts } from './font';
import { borderRadiusTokens } from './borderRadius';

export const webLightTheme = {
  ...webLightTokens,
  ...fonts,
  ...borderRadiusTokens,
};

export const webDarkTheme = {
  ...webDarkTokens,
  ...fonts,
  ...borderRadiusTokens,
};
