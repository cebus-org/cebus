import { makeStyles, mergeClasses } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';
import type { LabelState } from '@fluentui/react-label';

const useRootStyles = makeStyles({
  root: {
    fontFamily: tokens.fontFamilyBase,
  },

  disabled: {
    color: tokens.inheritDisabled,
  },

  enabled: {
    color: tokens.textColor,
  },

  small: {
    fontSize: tokens.fontSize200,
    lineHeight: tokens.lineHeight200,
  },

  medium: {
    fontSize: tokens.fontSize300,
    lineHeight: tokens.lineHeight300,
  },

  large: {
    fontSize: tokens.fontSize400,
    lineHeight: tokens.lineHeight400,
    fontWeight: tokens.medium,
  },

  strong: {
    fontWeight: tokens.bold,
  },
});

const useRequiredStyles = makeStyles({
  required: {
    paddingLeft: '4px',
  },
  enabled: {
    color: tokens.danger,
  },
  disabled: {
    color: tokens.dangerDisabled,
  },
});

export const useLabelStyles = (state: LabelState): LabelState => {
  const rootStyles = useRootStyles();
  const requiredStyles = useRequiredStyles();

  state.root.className = mergeClasses(
    rootStyles.root,
    state.disabled ? rootStyles.disabled : rootStyles.enabled,
    rootStyles[state.size],
    state.strong && rootStyles.strong,
    state.root.className,
  );

  if (state.required) {
    state.required.className = mergeClasses(
      requiredStyles.required,
      state.disabled ? requiredStyles.disabled : requiredStyles.enabled,
      state.required.className,
    );
  }

  return state;
};
