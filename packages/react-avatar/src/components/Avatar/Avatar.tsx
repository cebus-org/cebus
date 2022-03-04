import * as React from 'react';
import { useAvatar } from './useAvatar';
import { renderAvatar } from './renderAvatar';
import { useAvatarStyles } from './useAvatarStyles';
import type { AvatarProps } from './Avatar.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * The Avatar provides a recognizable icon for a user.
 */
export const Avatar: ForwardRefComponent<AvatarProps> = React.forwardRef((props, ref) => {
  const state = useAvatar(props, ref);

  useAvatarStyles(state);

  return renderAvatar(state);
});
Avatar.displayName = 'Avatar';
