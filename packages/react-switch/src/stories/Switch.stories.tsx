import * as React from 'react';
import { Switch } from '../index';
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

export const BasicSwitchExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <Switch />
        <Switch defaultChecked={true} />
      </div>
      <div className={styles.row}>
        <Switch disabled />
        <Switch defaultChecked={true} disabled />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Switch',
  component: Switch,
};
