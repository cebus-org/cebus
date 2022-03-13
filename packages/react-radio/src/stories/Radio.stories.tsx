import * as React from 'react';
import { Radio, RadioGroup } from '../index';

export const BasicRadioExample = () => {
  return (
    <RadioGroup>
      <Radio value="1" label="Value 1" />
      <Radio value="2" label="Value 2" />
      <Radio value="3" label="Value 3" />
    </RadioGroup>
  );
};

export default {
  title: 'Components/Radio',
  component: Radio,
};
