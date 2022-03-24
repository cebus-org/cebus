import { createText } from '../../utils/index';
import { tokens } from '@pongo-ui/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextProps } from '../Text';

const useStyles = makeStyles({
  root: {
    opacity: tokens.body,
  },
});

export const Body: FunctionComponent<TextProps> = createText(
  { as: 'p', font: 'base', size: 300, weight: 'regular' },
  useStyles,
  'Body',
);
