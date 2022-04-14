import { createText } from '../../utils/index';
import { tokens } from '@cebus/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextProps } from '../Text';

const useStyles = makeStyles({
  root: {
    opacity: tokens.title,
  },
});

export const Title: FunctionComponent<TextProps> = createText(
  { as: 'h1', font: 'base', size: 800, weight: 'bold' },
  useStyles,
  'Title',
);
