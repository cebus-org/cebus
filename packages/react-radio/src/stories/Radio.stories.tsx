import * as React from 'react';
import { Radio, RadioGroup } from '../index';
import type { RadioGroupProps } from '../index';

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

export const HorizontalStackedRadioExample = () => {
  return (
    <RadioGroup defaultValue="1" layout="horizontalStacked">
      <Radio value="1" label="Value 1" />
      <Radio value="2" label="Value 2" disabled />
      <Radio value="3" label="Value 3" />
    </RadioGroup>
  );
};

export const LabelPositionRadioExample = () => {
  return (
    <>
      <RadioGroup defaultValue="1">
        <Radio value="1" label="Value 1" labelPosition="below" />
        <Radio value="2" label="Value 2" labelPosition="below" />
      </RadioGroup>
    </>
  );
};

export const ControlledRadioExample = () => {
  const [value, setValue] = React.useState('1');

  const onChange: RadioGroupProps['onChange'] = (ev, data) => {
    setValue(data.value);
  };

  return (
    <>
      <RadioGroup value={value} onChange={onChange}>
        <Radio value="1" label="Value 1" labelPosition="below" />
        <Radio value="2" label="Value 2" labelPosition="below" />
      </RadioGroup>
    </>
  );
};

export default {
  title: 'Components/Radio',
  component: Radio,
};
