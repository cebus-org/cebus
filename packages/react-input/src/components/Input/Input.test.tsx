import React from 'react';
import { Input } from './Input';
import { InputProps } from './Input.types';
import { isConformant } from '../../common/isConformant';

describe('Input', () => {
  isConformant({
    Component: Input as React.FunctionComponent<InputProps>,
    displayName: 'Input',
    // The root ref is applied to the more relevant input element rather than the border.
    disabledTests: ['component-has-root-ref', 'make-styles-overrides-win'],
  });
});
