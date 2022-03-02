# Text

The Text control standardizes font styling across a webpage.

## Use

1. Install the @pongo-ui/react-text component.

Using NPM

```
npm install @pongo-ui/react-text
```

Using Yarn

```
yarn add @pongo-ui/react-text
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

4. Integrate the Link component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Text } from '@pongo-ui/react-link'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Text>Hello World</Text>
    <FluentProvider>
  )
}
```

## API

To learn more about the Link API take a look at the [Text Interface](src/components/Text/Text.types.ts) file.
