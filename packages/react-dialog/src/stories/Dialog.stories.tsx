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
      <Dialog label="Test Dialog" open={open} onOpenChange={handleOpenChange}>
        <button>Test 1</button>
        <button>Test 2</button>
        <button>Test 3</button>
      </Dialog>
    </Stack>
  );
};

export default {
  title: 'Components/Dialog',
  component: Dialog,
};
