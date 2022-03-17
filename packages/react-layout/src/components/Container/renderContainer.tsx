import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { ContainerState, ContainerSlots } from './Container.types';

export const renderContainer = (state: ContainerState) => {
  const { slots, slotProps } = getSlots<ContainerSlots>(state);

  return <slots.root {...slotProps.root} />;
};
