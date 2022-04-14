import { createText } from '../../utils/index';
import { tokens } from '@cebus/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextProps } from '../Text';

const useStyles = makeStyles({
  root: {
    opacity: tokens.header3,
  },
});

export const Header3: FunctionComponent<TextProps> = createText(
  { as: 'h4', font: 'base', size: 500, weight: 'light' },
  useStyles,
  'Header3',
);
