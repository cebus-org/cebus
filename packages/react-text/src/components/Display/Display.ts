import { createText } from '../../utils/index';
import { tokens } from '@cebus/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextProps } from '../Text';

const useStyles = makeStyles({
  root: {
    opacity: tokens.display,
  },
});

export const Display: FunctionComponent<TextProps> = createText(
  { as: 'h1', font: 'base', size: 1000, weight: 'bold' },
  useStyles,
  'Display',
);
