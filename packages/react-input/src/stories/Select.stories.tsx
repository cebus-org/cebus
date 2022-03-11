import * as React from 'react';
import { Select, Option } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { DateTimeIcon } from '@pongo-ui/react-icon';
import type { SelectProps } from '../index';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    ...shorthands.gap('10px'),
  },
});

export const BasicSelectExample = () => {
  const styles = useStyles();
  const [checkedValues, setCheckedValues] = React.useState(['segoe']);

  const onCheckedValueChange: SelectProps['onCheckedValueChange'] = (ev, { checkedItems }) => {
    setCheckedValues(checkedItems);
  };

  return (
    <div className={styles.root}>
      <Select value={checkedValues} label="test" onCheckedValueChange={onCheckedValueChange}>
        <Option value="segoe">Segoe</Option>
        <Option value="calibri">Calibri</Option>
        <Option value="arial">Arial</Option>
      </Select>
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
    </div>
  );
};

export const SelectContentExample = () => {
  const styles = useStyles();
  const [checkedValues, setCheckedValues] = React.useState(['segoe']);

  const onCheckedValueChange: SelectProps['onCheckedValueChange'] = (ev, { checkedItems }) => {
    setCheckedValues(checkedItems);
  };

  return (
    <div className={styles.root}>
      <Select
        value={checkedValues}
        label="test"
        size="large"
        onCheckedValueChange={onCheckedValueChange}
        contentBefore={<DateTimeIcon size="smaller" />}
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
        contentBefore={<DateTimeIcon size="smaller" />}
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
        contentBefore={<DateTimeIcon size="smaller" />}
      >
        <Option value="segoe">Segoe</Option>
        <Option value="calibri">Calibri</Option>
        <Option value="arial">Arial</Option>
      </Select>
    </div>
  );
};

export default {
  title: 'Components/Select',
  component: Select,
};
