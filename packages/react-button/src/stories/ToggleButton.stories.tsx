import * as React from 'react';
import { ToggleButton } from '../index';
// import { Header2 } from '@pongoai/react-text';
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
      {/* <Header2>Rate your order</Header2> */}
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

export const ColorToggleButtonExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <ToggleButton color="inherit" shape="circular">
          Inherit
        </ToggleButton>
        <ToggleButton defaultChecked color="inherit" shape="circular">
          Inherit
        </ToggleButton>
        <ToggleButton disabled color="inherit" shape="circular">
          Inherit
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="inherit" shape="circular">
          Inherit
        </ToggleButton>
      </div>
      <div className={styles.row}>
        <ToggleButton color="brand" shape="circular">
          Brand
        </ToggleButton>
        <ToggleButton defaultChecked color="brand" shape="circular">
          Brand
        </ToggleButton>
        <ToggleButton disabled color="brand" shape="circular">
          Brand
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="brand" shape="circular">
          Brand
        </ToggleButton>
      </div>
      <div className={styles.row}>
        <ToggleButton color="secondary" shape="circular">
          Secondary
        </ToggleButton>
        <ToggleButton defaultChecked color="secondary" shape="circular">
          Secondary
        </ToggleButton>
        <ToggleButton disabled color="secondary" shape="circular">
          Secondary
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="secondary" shape="circular">
          Secondary
        </ToggleButton>
      </div>
      <div className={styles.row}>
        <ToggleButton color="success" shape="circular">
          Success
        </ToggleButton>
        <ToggleButton defaultChecked color="success" shape="circular">
          Success
        </ToggleButton>
        <ToggleButton disabled color="success" shape="circular">
          Success
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="success" shape="circular">
          Success
        </ToggleButton>
      </div>
      <div className={styles.row}>
        <ToggleButton color="danger" shape="circular">
          Danger
        </ToggleButton>
        <ToggleButton defaultChecked color="danger" shape="circular">
          Danger
        </ToggleButton>
        <ToggleButton disabled color="danger" shape="circular">
          Danger
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="danger" shape="circular">
          Danger
        </ToggleButton>
      </div>
      <div className={styles.row}>
        <ToggleButton color="warning" shape="circular">
          Warning
        </ToggleButton>
        <ToggleButton defaultChecked color="warning" shape="circular">
          Warning
        </ToggleButton>
        <ToggleButton disabled color="warning" shape="circular">
          Warning
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="warning" shape="circular">
          Warning
        </ToggleButton>
      </div>
      <div className={styles.row}>
        <ToggleButton color="info" shape="circular">
          Info
        </ToggleButton>
        <ToggleButton defaultChecked color="info" shape="circular">
          Info
        </ToggleButton>
        <ToggleButton disabled color="info" shape="circular">
          Info
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="info" shape="circular">
          Info
        </ToggleButton>
      </div>
    </div>
  );
};

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
};
