import * as React from 'react';
import { Avatar } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicAvatarExample = () => {
  return (
    <Stack>
      <Avatar />
      <Avatar name="Caleb Z" color="brand" />
      <Avatar name="Caleb Zear" shape="square" />
    </Stack>
  );
};

export const AvatarSizeExample = () => {
  return (
    <Stack>
      <Avatar name="George Steve" size="small" />
      <Avatar name="George Steve" size="medium" />
      <Avatar name="George Steve" size="large" />
      <Avatar name="George Steve" size="extra-large" />
    </Stack>
  );
};

export const AvatarImageExample = () => {
  const imageUrl = 'https://th.bing.com/th/id/OIP.R3IAG0Z7SAzTV56Xuvs1LwHaFj?pid=ImgDet&rs=1';
  const imageAltText = 'A cat that looks like a burrito.';

  return (
    <Stack vertical>
      <Stack>
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} />
        <Avatar name="test" shape="square" image={{ src: imageUrl, alt: imageAltText }} />
      </Stack>
      <Stack>
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} size="small" />
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} size="medium" />
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} size="large" />
        <Avatar name="test" image={{ src: imageUrl, alt: imageAltText }} size="extra-large" />
      </Stack>
    </Stack>
  );
};

export default {
  title: 'Components/Avatar',
  component: Avatar,
};
