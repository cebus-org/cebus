# Tabs

The Tab component assists in organizing groups of content. This can be especially helpful for landing pages.

## Use

1. Install the @pongo-ui/react-tabs component.

Using NPM

```
npm install @pongo-ui/react-tabs
```

Using Yarn

```
yarn add @pongo-ui/react-tabs
```

2. Install the @fluentui/react-provider and our theme tokens from @pongo-ui/react-theme

3. Set up the provider in your app:

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
    <FluentProvider>
  )
}
```

4. Integrate the Tab component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { TabList, Tab } from '@pongo-ui/react-tabs'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <TabList>
        <Tab value="1">First Tab</Tab>
        <Tab value="2">Second Tab</Tab>
      </TabList>
    <FluentProvider>
  )
}
```

## API

The Tab API extends off of FluentUI.
