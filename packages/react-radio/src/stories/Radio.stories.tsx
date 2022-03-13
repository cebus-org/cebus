import * as React from 'react';
import { Radio, RadioGroup } from '../index';

export const BasicRadioExample = () => {
  return (
    <RadioGroup defaultValue="1">
      <Radio value="1" label="Value 1" />
      <Radio value="2" label="Value 2" />
      <Radio value="3" label="Value 3" />
    </RadioGroup>
  );
};

export const DisabledRadioExample = () => {
  return (
    <RadioGroup defaultValue="1">
      <Radio value="1" label="Value 1" />
      <Radio value="2" label="Value 2" disabled />
      <Radio value="3" label="Value 3" />
    </RadioGroup>
  );
};

export const HorizontalRadioExample = () => {
  return (
    <RadioGroup defaultValue="1" layout="horizontal">
      <Radio value="1" label="Value 1" />
      <Radio value="2" label="Value 2" disabled />
      <Radio value="3" label="Value 3" />
    </RadioGroup>
  );
};

export default {
  title: 'Components/Radio',
  component: Radio,
};
