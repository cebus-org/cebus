# Switch

The Switch allows users to toggle a value between an on and off state.

## Use

1. Install the @pongo-ui/react-switch component.

Using NPM

```
npm install @pongo-ui/react-switch
```

Using Yarn

```
yarn add @pongo-ui/react-switch
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

4. Integrate the Switch component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Switch } from '@pongo-ui/react-switch'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Switch/>
    <FluentProvider>
  )
}
```

## API

The Tab API extends off of FluentUI.
