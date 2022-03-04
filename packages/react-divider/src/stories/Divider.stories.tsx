import * as React from 'react';
import { Header3 } from '@pongo-ui/react-text';
import { Divider } from '../index';

const boxStyles: React.CSSProperties = { width: '600px' };

const verticalBoxStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  width: '600px',
};

const wrapperStyles: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '10px' };

export const BasicDividerExample = () => {
  return (
    <div style={wrapperStyles}>
      <Header3>Color Example</Header3>
      <div style={boxStyles}>
        <Divider color="brand">Brand</Divider>
        <Divider>Inherit</Divider>
      </div>
      <Header3>Inset Example</Header3>
      <div style={boxStyles}>
        <Divider inset>Inset</Divider>
      </div>
      <Header3>Alignment Example</Header3>
      <div style={boxStyles}>
        <Divider alignContent="start">start</Divider>
        <Divider alignContent="center">center</Divider>
        <Divider alignContent="end">end</Divider>
      </div>
      <Header3>Vertical Example</Header3>
      <div style={verticalBoxStyles}>
        <Divider alignContent="start" vertical>
          start
        </Divider>
        <Divider alignContent="center" vertical>
          center
        </Divider>
        <Divider alignContent="end" vertical>
          end
        </Divider>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Divider',
  component: Divider,
};
