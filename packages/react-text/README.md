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

4. Integrate the Link component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Text } from '@pongo-ui/react-link'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Text>Hello World</Text>
    <Provider>
  )
}
```

## API

To learn more about the Link API take a look at the [Text Interface](src/components/Text/Text.types.ts) file.
