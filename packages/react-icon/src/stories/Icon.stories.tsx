import * as React from 'react';
import { LogoIcon } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicIconExample = () => {
  return (
    <Stack>
      <LogoIcon />
    </Stack>
  );
};

export const SizeIconExample = () => {
  return (
    <Stack>
      <LogoIcon size="small" />
      <LogoIcon size="medium" />
      <LogoIcon size="large" />
      <LogoIcon size="display" />
    </Stack>
  );
};

export const ColorIconExample = () => {
  return (
    <Stack>
      <LogoIcon />
      <LogoIcon color="inherit" />
      <LogoIcon color="brand" />
      <LogoIcon color="secondary" />
      <LogoIcon color="success" />
      <LogoIcon color="danger" />
      <LogoIcon color="social" />
      <LogoIcon color="warning" />
      <LogoIcon color="info" />
      <div style={{ backgroundColor: 'black' }}>
        <LogoIcon color="white" />
      </div>
    </Stack>
  );
};

export const DisabledIconExample = () => {
  return (
    <Stack>
      <LogoIcon disabled />
      <LogoIcon color="inherit" disabled />
      <LogoIcon color="brand" disabled />
      <LogoIcon color="secondary" disabled />
      <LogoIcon color="success" disabled />
      <LogoIcon color="danger" disabled />
      <LogoIcon color="social" disabled />
      <LogoIcon color="warning" disabled />
      <LogoIcon color="info" disabled />
      <div style={{ backgroundColor: 'black' }}>
        <LogoIcon color="white" disabled />
      </div>
    </Stack>
  );
};

export default {
  title: 'Components/Icon',
  component: LogoIcon,
};
