import * as React from 'react';
import { Select, Option } from '../index';
import { Stack } from '@cebus/react-layout';
import { DateTimeIcon } from '@cebus/react-icon';
import type { SelectProps } from '../index';

export const BasicSelectExample = () => {
  const [checkedValues, setCheckedValues] = React.useState(['segoe']);

  const onCheckedValueChange: SelectProps['onCheckedValueChange'] = (ev, { checkedItems }) => {
    setCheckedValues(checkedItems);
  };

  return (
    <Stack vertical>
      <Select value={checkedValues} label="test" onCheckedValueChange={onCheckedValueChange}>
        <Option value="segoe">Segoe</Option>
        <Option value="calibri">Calibri</Option>
        <Option value="arial">Arial</Option>
      </Select>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <Select value={checkedValues} onCheckedValueChange={onCheckedValueChange} label="test" appearance="standard">
        <Option value="segoe">Segoe</Option>
        <Option value="calibri">Calibri</Option>
        <Option value="arial">Arial</Option>
      </Select>
      <Select value={checkedValues} onCheckedValueChange={onCheckedValueChange} label="test" appearance="filled">
        <Option value="segoe">Segoe</Option>
        <Option value="calibri">Calibri</Option>
        <Option value="arial">Arial</Option>
      </Select>
    </Stack>
  );
};

export const SelectContentExample = () => {
  const [checkedValues, setCheckedValues] = React.useState(['segoe']);

  const onCheckedValueChange: SelectProps['onCheckedValueChange'] = (ev, { checkedItems }) => {
    setCheckedValues(checkedItems);
  };

  return (
    <Stack vertical>
      <Select
        value={checkedValues}
        label="test"
        size="small"
        onCheckedValueChange={onCheckedValueChange}
        contentBefore={<DateTimeIcon />}
      >
        <Option value="segoe">Segoe</Option>
        <Option value="calibri">Calibri</Option>
        <Option value="arial">Arial</Option>
      </Select>

      <Select
        value={checkedValues}
        onCheckedValueChange={onCheckedValueChange}
        label="test"
        appearance="standard"
        size="large"
        contentBefore={<DateTimeIcon />}
      >
        <Option value="segoe">Segoe</Option>
        <Option value="calibri">Calibri</Option>
        <Option value="arial">Arial</Option>
      </Select>
      <Select
        value={checkedValues}
        onCheckedValueChange={onCheckedValueChange}
        label="test"
        appearance="filled"
        size="large"
        contentBefore={<DateTimeIcon />}
      >
        <Option value="segoe">Segoe</Option>
        <Option value="calibri">Calibri</Option>
        <Option value="arial">Arial</Option>
      </Select>
    </Stack>
  );
};

export default {
  title: 'Components/Select',
  component: Select,
};
