import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TextState } from './Text.types';
import { tokens } from '@pongo-ui/react-theme';

const useRootStyles = makeStyles({
  root: {
    textAlign: 'start',
    display: 'inline',
    whiteSpace: 'normal',
    ...shorthands.overflow('visible'),
    ...shorthands.margin('0px'),
    textOverflow: 'clip',
  },
  base: {
    fontFamily: tokens.fontFamilyBase,
  },
  monospace: {
    fontFamily: tokens.monospaceFont,
  },
  thin: {
    fontWeight: tokens.thin as any,
  },
  light: {
    fontWeight: tokens.light as any,
  },
  regular: {
    fontWeight: tokens.regular as any,
  },
  medium: {
    fontWeight: tokens.medium as any,
  },
  bold: {
    fontWeight: tokens.bold as any,
  },
  black: {
    fontWeight: tokens.black as any,
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  strikethrough: {
    textDecorationLine: 'line-through',
  },
  strikethroughUnderline: {
    textDecorationLine: 'line-through underline',
  },
  100: {
    fontSize: tokens.fontSize100,
    lineHeight: tokens.lineHeight100,
  },
  200: {
    fontSize: tokens.fontSize200,
    lineHeight: tokens.lineHeight200,
  },
  300: {
    fontSize: tokens.fontSize300,
    lineHeight: tokens.lineHeight300,
  },
  400: {
    fontSize: tokens.fontSize400,
    lineHeight: tokens.lineHeight400,
  },
  500: {
    fontSize: tokens.fontSize500,
    lineHeight: tokens.lineHeight500,
  },
  600: {
    fontSize: tokens.fontSize600,
    lineHeight: tokens.lineHeight600,
  },
  700: {
    fontSize: tokens.fontSize700,
    lineHeight: tokens.lineHeight700,
  },
  800: {
    fontSize: tokens.fontSize800,
    lineHeight: tokens.lineHeight800,
  },
  900: {
    fontSize: tokens.fontSize900,
    lineHeight: tokens.lineHeight900,
  },
  1000: {
    fontSize: tokens.fontSize1000,
    lineHeight: tokens.lineHeight1000,
  },
  whiteColor: {
    color: 'white',
  },
  inheritColor: {
    color: tokens.inherit,
  },
  baseColor: {
    color: tokens.textColor,
  },
  brandColor: {
    color: tokens.brand,
  },
  secondaryColor: {
    color: tokens.secondary,
  },
  successColor: {
    color: tokens.success,
  },
  dangerColor: {
    color: tokens.danger,
  },
  socialColor: {
    color: tokens.social,
  },
  warningColor: {
    color: tokens.warning,
  },
  infoColor: {
    color: tokens.info,
  },
});

export const useTextStyles = (state: TextState): TextState => {
  const styles = useRootStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles[state.font!],
    styles[state.weight!],
    styles[state.size!],
    state.italic && styles.italic,
    state.underline && styles.underline,
    state.strikethrough && styles.strikethrough,
    state.underline && state.strikethrough && styles.strikethroughUnderline,
    styles[(state.color! + 'Color') as 'baseColor'],
    state.root.className,
  );
  return state;
};
