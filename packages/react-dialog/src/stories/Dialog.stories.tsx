import * as React from 'react';
import { Dialog } from '../index';
import type { DialogProps } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicDialogExample = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (e, data) => setOpen(data.open);

  return (
    <Stack vertical>
      <button onClick={() => setOpen(true)}>Press me</button>
      {open.toString()}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        This is a test asjdhgashjdg
      </Dialog>
    </Stack>
  );
};

export default {
  title: 'Components/Dialog',
  component: Dialog,
};
