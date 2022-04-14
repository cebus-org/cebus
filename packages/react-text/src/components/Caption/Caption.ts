import { createText } from '../../utils/index';
import { tokens } from '@cebus/react-theme';
import { makeStyles } from '@griffel/react';
import type { FunctionComponent } from 'react';
import type { TextProps } from '../Text';

const useStyles = makeStyles({
  root: {
    opacity: tokens.caption,
  },
});

export const Caption: FunctionComponent<TextProps> = createText(
  { italic: true, font: 'base', size: 200, weight: 'light' },
  useStyles,
  'Caption',
);
