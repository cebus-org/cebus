import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { TextState } from './Text.types';
import { tokens } from '@cebus/react-theme';

const textColor = `--cebus-text-color`;

const useRootStyles = makeStyles({
  root: {
    display: 'inline',
    whiteSpace: 'normal',
    ...shorthands.overflow('visible'),
    ...shorthands.margin('0px'),
  },
  base: {
    fontFamily: tokens.fontFamilyBase,
  },
  monospace: {
    fontFamily: tokens.monospaceFont,
  },
  thin: {
    fontWeight: tokens.thin,
  },
  light: {
    fontWeight: tokens.light,
  },
  regular: {
    fontWeight: tokens.regular,
  },
  medium: {
    fontWeight: tokens.medium,
  },
  bold: {
    fontWeight: tokens.bold,
  },
  black: {
    fontWeight: tokens.black,
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
  semanticColor: {
    color: `var(${textColor})`,
  },
  center: {
    textAlign: 'center',
  },
  end: {
    textAlign: 'end',
  },
  start: {
    textAlign: 'start',
  },
  justify: {
    textAlign: 'justify',
  },
  nowrap: {
    whiteSpace: 'nowrap',
    ...shorthands.overflow('hidden'),
  },
  truncate: {
    textOverflow: 'ellipsis',
  },
});

export const useTextStyles = (state: TextState): TextState => {
  const styles = useRootStyles();

  state.root.className = mergeClasses(
    styles.root,
    styles[state.font!],
    styles[state.weight!],
    styles[state.size!],
    styles[state.align!],
    state.italic && styles.italic,
    state.truncate && styles.truncate,
    state.nowrap && styles.nowrap,
    state.underline && styles.underline,
    state.strikethrough && styles.strikethrough,
    state.underline && state.strikethrough && styles.strikethroughUnderline,
    state.color === 'white' ? styles.whiteColor : state.color !== 'base' ? styles.semanticColor : styles.base,
    state.root.className,
  );

  const CSSVariables = {
    [textColor]: (tokens as any)[state.color + (state.disabled ? 'Disabled' : '')],
  };

  state.root.style = {
    ...CSSVariables,
    ...state.root.style,
  };

  return state;
};
