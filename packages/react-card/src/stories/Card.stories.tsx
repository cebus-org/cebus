import * as React from 'react';
import { Card, CardRow, CardHeader, CardMedia } from '../index';
import { Body, Header1 } from '@pongo-ui/react-text';
import { Button } from '@pongo-ui/react-button';
import { makeStyles } from '@griffel/react';
import { Stack } from '@pongo-ui/react-layout';

const useStyles = makeStyles({
  card: {
    maxWidth: '300px',
  },
});

export const BasicCardExample = () => {
  const styles = useStyles();

  return (
    <Stack vertical inline>
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
    </Stack>
  );
};

export const InteractiveCardExample = () => {
  const styles = useStyles();

  const onClick = () => console.log('test');

  return (
    <Stack vertical inline>
      <Card className={styles.card} onClick={onClick}>
        <CardHeader header={<Body weight="bold">Press me</Body>} />
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Body>
      </Card>
      <Card className={styles.card} onClick={onClick} disabled>
        <CardHeader header={<Body weight="bold">Press me</Body>} />
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Body>
      </Card>
    </Stack>
  );
};
export default {
  title: 'Components/Card',
  component: Card,
};
