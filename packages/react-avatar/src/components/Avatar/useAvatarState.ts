import * as React from 'react';
import type { AvatarState } from './Avatar.types';
import { useMergedEventCallbacks } from '@fluentui/react-utilities';
import { getInitials } from '@fluentui/react-avatar';
import { stringToColor } from '../../utils/index';
import { useFluent } from '@fluentui/react-shared-contexts';
import { tokens } from '@cebus/react-theme';
import { calculateTransparentColor } from '@cebus/react-theme-generator';

export const useAvatarState = (state: AvatarState): AvatarState => {
  const [imageHidden, setImageHidden] = React.useState<true | undefined>(undefined);

  const { name, color } = state;
  const { dir } = useFluent();

  const userInitials = name ? getInitials(name, dir === 'rtl') : '?';
  // Darken the generated color to help prevent contrast ratio issues with the white text.
  const avatarGeneratedColor = name ? calculateTransparentColor('#000000', stringToColor(name), 0.3) : tokens.inherit;

  const imageOnErrorCallback = useMergedEventCallbacks(state.image?.onError, () => setImageHidden(true));

  const imageOnLoadCallback = useMergedEventCallbacks(state.image?.onLoad, () => setImageHidden(undefined));

  const rootStyles = {
    background: color ? tokens[color] : avatarGeneratedColor,
  };

  // Root Props
  state.root.style = { ...rootStyles, ...state.root.style };
  if (!state.root['aria-label'] && !state.root['aria-labelledby'] && name) {
    state.root['aria-label'] = name;
  }

  // Initials Props
  if (state.initials) {
    state.initials.children = userInitials;
  }

  // Image Props
  if (state.image) {
    state.image.hidden = imageHidden;
    state.image.onError = imageOnErrorCallback;
    state.image.onLoad = imageOnLoadCallback;
  }

  return state;
};
