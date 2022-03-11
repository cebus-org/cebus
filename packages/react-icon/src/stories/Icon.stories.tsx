import * as React from 'react';
import { LogoIcon } from '../index';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('5px'),
  },
});

export const BasicIconExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <LogoIcon />
    </div>
  );
};

export const SizeIconExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <LogoIcon size="small" />
      <LogoIcon size="medium" />
      <LogoIcon size="large" />
    </div>
  );
};

export const ColorIconExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <LogoIcon />
      <LogoIcon color="inherit" />
      <LogoIcon color="brand" />
      <LogoIcon color="secondary" />
      <LogoIcon color="success" />
      <LogoIcon color="danger" />
      <LogoIcon color="social" />
      <LogoIcon color="warning" />
      <LogoIcon color="info" />
    </div>
  );
};

export const DisabledIconExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <LogoIcon disabled />
      <LogoIcon color="inherit" disabled />
      <LogoIcon color="brand" disabled />
      <LogoIcon color="secondary" disabled />
      <LogoIcon color="success" disabled />
      <LogoIcon color="danger" disabled />
      <LogoIcon color="social" disabled />
      <LogoIcon color="warning" disabled />
      <LogoIcon color="info" disabled />
    </div>
  );
};

export default {
  title: 'Components/Icon',
  component: LogoIcon,
};
