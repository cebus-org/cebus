import * as React from 'react';
import { Avatar } from '../index';
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
});

export const BasicAvatarExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Avatar />
      <Avatar name="Caleb Z" color="brand" />
      <Avatar name="Caleb Zear" shape="square" />
    </div>
  );
};

export const AvatarSizeExample = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Avatar name="George Steve" size="small" />
      <Avatar name="George Steve" size="medium" />
      <Avatar name="George Steve" size="large" />
      <Avatar name="George Steve" size="extra-large" />
    </div>
  );
};

export const AvatarImageExample = () => {
  const styles = useStyles();

  const imageUrl = 'https://th.bing.com/th/id/OIP.R3IAG0Z7SAzTV56Xuvs1LwHaFj?pid=ImgDet&rs=1';
  const imageAltText = 'A cat that looks like a burrito.';

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} />
        <Avatar name="test" shape="square" image={{ src: imageUrl, alt: imageAltText }} />
      </div>
      <div className={styles.row}>
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} size="small" />
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} size="medium" />
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} size="large" />
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} size="extra-large" />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Avatar',
  component: Avatar,
};
