import * as React from 'react';
import { Dialog } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicDialogExample = () => {
  return (
    <Stack vertical>
      This is some content
      <div>Test</div>
      ashdjgajsdgasdg This is some content
      <div>Test</div>
      ashdjgajsdgasdg This is some content
      <div>Test</div>
      ashdjgajsdgasdg This is some content
      <div>Test</div>
      ashdjgajsdgasdg
      <Dialog open={true}>This is a test asjdhgashjdg</Dialog>
    </Stack>
  );
};

export default {
  title: 'Components/Dialog',
  component: Dialog,
};
