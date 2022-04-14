import * as React from 'react';
import { Form, FormControl } from '../index';
import { Input, Textarea } from '@cebus/react-input';
import { Checkbox } from '@cebus/react-checkbox';
import { Button } from '@cebus/react-button';
import { Switch } from '@cebus/react-switch';

export const BasicFormExample = () => {
  return (
    <Form>
      <FormControl label="Please check this box">
        <Checkbox />
      </FormControl>
      <FormControl>
        <Input label="Enter your email" />
      </FormControl>
      <FormControl label="This is a switch" labelPosition="after">
        <Switch />
      </FormControl>
      <FormControl>
        <Textarea label="This is a textarea" />
      </FormControl>
      <Button type="submit" appearance="primary">
        Submit
      </Button>
    </Form>
  );
};

export const FormPositionExample = () => {
  return (
    <Form appearance="relaxed">
      <FormControl label="Test 2" labelPosition="before">
        <Checkbox />
      </FormControl>
      <FormControl label="Test 3" labelPosition="after">
        <Checkbox />
      </FormControl>
      <FormControl label="Test 4" labelPosition="above">
        <Checkbox />
      </FormControl>
    </Form>
  );
};

export const HelperTextExample = () => {
  return (
    <Form>
      <FormControl helperText="Helper text">
        <Input label="Base" placeholder="Enter your name" />
      </FormControl>
      <FormControl helperText="Helper text" disabled>
        <Input label="Disabled" placeholder="Enter your name" />
      </FormControl>
      <FormControl helperText="Helper text" danger>
        <Input label="Danger" placeholder="Enter your name" />
      </FormControl>
      <FormControl helperText="Helper text" danger disabled>
        <Input label="Danger Disabled" placeholder="Enter your name" />
      </FormControl>
    </Form>
  );
};

export default {
  title: 'Components/Form',
  component: Form,
};
