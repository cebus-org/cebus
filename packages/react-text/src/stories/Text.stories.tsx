import * as React from 'react';
import { Text, Body, Caption, Display, Header1, Header2, Header3, SubHeadline, Title } from '../index';
import { makeStyles } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'row',
  },
});

export const BasicTextExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Text size={1000}>Header</Text>
      <div className={styles.row}>
        <Text>Basic</Text>
        <Text italic>Italic</Text>
        <Text weight="bold">Weight</Text>
        <Text font="monospace">monospace</Text>
      </div>
      <div className={styles.row}>
        <Text strikethrough>Strikethrough</Text>
        <Text underline strikethrough>
          Underline
        </Text>
        <Text underline strikethrough>
          Underline Strikethrough
        </Text>
      </div>
      <Display>Display: The quick brown fox jumps over the lazy dog</Display>
      <Title>Title: The quick brown fox jumps over the lazy dog</Title>
      <Header1>Header1: The quick brown fox jumps over the lazy dog</Header1>
      <Header2>Header2: The quick brown fox jumps over the lazy dog</Header2>
      <Header3>Header3: The quick brown fox jumps over the lazy dog</Header3>
      <SubHeadline>SubHeadline: The quick brown fox jumps over the lazy dog</SubHeadline>
      <Body>Body: The quick brown fox jumps over the lazy dog</Body>
      <Caption>Caption: The quick brown fox jumps over the lazy dog</Caption>
    </div>
  );
};

export const ColorTextExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header1 color="base">base: The quick brown fox jumps over the lazy dog</Header1>
      <Header1 color="inherit">inherit: The quick brown fox jumps over the lazy dog</Header1>
      <Header1 color="brand">brand: The quick brown fox jumps over the lazy dog</Header1>
      <Header1 color="secondary">secondary: The quick brown fox jumps over the lazy dog</Header1>
      <Header1 color="success">success: The quick brown fox jumps over the lazy dog</Header1>
      <Header1 color="danger">danger: The quick brown fox jumps over the lazy dog</Header1>
      <Header1 color="social">social: The quick brown fox jumps over the lazy dog</Header1>
      <Header1 color="warning">warning: The quick brown fox jumps over the lazy dog</Header1>
      <Header1 color="info">info: The quick brown fox jumps over the lazy dog</Header1>
    </div>
  );
};

export default {
  title: 'Components/Text',
  component: Text,
};
