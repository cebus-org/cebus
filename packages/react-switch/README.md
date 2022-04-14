# Switch

The Switch allows users to toggle a value between an on and off state.

## Use

1. Install the @cebus/react-switch component.

Using NPM

```
npm install @cebus/react-switch
```

Using Yarn

```
yarn add @cebus/react-switch
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

4. Integrate the Switch component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Switch } from '@cebus/react-switch'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Switch/>
    <Provider>
  )
}
```

## API

To learn more about the Switch API take a look at the [Switch Interface](src/components/Switch/Switch.types.ts) file.
