import React from 'react';
import { Option } from './Option';
import { OptionProps } from './Option.types';
import { isConformant } from '../../common/isConformant';

describe('Option', () => {
  isConformant({
    Component: Option as React.FunctionComponent<OptionProps>,
    displayName: 'Option',
    disabledTests: ['make-styles-overrides-win'],
  });
});
