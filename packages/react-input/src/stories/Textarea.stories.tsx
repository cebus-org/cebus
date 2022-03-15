import * as React from 'react';
import { Textarea, Input } from '../index';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'row',
    ...shorthands.gap('10px'),
  },
});

export const BasicTextareaExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Textarea label="test" resizable textarea={{ rows: 10 }} />
      <div className={styles.row}>
        <Textarea label="test" resizable />
        <div>
          <Input label="test" />
        </div>
      </div>

      <Textarea appearance="filled" label="test" resizable />
    </div>
  );
};

export default {
  title: 'Components/Textarea',
  component: Textarea,
};
