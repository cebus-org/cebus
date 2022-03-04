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

4. Integrate the Button component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Divider } from '@pongo-ui/react-divider'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Divider>Hello World</Divider>
    <FluentProvider>
  )
}
```

## API

To learn more about the Divider API take a look at the [Divider Interface](src/components/Divider/Divider.types.ts) file.
