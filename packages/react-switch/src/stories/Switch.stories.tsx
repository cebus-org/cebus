import * as React from 'react';
import { Switch } from '../index';
import { Stack } from '@cebus/react-layout';

export const BasicSwitchExample = () => {
  return (
    <Stack vertical>
      <Stack>
        <Switch />
        <Switch defaultChecked={true} />
      </Stack>
      <Stack>
        <Switch disabled />
        <Switch defaultChecked={true} disabled />
      </Stack>
    </Stack>
  );
};

export default {
  title: 'Components/Switch',
  component: Switch,
};
