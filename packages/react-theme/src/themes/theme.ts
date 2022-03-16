import { webLightTokens, webDarkTokens } from './web';
import { fonts } from './font';
import { borderRadiusTokens } from './borderRadius';
import { layoutTokens } from './layout';
import { motion } from './motion';

export const webLightTheme = {
  ...webLightTokens,
  ...fonts,
  ...borderRadiusTokens,
  ...motion,
  ...layoutTokens,
};

export const webDarkTheme = {
  ...webDarkTokens,
  ...fonts,
  ...borderRadiusTokens,
  ...motion,
  ...layoutTokens,
};
