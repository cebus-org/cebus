import * as React from 'react';
import { Input } from '../index';
import { CalendarIcon } from '@cebus/react-icon';
import { Stack } from '@cebus/react-layout';
import type { InputProps } from '../index';

export const BasicInputExample = () => {
  return (
    <Stack vertical>
      <Input label="Name" placeholder="Enter your name" appearance="outline" />
      <Input label="User Name" placeholder="Enter your user name" appearance="standard" />
      <Input label="Password" placeholder="Enter your password" appearance="filled" />
    </Stack>
  );
};

export const ControlledInputExample = () => {
  const [value, setValue] = React.useState('hello');

  const onChange: InputProps['onChange'] = (ev, data) => {
    setValue(data.value);
  };

  return (
    <Stack vertical>
      <Input value={value} onChange={onChange} />
    </Stack>
  );
};

export const InputContentExample = () => {
  return (
    <Stack vertical>
      <Input
        label="After"
        placeholder="Enter your name"
        appearance="outline"
        contentAfter={<CalendarIcon size="small" />}
      />
      <Input
        label="Before"
        placeholder="Enter your name"
        appearance="outline"
        contentBefore={<CalendarIcon size="small" />}
      />
      <Input
        label="Before and After"
        placeholder="Enter your name"
        appearance="outline"
        contentAfter={<CalendarIcon size="small" />}
        contentBefore={<CalendarIcon size="small" />}
      />
      <Input
        label="Disabled"
        placeholder="Enter your name"
        appearance="outline"
        contentAfter={<CalendarIcon size="small" />}
        disabled
      />
      <Input
        label="Disabled"
        placeholder="Enter your name"
        appearance="outline"
        contentBefore={<CalendarIcon size="small" />}
        disabled
      />
    </Stack>
  );
};

export const InputDangerExample = () => {
  return (
    <Stack vertical>
      <Stack>
        <Input label="Name" placeholder="Enter your name" appearance="outline" danger />
        <Input label="Name" placeholder="Enter your name" appearance="outline" danger disabled />
        <Input
          label="Name"
          placeholder="Enter your name"
          appearance="outline"
          danger
          disabled
          contentBefore={<CalendarIcon size="small" />}
        />
      </Stack>
      <Stack>
        <Input label="Name" placeholder="Enter your name" appearance="standard" danger />
        <Input placeholder="Enter your name" appearance="standard" danger disabled />
        <Input
          placeholder="Enter your name"
          appearance="standard"
          danger
          disabled
          contentBefore={<CalendarIcon size="small" />}
        />
      </Stack>
      <Stack>
        <Input placeholder="Enter your name" appearance="filled" danger />
        <Input placeholder="Enter your name" appearance="filled" danger disabled />
        <Input
          placeholder="Enter your name"
          appearance="filled"
          danger
          disabled
          contentBefore={<CalendarIcon size="small" />}
        />
      </Stack>
    </Stack>
  );
};

export const InputSizeExample = () => {
  return (
    <Stack vertical>
      <Stack>
        <Input size="small" placeholder="Enter your name" appearance="outline" />
        <Input size="small" placeholder="Enter your name" appearance="standard" />
        <Input size="small" placeholder="Enter your name" appearance="filled" />
      </Stack>
      <Stack>
        <Input size="medium" placeholder="Enter your name" appearance="outline" />
        <Input size="medium" placeholder="Enter your name" appearance="standard" />
        <Input size="medium" placeholder="Enter your name" appearance="filled" />
      </Stack>
      <Stack>
        <Input size="large" placeholder="Enter your name" appearance="outline" />
        <Input size="large" placeholder="Enter your name" appearance="standard" />
        <Input size="large" placeholder="Enter your name" appearance="filled" />
      </Stack>
    </Stack>
  );
};

export const InputTypeExample = () => {
  return (
    <Stack>
      <Input type="number" />
      <Input type="time" />
      <Input type="month" />
      <Input type="password" />
    </Stack>
  );
};

export const InputDisabledExample = () => {
  return (
    <Stack>
      <Input defaultValue="hello" disabled />
      <Input defaultValue="hello" appearance="filled" disabled />
      <Input defaultValue="hello" appearance="standard" disabled />
    </Stack>
  );
};

export default {
  title: 'Components/Input',
  component: Input,
};
