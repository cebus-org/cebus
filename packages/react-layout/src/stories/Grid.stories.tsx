import * as React from 'react';
import { Grid } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@cebus/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  box: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: tokens.brand,
    width: '100px',
    height: '100px',
  },
  containerBorder: {
    ...shorthands.border('1px', 'solid', tokens.inherit),
  },
  verticalExample: {
    height: '500px',
    ...shorthands.border('1px', 'solid', tokens.inherit),
  },
  smallBorderExample: {
    ...shorthands.border('1px', 'solid', tokens.inherit),
    height: '100px',
  },
  largeBox: {
    backgroundColor: tokens.brand,
    width: '100px',
    height: '100px',
  },
});

export const BasicGridExample = () => {
  const styles = useStyles();

  return (
    <Grid className={styles.containerBorder} contentSize={'100px'}>
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
    </Grid>
  );
};

export default {
  title: 'Components/Grid',
  component: Grid,
};
