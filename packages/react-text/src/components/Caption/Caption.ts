import { createText } from '../../utils/index';
import { tokens } from '@pongo-ui/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextWrapperProps } from '../../utils/createText';

const useStyles = makeStyles({
  root: {
    opacity: tokens.caption,
  },
});

export const Caption: FunctionComponent<TextWrapperProps> = createText(
  { italic: true, font: 'base', size: 200, weight: 'light' },
  useStyles,
  'Caption',
);
