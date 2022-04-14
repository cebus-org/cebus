# Layout

The Layout component help your develop a standardized application layout.

## Use

1. Install the @cebus/react-layout package.

Using NPM

```
npm install @cebus/react-layout
```

Using Yarn

```
yarn add @cebus/react-layout
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

4. Integrate the Layout components.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Container, Stack } from '@cebus/react-layout'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Container>
        <Stack>
        ...
        </Stack>
      </Container>
    <Provider>
  )
}
```

## API

To learn more about the Layout API take a look at the [Container](src/components/Container/Container.types.ts) and [Stack Interface](src/components/Stack/Stack.types.ts) files.
