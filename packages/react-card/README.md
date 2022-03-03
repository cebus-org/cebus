# Card

The Card component displays content and presents actions to the user.

## Use

1. Install the @pongo-ui/react-card component.

Using NPM

```
npm install @pongo-ui/react-card
```

Using Yarn

```
yarn add @pongo-ui/react-card
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

4. Integrate the Card component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Card } from '@pongo-ui/react-card'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Card>Hello World</Card>
    <FluentProvider>
  )
}
```

## API

To learn more about the Card API take a look at the [Card Interface](src/components/Card/Card.types.ts) file.
