import * as React from 'react';
import { ToggleButton } from '../index';
import { Header2 } from '@pongoai/react-text';
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

export const BasicToggleButtonExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Rate your order</Header2>
      <div className={styles.row}>
        <ToggleButton shape="circular">Fits well</ToggleButton>
        <ToggleButton shape="circular">Great color</ToggleButton>
        <ToggleButton shape="circular">Awesome </ToggleButton>
        <ToggleButton shape="circular">Perfect!</ToggleButton>
        <ToggleButton shape="circular" disabled>
          Disabled Button
        </ToggleButton>
      </div>
    </div>
  );
};

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
};
