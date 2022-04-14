import { createText } from '../../utils/index';
import { tokens } from '@cebus/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextProps } from '../Text';

const useStyles = makeStyles({
  root: {
    opacity: tokens.header1,
  },
});

export const Header1: FunctionComponent<TextProps> = createText(
  { as: 'h2', font: 'base', size: 700, weight: 'medium' },
  useStyles,
  'Header1',
);
