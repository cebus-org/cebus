import * as React from 'react';
import { Button } from '../index';
import { Stack } from '@cebus/react-layout';
import { FilterIcon } from '@cebus/react-icon';

export const BasicButtonExample = () => {
  return (
    <Stack vertical>
      <Stack>
        <Button appearance="outline">Outline</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="transparent">Transparent</Button>
      </Stack>
      <Stack>
        <Button disabled>Outline</Button>
        <Button appearance="primary" disabled>
          Primary
        </Button>
        <Button appearance="subtle" disabled>
          Subtle
        </Button>
        <Button appearance="transparent" disabled>
          Transparent
        </Button>
      </Stack>
      <Stack>
        <Button shape="rounded">Rounded</Button>
        <Button shape="circular">Circular</Button>
        <Button shape="circle">Circle</Button>
        <Button shape="square">Square</Button>
      </Stack>
      <Stack>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Stack>
      <Stack>
        <Button size="small">
          <FilterIcon /> Filter
        </Button>
        <Button size="medium">
          <FilterIcon /> Filter
        </Button>
        <Button size="large">
          <FilterIcon /> Filter
        </Button>
      </Stack>
    </Stack>
  );
};

export const ButtonColorExample = () => {
  return (
    <Stack>
      <Stack>
        <Button color="inherit" appearance="outline">
          Inherit
        </Button>
        <Button color="inherit" appearance="primary">
          Inherit
        </Button>
        <Button color="inherit" appearance="subtle">
          Inherit
        </Button>
        <Button color="inherit" appearance="transparent">
          Inherit
        </Button>
      </Stack>
      <Stack>
        <Button color="brand" appearance="outline">
          Brand
        </Button>
        <Button color="brand" appearance="primary">
          Brand
        </Button>
        <Button color="brand" appearance="subtle">
          Brand
        </Button>
        <Button color="brand" appearance="transparent">
          Brand
        </Button>
      </Stack>
      <Stack>
        <Button color="secondary" appearance="outline">
          Secondary
        </Button>
        <Button color="secondary" appearance="primary">
          Secondary
        </Button>
        <Button color="secondary" appearance="subtle">
          Secondary
        </Button>
        <Button color="secondary" appearance="transparent">
          Secondary
        </Button>
      </Stack>
      <Stack>
        <Button color="success" appearance="outline">
          Success
        </Button>
        <Button color="success" appearance="primary">
          Success
        </Button>
        <Button color="success" appearance="subtle">
          Success
        </Button>
        <Button color="success" appearance="transparent">
          Success
        </Button>
      </Stack>
      <Stack>
        <Button color="danger" appearance="outline">
          Danger
        </Button>
        <Button color="danger" appearance="primary">
          Danger
        </Button>
        <Button color="danger" appearance="subtle">
          Danger
        </Button>
        <Button color="danger" appearance="transparent">
          Danger
        </Button>
      </Stack>
      <Stack>
        <Button color="social" appearance="outline">
          Social
        </Button>
        <Button color="social" appearance="primary">
          Social
        </Button>
        <Button color="social" appearance="subtle">
          Social
        </Button>
        <Button color="social" appearance="transparent">
          Social
        </Button>
      </Stack>
      <Stack>
        <Button color="warning" appearance="outline">
          Warning
        </Button>
        <Button color="warning" appearance="primary">
          Warning
        </Button>
        <Button color="warning" appearance="subtle">
          Warning
        </Button>
        <Button color="warning" appearance="transparent">
          Warning
        </Button>
      </Stack>
      <Stack>
        <Button color="info" appearance="outline">
          Info
        </Button>
        <Button color="info" appearance="primary">
          Info
        </Button>
        <Button color="info" appearance="subtle">
          Info
        </Button>
        <Button color="info" appearance="transparent">
          Info
        </Button>
      </Stack>
    </Stack>
  );
};

export default {
  title: 'Components/Button',
  component: Button,
};
