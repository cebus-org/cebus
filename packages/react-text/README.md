# Text

The Text control standardizes font styling across a webpage.

## Use

1. Install the @cebus/react-text component.

Using NPM

```
npm install @cebus/react-text
```

Using Yarn

```
yarn add @cebus/react-text
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

4. Integrate the Link component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Text } from '@cebus/react-link'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Text>Hello World</Text>
    <Provider>
  )
}
```

## API

To learn more about the Text API take a look at the [Text Interface](src/components/Text/Text.types.ts) file.
