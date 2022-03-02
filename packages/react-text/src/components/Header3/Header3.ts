import { createText } from '../../utils/index';
import { tokens } from '@pongo-ui/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles({
  root: {
    opacity: tokens.header3,
  },
});

export const Header3: FunctionComponent<TextWrapperProps> = createText(
  { as: 'h4', font: 'base', size: 500, weight: 'light' },
  useStyles,
  'Header3',
);
