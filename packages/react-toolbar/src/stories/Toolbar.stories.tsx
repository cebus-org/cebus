import * as React from 'react';
import { Toolbar } from '../index';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});

export const BasicToolbarExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Toolbar />
    </div>
  );
};

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
};
