# Toolbar

The Toolbar component displays important information and actions for an application.

## Use

1. Install the @cebus/react-toolbar component.

Using NPM

```
npm install @cebus/react-toolbar
```

Using Yarn

```
yarn add @cebus/react-toolbar
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

4. Integrate the Toolbar component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Toolbar } from '@cebus/react-toolbar'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Toolbar>Hello World</Toolbar>
    <Provider>
  )
}
```

## API

To learn more about the Toolbar API take a look at the [Toolbar Interface](src/components/Toolbar/Toolbar.types.ts) file.
