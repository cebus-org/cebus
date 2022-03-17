import * as React from 'react';
import { Label } from '@pongo-ui/react-label';
import { Checkbox } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicCheckboxExample = () => {
  return (
    <Stack>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox disabled />
      <Checkbox defaultChecked disabled />
    </Stack>
  );
};

export const CheckboxSizeExample = () => {
  return (
    <Stack vertical>
      <Label htmlFor="medium">Medium</Label>
      <Checkbox size="medium" id="medium" />
      <Label htmlFor="large">Large</Label>
      <Checkbox size="large" id="large" />
    </Stack>
  );
};

export const ControlledExample = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Stack vertical>
      <Label htmlFor="controlled">Controlled</Label>
      <Checkbox checked={checked} onChange={ev => setChecked(ev.currentTarget.checked)} id="controlled" />
    </Stack>
  );
};

export const CheckboxColorExample = () => {
  return (
    <Stack vertical>
      <Label htmlFor="brand">Brand</Label>
      <Stack>
        <Checkbox color="brand" id="brand" defaultChecked />
        <Checkbox color="brand" id="brand" />
        <Checkbox color="brand" id="brand" disabled />
        <Checkbox color="brand" id="brand" disabled defaultChecked />
      </Stack>
      <Label htmlFor="inherit">Inherit</Label>
      <Stack>
        <Checkbox color="inherit" id="inherit" defaultChecked />
        <Checkbox color="inherit" id="inherit" />
        <Checkbox color="inherit" id="inherit" disabled />
        <Checkbox color="inherit" id="inherit" disabled defaultChecked />
      </Stack>
      <Label htmlFor="secondary">Secondary</Label>
      <Stack>
        <Checkbox color="secondary" id="secondary" defaultChecked />
        <Checkbox color="secondary" id="secondary" />
        <Checkbox color="secondary" id="secondary" disabled />
        <Checkbox color="secondary" id="secondary" disabled defaultChecked />
      </Stack>
      <Label htmlFor="success">Success</Label>
      <Stack>
        <Checkbox color="success" id="success" defaultChecked />
        <Checkbox color="success" id="success" />
        <Checkbox color="success" id="success" disabled />
        <Checkbox color="success" id="success" disabled defaultChecked />
      </Stack>
      <Label htmlFor="danger">Danger</Label>
      <Stack>
        <Checkbox color="danger" id="danger" defaultChecked />
        <Checkbox color="danger" id="danger" />
        <Checkbox color="danger" id="danger" disabled />
        <Checkbox color="danger" id="danger" disabled defaultChecked />
      </Stack>
      <Label htmlFor="warning">Warning</Label>
      <Stack>
        <Checkbox color="warning" id="warning" defaultChecked />
        <Checkbox color="warning" id="warning" />
        <Checkbox color="warning" id="warning" disabled />
        <Checkbox color="warning" id="warning" disabled defaultChecked />
      </Stack>
      <Label htmlFor="info">Info</Label>
      <Stack>
        <Checkbox color="info" id="info" defaultChecked />
        <Checkbox color="info" id="info" />
        <Checkbox color="info" id="info" disabled />
        <Checkbox color="info" id="info" disabled defaultChecked />
      </Stack>
      <Label htmlFor="social">Social</Label>
      <Stack>
        <Checkbox color="social" id="social" defaultChecked />
        <Checkbox color="social" id="social" />
        <Checkbox color="social" id="social" disabled />
        <Checkbox color="social" id="social" disabled defaultChecked />
      </Stack>
    </Stack>
  );
};

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};
