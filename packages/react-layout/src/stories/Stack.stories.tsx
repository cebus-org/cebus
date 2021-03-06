import * as React from 'react';
import { Stack, Container } from '../index';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@cebus/react-theme';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    backgroundColor: tokens.brand,
    width: '10px',
    height: '10px',
  },
  containerBorder: {
    ...shorthands.border('1px', 'solid', tokens.inherit),
  },
});

export const BasicStackExample = () => {
  const styles = useStyles();

  return (
    <Stack className={styles.containerBorder}>
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
    </Stack>
  );
};

export const ContainerStackExample = () => {
  const styles = useStyles();

  return (
    <Container className={styles.containerBorder}>
      <Stack grow style={{ background: 'red' }}>
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
      </Stack>
    </Container>
  );
};

export const StackVerticalExample = () => {
  const styles = useStyles();

  return (
    <Stack vertical>
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
      <div className={styles.box} />
    </Stack>
  );
};

export const StackDividerExample = () => {
  const styles = useStyles();

  return (
    <>
      <Stack vertical divider={<div className={styles.box} />} inline>
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
      </Stack>
      <Stack divider={<div className={styles.box} />} inline>
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
      </Stack>
    </>
  );
};

export default {
  title: 'Components/Stack',
  component: Stack,
};
