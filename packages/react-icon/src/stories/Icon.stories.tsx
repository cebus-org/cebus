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
      <LogoIcon size="smaller" />
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

export default {
  title: 'Components/Icon',
  component: LogoIcon,
};
