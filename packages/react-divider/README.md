# Divider

The Divider helps separate content in a site.

## Use

1. Install the @cebus/react-divider component.

Using NPM

```
npm install @cebus/react-divider
```

Using Yarn

```
yarn add @cebus/react-divider
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

4. Integrate the Button component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Divider } from '@cebus/react-divider'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Divider>Hello World</Divider>
    <Provider>
  )
}
```

## API

To learn more about the Divider API take a look at the [Divider Interface](src/components/Divider/Divider.types.ts) file.
