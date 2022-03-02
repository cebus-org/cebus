import { themeGenerator } from '@pongo-ui/react-theme-generator';
import type { ColorTokens } from '../../types';

export const webDarkTokens: ColorTokens = themeGenerator({
  canvasColor: '#202020',
  semanticColors: {
    inherit: '#b2b2b2 ',
    brand: '#4695ff',
    secondary: '#586bd9',
    success: '#278536',
    danger: '#de3309',
    social: '#1ba1fb',
    warning: '#f18e21',
    info: '#1da8b5',
  },
});
