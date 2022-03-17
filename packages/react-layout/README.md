# Layout

The Layout component help your develop a standardized application layout.

## Use

1. Install the @pongo-ui/react-layout package.

Using NPM

```
npm install @pongo-ui/react-layout
```

Using Yarn

```
yarn add @pongo-ui/react-layout
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

4. Integrate the Layout components.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Container, Stack } from '@pongo-ui/react-layout'

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
