import * as React from 'react';
import { Textarea } from '../index';
import { Stack } from '@pongo-ui/react-layout';
import { DateTimeIcon } from '@pongo-ui/react-icon';

export const BasicTextareaExample = () => {
  return (
    <Stack vertical>
      <Textarea label="Outline" />
      <Textarea appearance="standard" label="Standard" />
      <Textarea appearance="filled" label="Filled" />
    </Stack>
  );
};

export const RowsTextareaExample = () => {
  return <Textarea rows={5} label="Rows" />;
};

export const AutoAdjustTextareaExample = () => {
  return (
    <Stack vertical>
      <Textarea autoAdjust label="Auto Adjust" />
    </Stack>
  );
};

export const SizeTextareaExample = () => {
  return (
    <Stack vertical>
      <Textarea size="small" label="small" />
      <Textarea size="medium" label="medium" />
      <Textarea size="large" label="large" />
    </Stack>
  );
};

export const DisabledTextareaExample = () => {
  return (
    <Stack vertical>
      <Textarea label="Outline" disabled />
      <Textarea appearance="standard" label="Standard" disabled />
      <Textarea appearance="filled" label="Filled" disabled />
    </Stack>
  );
};

export const ContentTextareaExample = () => {
  return (
    <Stack vertical>
      <Textarea contentBefore={<DateTimeIcon />} autoAdjust />
      <Textarea contentAfter={<DateTimeIcon />} autoAdjust />
      <Textarea contentAfter={<DateTimeIcon />} contentBefore={<DateTimeIcon />} autoAdjust />
    </Stack>
  );
};

export default {
  title: 'Components/Textarea',
  component: Textarea,
};
