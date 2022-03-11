import * as React from 'react';
import { Input } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { CalendarIcon } from '@pongo-ui/react-icon';
import type { InputProps } from '../index';

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

export const BasicInputExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input label="Name" placeholder="Enter your name" appearance="outline" />
      <Input label="User Name" placeholder="Enter your user name" appearance="standard" />
      <Input label="Password" placeholder="Enter your password" appearance="filled" />
    </div>
  );
};

export const ControlledInputExample = () => {
  const [value, setValue] = React.useState('hello');
  const styles = useStyles();

  const onChange: InputProps['onChange'] = (ev, data) => {
    setValue(data.value);
  };

  return (
    <div className={styles.root}>
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export const InputContentExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input
        label="test"
        placeholder="Enter your name"
        appearance="outline"
        contentAfter={<CalendarIcon size="smaller" />}
      />
      <Input
        label="test"
        placeholder="Enter your name"
        appearance="outline"
        contentBefore={<CalendarIcon size="smaller" />}
      />
    </div>
  );
};

export const InputDangerExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <Input label="Name" placeholder="Enter your name" appearance="outline" danger />
        <Input label="Name" placeholder="Enter your name" appearance="outline" danger disabled />
        <Input
          label="Name"
          placeholder="Enter your name"
          appearance="outline"
          danger
          disabled
          contentBefore={<CalendarIcon size="small" />}
        />
      </div>
      <div className={styles.row}>
        <Input label="Name" placeholder="Enter your name" appearance="standard" danger />
        <Input placeholder="Enter your name" appearance="standard" danger disabled />
        <Input
          placeholder="Enter your name"
          appearance="standard"
          danger
          disabled
          contentBefore={<CalendarIcon size="small" />}
        />
      </div>
      <div className={styles.row}>
        <Input placeholder="Enter your name" appearance="filled" danger />
        <Input placeholder="Enter your name" appearance="filled" danger disabled />
        <Input
          placeholder="Enter your name"
          appearance="filled"
          danger
          disabled
          contentBefore={<CalendarIcon size="small" />}
        />
      </div>
    </div>
  );
};

export const InputSizeExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <Input size="small" placeholder="Enter your name" appearance="outline" helperText="Enter your full name" />
        <Input size="small" placeholder="Enter your name" appearance="standard" helperText="Enter your full name" />
        <Input size="small" placeholder="Enter your name" appearance="filled" helperText="Enter your full name" />
      </div>
      <div className={styles.row}>
        <Input size="medium" placeholder="Enter your name" appearance="outline" helperText="Enter your full name" />
        <Input size="medium" placeholder="Enter your name" appearance="standard" helperText="Enter your full name" />
        <Input size="medium" placeholder="Enter your name" appearance="filled" helperText="Enter your full name" />
      </div>
      <div className={styles.row}>
        <Input size="large" placeholder="Enter your name" appearance="outline" helperText="Enter your full name" />
        <Input size="large" placeholder="Enter your name" appearance="standard" helperText="Enter your full name" />
        <Input size="large" placeholder="Enter your name" appearance="filled" helperText="Enter your full name" />
      </div>
    </div>
  );
};

export const InputTypeExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input type="number" />
      <Input type="time" />
      <Input type="month" />
      <Input type="password" />
    </div>
  );
};

export const InputDisabledExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input defaultValue="hello" disabled />
      <Input defaultValue="hello" appearance="filled" disabled />
      <Input defaultValue="hello" appearance="standard" disabled />
    </div>
  );
};

export const InputHelperTextExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Input label="Standard" helperText="This is an input with helper text" />
      <Input label="Disabled" helperText="This is an input with helper text" disabled />
      <Input label="Danger" helperText="This is an input with helper text" danger />
      <Input label="Danger Disabled" helperText="This is an input with helper text" danger disabled />
    </div>
  );
};

export default {
  title: 'Components/Input',
  component: Input,
};
