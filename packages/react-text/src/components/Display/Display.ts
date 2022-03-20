import { createText } from '../../utils/index';
import { tokens } from '@pongo-ui/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles({
  root: {
    opacity: tokens.display,
  },
});

export const Display: FunctionComponent<TextWrapperProps> = createText(
  { as: 'h1', font: 'base', size: 1000, weight: 'bold' },
  useStyles,
  'Display',
);
