import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { AvatarState, AvatarSlots } from './Avatar.types';

export const renderAvatar = (state: AvatarState) => {
  const { slots, slotProps } = getSlots<AvatarSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {slots.initials && <slots.initials {...slotProps.initials} />}
      {slots.image && <slots.image {...slotProps.image} />}
    </slots.root>
  );
};
