import { select } from '@storybook/addon-knobs';

const selectorLabel = 'Direction';

const options = [
  { label: 'LTR', dir: 'ltr' },
  { label: 'RTL', dir: 'rtl' },
];

export const useDirection = (): { label: string; dir: string } => {
  const dirLabel = options.map(option => ({ label: option.label }));
  const { label } = select(selectorLabel, dirLabel, dirLabel[0] as any);
  const { dir } = options.find(pair => pair.label === label) || { dir: 'ltr' };
  return { label, dir };
};
