import * as React from 'react';
import { getNativeElementProps, resolveShorthand, useId } from '@fluentui/react-utilities';
import { useAvatarState } from './useAvatarState';
import type { AvatarProps, AvatarState } from './Avatar.types';

export const useAvatar = (props: AvatarProps, ref: React.Ref<HTMLElement>): AvatarState => {
  const { name, color, shape = 'circular', size = 'medium', initials, image } = props;

  const avatarId = useId('avatar-');

  const state: AvatarState = {
    name,
    shape,
    size,
    color,
    components: {
      root: 'span',
      initials: 'span',
      image: 'img',
    },
    root: getNativeElementProps('span', {
      role: 'img',
      id: avatarId,
      ...props,
      ref,
    }),
    image: resolveShorthand(image, {
      required: false,
      defaultProps: {
        alt: '',
        role: 'presentation',
        'aria-hidden': true,
      },
    }),
    initials: resolveShorthand(initials, {
      required: true,
      defaultProps: {
        'aria-hidden': true,
      },
    }),
  };

  useAvatarState(state);

  return state;
};
