import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';

import type { FormProps, FormState } from './Form.types';

export const useForm = (props: FormProps, ref: React.Ref<HTMLElement>): FormState => {
  const { appearance = 'focused' } = props;

  const state: FormState = {
    appearance,
    components: {
      root: 'form',
    },
    root: getNativeElementProps('form', {
      ref,
      ...props,
    }),
  };

  return state;
};
