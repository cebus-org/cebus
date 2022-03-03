import { themeGenerator } from '@pongo-ui/react-theme-generator';
import type { ColorTokens } from '../../types';

export const webDarkTokens: ColorTokens = themeGenerator({
  canvasColor: '#202020',
  semanticColors: {
    inherit: '#828282',
    brand: '#1f72e1',
    secondary: '#586bd9',
    success: '#278536',
    danger: '#de3309',
    social: '#1ba1fb',
    warning: '#f18e21',
    info: '#1da8b5',
  },
});
