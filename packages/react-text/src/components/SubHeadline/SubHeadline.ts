import { createText } from '../../utils/index';
import { tokens } from '@pongo-ui/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles({
  root: {
    opacity: tokens.subHeadline,
  },
});

export const SubHeadline: FunctionComponent<TextWrapperProps> = createText(
  { as: 'p', font: 'base', size: 400, weight: 'bold' },
  useStyles,
  'SubHeadline',
);
