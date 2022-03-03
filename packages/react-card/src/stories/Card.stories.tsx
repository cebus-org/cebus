import * as React from 'react';
import { Card, CardRow, CardHeader, CardMedia } from '../index';
import { Body, Header1 } from '@pongo-ui/react-text';
import { Button } from '@pongo-ui/react-button';
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
  card: {
    maxWidth: '300px',
  },
});

export const BasicCardExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Header1>Elevate</Header1>
      <Card className={styles.card}>
        <CardHeader
          avatar={<div>CZ</div>}
          header={<Body weight="bold">This is a header</Body>}
          description={<Body>This is a subHeadline</Body>}
        />
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Body>
        <CardMedia logo={<Body style={{ color: 'white' }}>Logo</Body>}>
          <img src="https://th.bing.com/th/id/OIP.s_y0WF4OVKNpLln1IVtRXgHaEK?pid=ImgDet&rs=1" />
        </CardMedia>
        <CardRow>
          <Button size="small" color="brand" appearance="primary">
            Press me
          </Button>
          <Button size="small" color="brand">
            Press me
          </Button>
        </CardRow>
      </Card>
      <Header1>Outline</Header1>
      <Card className={styles.card} appearance="outline">
        <CardHeader
          avatar={<div>CZ</div>}
          header={<Body weight="bold">This is a header</Body>}
          description={<Body>This is a subHeadline</Body>}
        />
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Body>
        <CardMedia logo={<Body style={{ color: 'white' }}>Logo</Body>}>
          <img src="https://th.bing.com/th/id/OIP.s_y0WF4OVKNpLln1IVtRXgHaEK?pid=ImgDet&rs=1" />
        </CardMedia>
        <CardRow>
          <Button size="small" color="brand" appearance="primary">
            Press me
          </Button>
          <Button size="small" color="brand">
            Press me
          </Button>
        </CardRow>
      </Card>
    </div>
  );
};

export const InteractiveCardExample = () => {
  const styles = useStyles();

  const onCardClick = () => console.log('test');

  return (
    <div className={styles.root}>
      <Card className={styles.card} onClick={onCardClick}>
        <CardHeader header={<Body weight="bold">Press me</Body>} />
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Body>
      </Card>
      <Card className={styles.card} onClick={onCardClick} disabled>
        <CardHeader header={<Body weight="bold">Press me</Body>} />
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Body>
      </Card>
    </div>
  );
};
export default {
  title: 'Components/Card',
  component: Card,
};
