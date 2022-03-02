import { createText } from '../../utils/index';
import { tokens } from '@pongo-ui/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles({
  root: {
    opacity: tokens.header2,
  },
});

export const Header2: FunctionComponent<TextWrapperProps> = createText(
  { as: 'h3', font: 'base', size: 600, weight: 'medium' },
  useStyles,
  'Header2',
);
