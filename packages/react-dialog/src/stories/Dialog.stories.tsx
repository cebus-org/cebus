import * as React from 'react';
import { Dialog, DialogSurface } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicLinkExample = () => {
  return (
    <Stack vertical>
      <Dialog>
        <button>Test</button>
        <DialogSurface>asdasdasd</DialogSurface>
      </Dialog>
    </Stack>
  );
};

export default {
  title: 'Components/Dialog',
  component: Dialog,
};
