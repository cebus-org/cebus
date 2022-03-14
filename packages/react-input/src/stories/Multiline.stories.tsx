import * as React from 'react';
import { Textarea } from '../index';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});

export const BasicTextareaExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Textarea label="test" resizable />
    </div>
  );
};

export default {
  title: 'Components/Textarea',
  component: Textarea,
};
