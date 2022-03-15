import { webLightTokens, webDarkTokens } from './web';
import { fonts } from './font';
import { borderRadiusTokens } from './borderRadius';
import { motion } from './motion';

export const webLightTheme = {
  ...webLightTokens,
  ...fonts,
  ...borderRadiusTokens,
  ...motion,
};

export const webDarkTheme = {
  ...webDarkTokens,
  ...fonts,
  ...borderRadiusTokens,
  ...motion,
};
