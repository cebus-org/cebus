import * as React from 'react';
import { Dialog } from '../index';
import type { DialogProps } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicDialogExample = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange: DialogProps['onOpenChange'] = (ev, data) => setOpen(data.open);

  return (
    <Stack vertical>
      <button onClick={ev => handleOpenChange(ev, { open: true })}>Press me</button>
      <button>Test</button> <button>Test</button>
      {open.toString()}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        This is a test asjdhgashjdg
        {/* <button>Test</button>
        <button>Test</button>
        <button>Test</button> */}
      </Dialog>
    </Stack>
  );
};

export default {
  title: 'Components/Dialog',
  component: Dialog,
};
