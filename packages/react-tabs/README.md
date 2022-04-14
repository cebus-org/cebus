# Tabs

The Tab component assists in organizing groups of content. This can be especially helpful for landing pages.

## Use

1. Install the @cebus/react-tabs component.

Using NPM

```
npm install @cebus/react-tabs
```

Using Yarn

```
yarn add @cebus/react-tabs
```

2. Install the @cebus/react-provider and our theme tokens from @cebus/react-theme

3. Set up the provider in your app:

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
    <Provider>
  )
}
```

4. Integrate the Tab component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { TabList, Tab } from '@cebus/react-tabs'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <TabList>
        <Tab value="1">First Tab</Tab>
        <Tab value="2">Second Tab</Tab>
      </TabList>
    <Provider>
  )
}
```

## API

The Tab API extends off of FluentUI.
