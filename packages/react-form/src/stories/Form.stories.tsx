import * as React from 'react';
import { Form, FormLabel } from '../index';

export const BasicFormExample = () => {
  return (
    <Form>
      <FormLabel label="Test" disabled required>
        <input />
      </FormLabel>
      <FormLabel label="Test" disabled required vertical>
        <input />
      </FormLabel>
      <FormLabel label="Test" disabled required position="end">
        <input />
      </FormLabel>
      <FormLabel label="Test" disabled required position="end" vertical>
        <input />
      </FormLabel>
    </Form>
  );
};

export default {
  title: 'Components/Form',
  component: Form,
};
