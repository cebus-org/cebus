import * as React from 'react';
import { TabList, Tab } from '../index';

export const BasicTabExample = () => {
  return (
    <div>
      <TabList defaultSelectedValue="1">
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
      </TabList>
    </div>
  );
};

export default {
  title: 'Components/TabList',
  component: TabList,
};
