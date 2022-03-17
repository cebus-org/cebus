import * as React from 'react';
import { Header3 } from '@pongo-ui/react-text';
import { Divider } from '../index';
import { Stack } from '@pongo-ui/react-layout';

export const BasicDividerExample = () => {
  return (
    <Stack vertical>
      <Header3>Color Example</Header3>
      <Stack grow>
        <Divider color="brand">Brand</Divider>
        <Divider>Inherit</Divider>
      </Stack>
      <Header3>Inset Example</Header3>
      <Stack grow>
        <Divider inset>Inset</Divider>
      </Stack>
      <Header3>Alignment Example</Header3>
      <Stack grow>
        <Divider alignContent="start">start</Divider>
        <Divider alignContent="center">center</Divider>
        <Divider alignContent="end">end</Divider>
      </Stack>
      <Header3>Vertical Example</Header3>
      <Stack grow>
        <Divider alignContent="start" vertical>
          start
        </Divider>
        <Divider alignContent="center" vertical>
          center
        </Divider>
        <Divider alignContent="end" vertical>
          end
        </Divider>
      </Stack>
    </Stack>
  );
};

export default {
  title: 'Components/Divider',
  component: Divider,
};
