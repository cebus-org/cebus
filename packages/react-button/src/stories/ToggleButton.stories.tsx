import * as React from 'react';
import { ToggleButton } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicToggleButtonExample = () => {
  return (
    <Stack vertical>
      <Stack>
        <ToggleButton shape="circular">Fits well</ToggleButton>
        <ToggleButton shape="circular">Great color</ToggleButton>
        <ToggleButton shape="circular">Awesome </ToggleButton>
        <ToggleButton shape="circular">Perfect!</ToggleButton>
        <ToggleButton shape="circular" disabled>
          Disabled Button
        </ToggleButton>
      </Stack>
    </Stack>
  );
};

export const ColorToggleButtonExample = () => {
  return (
    <Stack vertical>
      <Stack>
        <ToggleButton color="inherit" shape="circular">
          Inherit
        </ToggleButton>
        <ToggleButton defaultChecked color="inherit" shape="circular">
          Inherit
        </ToggleButton>
        <ToggleButton disabled color="inherit" shape="circular">
          Inherit
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="inherit" shape="circular">
          Inherit
        </ToggleButton>
      </Stack>
      <Stack>
        <ToggleButton color="brand" shape="circular">
          Brand
        </ToggleButton>
        <ToggleButton defaultChecked color="brand" shape="circular">
          Brand
        </ToggleButton>
        <ToggleButton disabled color="brand" shape="circular">
          Brand
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="brand" shape="circular">
          Brand
        </ToggleButton>
      </Stack>
      <Stack>
        <ToggleButton color="secondary" shape="circular">
          Secondary
        </ToggleButton>
        <ToggleButton defaultChecked color="secondary" shape="circular">
          Secondary
        </ToggleButton>
        <ToggleButton disabled color="secondary" shape="circular">
          Secondary
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="secondary" shape="circular">
          Secondary
        </ToggleButton>
      </Stack>
      <Stack>
        <ToggleButton color="success" shape="circular">
          Success
        </ToggleButton>
        <ToggleButton defaultChecked color="success" shape="circular">
          Success
        </ToggleButton>
        <ToggleButton disabled color="success" shape="circular">
          Success
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="success" shape="circular">
          Success
        </ToggleButton>
      </Stack>
      <Stack>
        <ToggleButton color="danger" shape="circular">
          Danger
        </ToggleButton>
        <ToggleButton defaultChecked color="danger" shape="circular">
          Danger
        </ToggleButton>
        <ToggleButton disabled color="danger" shape="circular">
          Danger
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="danger" shape="circular">
          Danger
        </ToggleButton>
      </Stack>
      <Stack>
        <ToggleButton color="warning" shape="circular">
          Warning
        </ToggleButton>
        <ToggleButton defaultChecked color="warning" shape="circular">
          Warning
        </ToggleButton>
        <ToggleButton disabled color="warning" shape="circular">
          Warning
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="warning" shape="circular">
          Warning
        </ToggleButton>
      </Stack>
      <Stack>
        <ToggleButton color="info" shape="circular">
          Info
        </ToggleButton>
        <ToggleButton defaultChecked color="info" shape="circular">
          Info
        </ToggleButton>
        <ToggleButton disabled color="info" shape="circular">
          Info
        </ToggleButton>
        <ToggleButton defaultChecked disabled color="info" shape="circular">
          Info
        </ToggleButton>
      </Stack>
    </Stack>
  );
};

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
};
