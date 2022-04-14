# Provider

The Provider control is what applies theme tokens to the web page.

## Use

1. Install the @cebus/react-provider component.

Using NPM

```
npm install @cebus/react-provider
```

Using Yarn

```
yarn add @cebus/react-provider
```

2. Install a component @cebus/react-button and our theme tokens from @cebus/react-theme.

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

4. Integrate the Button component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Button } from '@cebus/react-button'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Button>Hello World</Button>
    <Provider>
  )
}
```

## API

This is a re export of the FluentUI FluentProvider. Both API's are identical. The packages only differ in default styling.
