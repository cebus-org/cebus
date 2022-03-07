import React from 'react';
import { Input } from './Input';
import { InputProps } from './Input.types';
import { isConformant } from '../../common/isConformant';

describe('Input', () => {
  isConformant({
    Component: Input as React.FunctionComponent<InputProps>,
    displayName: 'Input',
  });
});
