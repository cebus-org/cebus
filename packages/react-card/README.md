# Card

The Card component displays content and presents actions to the user.

## Use

1. Install the @cebus/react-card component.

Using NPM

```
npm install @cebus/react-card
```

Using Yarn

```
yarn add @cebus/react-card
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

4. Integrate the Card component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Card } from '@cebus/react-card'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Card>Hello World</Card>
    <Provider>
  )
}
```

## API

To learn more about the Card API take a look at the [Card Interface](src/components/Card/Card.types.ts) file.
