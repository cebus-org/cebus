import React from 'react';
import { FormControl } from './FormControl';
import { FormControlProps } from './FormControl.types';
import { isConformant } from '../../common/isConformant';

describe('FormControl', () => {
  isConformant({
    Component: FormControl as React.FunctionComponent<FormControlProps>,
    displayName: 'FormControl',
  });
});
