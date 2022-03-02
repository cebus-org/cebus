import { createText } from '../../utils/index';
import { tokens } from '@pongo-ui/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles({
  root: {
    opacity: tokens.title,
  },
});

export const Title: FunctionComponent<TextWrapperProps> = createText(
  { as: 'h1', font: 'base', size: 800, weight: 'bold' },
  useStyles,
  'Title',
);
