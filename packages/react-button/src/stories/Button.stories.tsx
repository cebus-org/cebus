import * as React from 'react';
import { Button } from '../index';
import { Header2 } from '@pongoai/react-text';
import { shorthands, makeStyles } from '@griffel/react';
import { tokens } from '@pongoai/react-theme';

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

const FilterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.5 16C13.9142 16 14.25 16.3358 14.25 16.75C14.25 17.1642 13.9142 17.5 13.5 17.5H10.5C10.0858 17.5 9.75 17.1642 9.75 16.75C9.75 16.3358 10.0858 16 10.5 16H13.5ZM16.5 11C16.9142 11 17.25 11.3358 17.25 11.75C17.25 12.1642 16.9142 12.5 16.5 12.5H7.5C7.08579 12.5 6.75 12.1642 6.75 11.75C6.75 11.3358 7.08579 11 7.5 11H16.5ZM19.5 6C19.9142 6 20.25 6.33579 20.25 6.75C20.25 7.16421 19.9142 7.5 19.5 7.5H4.5C4.08579 7.5 3.75 7.16421 3.75 6.75C3.75 6.33579 4.08579 6 4.5 6H19.5Z"
      fill={tokens.inherit}
    />
  </svg>
);

export const BasicButtonExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Appearance</Header2>
      <div className={styles.row}>
        <Button appearance="outline">Outline</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="transparent">Transparent</Button>
      </div>
      <Header2>Disabled</Header2>
      <div className={styles.row}>
        <Button disabled>Outline</Button>
        <Button appearance="primary" disabled>
          Primary
        </Button>
        <Button appearance="subtle" disabled>
          Subtle
        </Button>
        <Button appearance="transparent" disabled>
          Transparent
        </Button>
      </div>
      <Header2>Shape</Header2>
      <div className={styles.row}>
        <Button shape="rounded">Rounded</Button>
        <Button shape="circular">Circular</Button>
        <Button shape="circle">Circle</Button>
        <Button shape="square">Square</Button>
      </div>
      <Header2>Size</Header2>
      <div className={styles.row}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <Header2>Icon</Header2>
      <div className={styles.row}>
        <Button size="small">
          <FilterIcon /> Filter
        </Button>
        <Button size="medium">
          <FilterIcon /> Filter
        </Button>
        <Button size="large">
          <FilterIcon /> Filter
        </Button>
      </div>
    </div>
  );
};

export const ButtonColorExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Color</Header2>
      <div className={styles.row}>
        <Button color="inherit" appearance="outline">
          Inherit
        </Button>
        <Button color="inherit" appearance="primary">
          Inherit
        </Button>
        <Button color="inherit" appearance="subtle">
          Inherit
        </Button>
        <Button color="inherit" appearance="transparent">
          Inherit
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="brand" appearance="outline">
          Brand
        </Button>
        <Button color="brand" appearance="primary">
          Brand
        </Button>
        <Button color="brand" appearance="subtle">
          Brand
        </Button>
        <Button color="brand" appearance="transparent">
          Brand
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="secondary" appearance="outline">
          Secondary
        </Button>
        <Button color="secondary" appearance="primary">
          Secondary
        </Button>
        <Button color="secondary" appearance="subtle">
          Secondary
        </Button>
        <Button color="secondary" appearance="transparent">
          Secondary
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="success" appearance="outline">
          Success
        </Button>
        <Button color="success" appearance="primary">
          Success
        </Button>
        <Button color="success" appearance="subtle">
          Success
        </Button>
        <Button color="success" appearance="transparent">
          Success
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="error" appearance="outline">
          Error
        </Button>
        <Button color="error" appearance="primary">
          Error
        </Button>
        <Button color="error" appearance="subtle">
          Error
        </Button>
        <Button color="error" appearance="transparent">
          Error
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="social" appearance="outline">
          Social
        </Button>
        <Button color="social" appearance="primary">
          Social
        </Button>
        <Button color="social" appearance="subtle">
          Social
        </Button>
        <Button color="social" appearance="transparent">
          Social
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="warning" appearance="outline">
          Warning
        </Button>
        <Button color="warning" appearance="primary">
          Warning
        </Button>
        <Button color="warning" appearance="subtle">
          Warning
        </Button>
        <Button color="warning" appearance="transparent">
          Warning
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="info" appearance="outline">
          Info
        </Button>
        <Button color="info" appearance="primary">
          Info
        </Button>
        <Button color="info" appearance="subtle">
          Info
        </Button>
        <Button color="info" appearance="transparent">
          Info
        </Button>
      </div>
      <Header2>Disabled</Header2>
      <div className={styles.row}>
        <Button color="inherit" appearance="outline" disabled>
          Inherit
        </Button>
        <Button color="inherit" appearance="primary" disabled>
          Inherit
        </Button>
        <Button color="inherit" appearance="subtle" disabled>
          Inherit
        </Button>
        <Button color="inherit" appearance="transparent" disabled>
          Inherit
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="brand" appearance="outline" disabled>
          Brand
        </Button>
        <Button color="brand" appearance="primary" disabled>
          Brand
        </Button>
        <Button color="brand" appearance="subtle" disabled>
          Brand
        </Button>
        <Button color="brand" appearance="transparent" disabled>
          Brand
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="secondary" appearance="outline" disabled>
          Secondary
        </Button>
        <Button color="secondary" appearance="primary" disabled>
          Secondary
        </Button>
        <Button color="secondary" appearance="subtle" disabled>
          Secondary
        </Button>
        <Button color="secondary" appearance="transparent" disabled>
          Secondary
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="success" appearance="outline" disabled>
          Success
        </Button>
        <Button color="success" appearance="primary" disabled>
          Success
        </Button>
        <Button color="success" appearance="subtle" disabled>
          Success
        </Button>
        <Button color="success" appearance="transparent" disabled>
          Success
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="error" appearance="outline" disabled>
          Error
        </Button>
        <Button color="error" appearance="primary" disabled>
          Error
        </Button>
        <Button color="error" appearance="subtle" disabled>
          Error
        </Button>
        <Button color="error" appearance="transparent" disabled>
          Error
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="social" appearance="outline" disabled>
          Social
        </Button>
        <Button color="social" appearance="primary" disabled>
          Social
        </Button>
        <Button color="social" appearance="subtle" disabled>
          Social
        </Button>
        <Button color="social" appearance="transparent" disabled>
          Social
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="warning" appearance="outline" disabled>
          Warning
        </Button>
        <Button color="warning" appearance="primary" disabled>
          Warning
        </Button>
        <Button color="warning" appearance="subtle" disabled>
          Warning
        </Button>
        <Button color="warning" appearance="transparent" disabled>
          Warning
        </Button>
      </div>
      <div className={styles.row}>
        <Button color="info" appearance="outline" disabled>
          Info
        </Button>
        <Button color="info" appearance="primary" disabled>
          Info
        </Button>
        <Button color="info" appearance="subtle" disabled>
          Info
        </Button>
        <Button color="info" appearance="transparent" disabled>
          Info
        </Button>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button',
  component: Button,
};
