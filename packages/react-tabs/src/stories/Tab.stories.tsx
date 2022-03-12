import * as React from 'react';
import { TabList, Tab } from '../index';

export const BasicTabExample = () => {
  return (
    <div>
      <TabList defaultSelectedValue="1">
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
        <Tab value="3">Test 3</Tab>
      </TabList>
    </div>
  );
};

export const VerticalTabExample = () => {
  return (
    <div>
      <TabList defaultSelectedValue="1" vertical>
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
        <Tab value="3">Test 3</Tab>
      </TabList>
    </div>
  );
};

export const SizeTabExample = () => {
  return (
    <div>
      <TabList defaultSelectedValue="1" vertical size="small">
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
        <Tab value="3">Test 3</Tab>
      </TabList>
      <TabList defaultSelectedValue="1" vertical size="medium">
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
        <Tab value="3">Test 3</Tab>
      </TabList>
      <TabList defaultSelectedValue="1" size="small">
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
        <Tab value="3">Test 3</Tab>
      </TabList>
      <TabList defaultSelectedValue="1" size="medium">
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
        <Tab value="3">Test 3</Tab>
      </TabList>
    </div>
  );
};

export const AppearanceTabExample = () => {
  return (
    <div>
      <TabList defaultSelectedValue="1" appearance="subtle" rail={false}>
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
        <Tab value="3">Test 3</Tab>
      </TabList>
      <TabList defaultSelectedValue="1" appearance="transparent" rail={false}>
        <Tab value="1">Test 1</Tab>
        <Tab value="2">Test 2</Tab>
        <Tab value="3">Test 3</Tab>
      </TabList>
    </div>
  );
};

export default {
  title: 'Components/TabList',
  component: TabList,
};
