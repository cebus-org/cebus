import { createText } from '../../utils/index';
import { tokens } from '@pongo-ui/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextProps } from '../Text';

const useStyles = makeStyles({
  root: {
    opacity: tokens.header2,
  },
});

export const Header2: FunctionComponent<TextProps> = createText(
  { as: 'h3', font: 'base', size: 600, weight: 'medium' },
  useStyles,
  'Header2',
);
