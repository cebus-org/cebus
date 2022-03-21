import * as React from 'react';
import { Table } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicTableExample = () => {
  return (
    <Stack vertical>
      <Table />
    </Stack>
  );
};

export default {
  title: 'Components/Table',
  component: Table,
};
