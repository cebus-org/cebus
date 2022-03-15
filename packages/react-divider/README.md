# Divider

The Divider helps separate content in a site.

## Use

1. Install the @pongo-ui/react-divider component.

Using NPM

```
npm install @pongo-ui/react-divider
```

Using Yarn

```
yarn add @pongo-ui/react-divider
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

4. Integrate the Button component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Divider } from '@pongo-ui/react-divider'

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
