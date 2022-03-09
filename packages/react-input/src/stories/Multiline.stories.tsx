import * as React from 'react';
import { Multiline } from '../index';
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

export const BasicMultilineExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Multiline />
    </div>
  );
};

export default {
  title: 'Components/Multiline',
  component: Multiline,
};
