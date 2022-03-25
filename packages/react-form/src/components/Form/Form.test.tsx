import React from 'react';
import { Form } from './Form';
import { FormProps } from './Form.types';
import { isConformant } from '../../common/isConformant';
import { render, RenderResult, fireEvent } from '@testing-library/react';

describe('Form', () => {
  isConformant({
    Component: Form as React.FunctionComponent<FormProps>,
    displayName: 'Form',
  });
});
