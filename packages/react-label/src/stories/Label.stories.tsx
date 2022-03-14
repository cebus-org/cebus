import * as React from 'react';
import { Label } from '../index';
import { Header2 } from '@pongo-ui/react-text';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('5px'),
  },
  row: {
    display: 'inline-flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
});
export const BasicLabelExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header2>Basic Example</Header2>
      <div className={styles.row}>
        <Label htmlFor="text">Basic</Label>
        <input id="text" />
      </div>
      <div className={styles.row}>
        <Label htmlFor="range" required>
          Required
        </Label>
        <input id="range" type="range" />
      </div>
      <div className={styles.row}>
        <Label htmlFor="check" disabled>
          Disabled
        </Label>
        <input id="check" type="checkbox" disabled />
      </div>
      <div className={styles.row}>
        <Label disabled required htmlFor="button">
          Disabled Required
        </Label>
        <button id="button" disabled>
          This is a button
        </button>
      </div>
      <Header2>Text Size Example</Header2>
      <div className={styles.row}>
        <Label strong>Strong</Label>
        <Label size="small">Small</Label>
        <Label size="medium">Medium</Label>
        <Label size="large">Large</Label>
        <Label strong size="small">
          Strong Small
        </Label>
        <Label strong size="medium">
          Strong Medium
        </Label>
        <Label strong size="large">
          Strong Large
        </Label>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Label',
  component: Label,
};
