import { webLightTheme, webDarkTheme } from '@pongo-ui/react-theme';
import { select } from '@storybook/addon-knobs';
import type { Theme } from '@pongo-ui/react-theme';

const themeSelectorLabel = 'Theme';

const themeOptions = [
  { label: 'Web Light', theme: webLightTheme },
  { label: 'Web Dark', theme: webDarkTheme },
];

export const useTheme = (): { label: string; theme: Theme } => {
  const themeLabels = themeOptions.map(option => ({ label: option.label }));
  const { label } = select(themeSelectorLabel, themeLabels, themeLabels[0] as any);
  const { theme } = themeOptions.find(pair => pair.label === label) || { theme: webLightTheme };
  return { label, theme };
};
