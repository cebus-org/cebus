import * as React from 'react';
import { Container } from '../index';
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
    width: '10px',
    height: '10px',
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

export const BasicContainerExample = () => {
  const styles = useStyles();

  return (
    <Container className={styles.containerBorder}>
      <div className={styles.box} />
      <div className={styles.box} />
    </Container>
  );
};

export const RelaxedContainerExample = () => {
  const styles = useStyles();

  return (
    <Container className={styles.containerBorder} appearance="relaxed">
      <div className={styles.box} />
      <div className={styles.box} />
    </Container>
  );
};

export const WrapContainerExample = () => {
  const styles = useStyles();

  return (
    <Container className={styles.smallBorderExample} wrap appearance="relaxed">
      <div className={styles.largeBox} />
      <div className={styles.largeBox} />
    </Container>
  );
};

export const HorizontalAlignmentContainerExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Container className={styles.containerBorder} horizontalAlignment="start">
        <div className={styles.box} />
        <div className={styles.box} />
      </Container>
      <Container className={styles.containerBorder} horizontalAlignment="center">
        <div className={styles.box} />
        <div className={styles.box} />
      </Container>
      <Container className={styles.containerBorder} horizontalAlignment="end">
        <div className={styles.box} />
        <div className={styles.box} />
      </Container>
    </div>
  );
};

export const VerticalAlignmentContainerExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Container className={styles.verticalExample} verticalAlignment="start">
        <div className={styles.box} />
        <div className={styles.box} />
      </Container>
      <Container className={styles.verticalExample} verticalAlignment="center">
        <div className={styles.box} />
        <div className={styles.box} />
      </Container>
      <Container className={styles.verticalExample} verticalAlignment="end">
        <div className={styles.box} />
        <div className={styles.box} />
      </Container>
    </div>
  );
};

export default {
  title: 'Components/Container',
  component: Container,
};
