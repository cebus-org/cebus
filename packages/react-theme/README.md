# Theme

The Theme package is a set of various theme tokens used by Cebus components.

## Use

1. Install the @cebus/react-theme package.

Using NPM

```
npm install @cebus/react-theme
```

Using Yarn

```
yarn add @cebus/react-theme
```

2. Install the @cebus/react-provider and one of our components.

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

4. Build your app.

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

To learn more about the Theme API take a look at the [Theme Interface](src/types.ts) file.
