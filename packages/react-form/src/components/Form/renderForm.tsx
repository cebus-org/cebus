import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { FormState, FormSlots } from './Form.types';

export const renderForm = (state: FormState) => {
  const { slots, slotProps } = getSlots<FormSlots>(state);

  return <slots.root {...slotProps.root} />;
};
