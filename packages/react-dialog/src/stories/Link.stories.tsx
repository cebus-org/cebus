import * as React from 'react';
import { Link } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicLinkExample = () => {
  return (
    <Stack vertical>
      <Link>Basic</Link>
      <Link disabled>Basic</Link>
    </Stack>
  );
};

export default {
  title: 'Components/Link',
  component: Link,
};
