import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import { useFormState } from './useFormState';
import type { FormProps, FormState } from './Form.types';

export const useForm = (props: FormProps, ref: React.Ref<HTMLElement>): FormState => {
  const {} = props;

  const state: FormState = {
    components: {
      root: 'form',
    },
    root: getNativeElementProps('form', {
      ref,
      ...props,
    }),
  };

  useFormState(state);

  return state;
};
