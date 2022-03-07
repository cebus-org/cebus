import React from 'react';
import { InputWrapper } from './InputWrapper';
import { InputWrapperProps } from './InputWrapper.types';
import { isConformant } from '../../common/isConformant';

describe('InputWrapper', () => {
  isConformant({
    Component: InputWrapper as React.FunctionComponent<InputWrapperProps>,
    displayName: 'InputWrapper',
  });
});
