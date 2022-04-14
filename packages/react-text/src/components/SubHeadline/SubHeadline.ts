import { createText } from '../../utils/index';
import { tokens } from '@cebus/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextProps } from '../Text';

const useStyles = makeStyles({
  root: {
    opacity: tokens.subHeadline,
  },
});

export const SubHeadline: FunctionComponent<TextProps> = createText(
  { as: 'p', font: 'base', size: 500, weight: 'medium' },
  useStyles,
  'SubHeadline',
);
