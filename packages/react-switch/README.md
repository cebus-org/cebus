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

2. Install the @pongo-ui/react-provider and our theme tokens from @pongo-ui/react-theme

3. Set up the provider in your app:

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
    <Provider>
  )
}
```

4. Integrate the Switch component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Switch } from '@pongo-ui/react-switch'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Switch/>
    <Provider>
  )
}
```

## API

The Tab API extends off of FluentUI.
