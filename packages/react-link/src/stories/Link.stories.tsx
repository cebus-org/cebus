import * as React from 'react';
import { Link } from '../index';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});

export const BasicLinkExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Link>Basic</Link>
      <Link disabled>Basic</Link>
    </div>
  );
};

export default {
  title: 'Components/Link',
  component: Link,
};
