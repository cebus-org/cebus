# Button

The Button controls allow users to make an action through a press.

## Use

1. Install the @cebus/react-button component.

Using NPM

```
npm install @cebus/react-button
```

Using Yarn

```
yarn add @cebus/react-button
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
import { Button } from '@cebus/react-button'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Button>Hello World</Button>
    <Provider>
  )
}
```

## API

To learn more about the Button API take a look at the [Button Interface](src/components/Button/Button.types.ts) file.
