import * as React from 'react';
import { Textarea } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { DateTimeIcon } from '@pongo-ui/react-icon';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});

export const BasicTextareaExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Textarea label="Outline" />
      <Textarea appearance="standard" label="Standard" />
      <Textarea appearance="filled" label="Filled" />
    </div>
  );
};

export const RowsTextareaExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Textarea rows={10} label="Rows" />
    </div>
  );
};

export const AutoAdjustTextareaExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Textarea autoAdjust label="Auto Adjust" />
    </div>
  );
};

export const SizeTextareaExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Textarea size="small" label="small" />
      <Textarea size="medium" label="medium" />
      <Textarea size="large" label="large" />
    </div>
  );
};

export const DisabledTextareaExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Textarea label="Outline" disabled />
      <Textarea appearance="standard" label="Standard" disabled />
      <Textarea appearance="filled" label="Filled" disabled />
    </div>
  );
};

export const ContentTextareaExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Textarea contentBefore={<DateTimeIcon />} autoAdjust />
      <Textarea contentAfter={<DateTimeIcon />} autoAdjust />
      <Textarea contentAfter={<DateTimeIcon />} contentBefore={<DateTimeIcon />} autoAdjust />
    </div>
  );
};

export default {
  title: 'Components/Textarea',
  component: Textarea,
};
