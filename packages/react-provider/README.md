# Provider

The Provider control is what applies theme tokens to the web page.

## Use

1. Install the @pongo-ui/react-provider component.

Using NPM

```
npm install @pongo-ui/react-provider
```

Using Yarn

```
yarn add @pongo-ui/react-provider
```

2. Install a component @pongo-ui/react-button and our theme tokens from @pongo-ui/react-theme.

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

4. Integrate the Button component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Button } from '@pongo-ui/react-button'

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
