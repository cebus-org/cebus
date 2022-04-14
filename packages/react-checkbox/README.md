# Components

This the entire suite package of Cebus components.

## Use

1. Install the @cebus/react-components package.

Using NPM

```
npm install @cebus/react-components
```

Using Yarn

```
yarn add @cebus/react-components
```

2. Set up the provider in your app:

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-components'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
    <Provider>
  )
}
```

4. Integrate your components.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme, Button } from '@cebus/react-components'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Button>Hello World</Button>
    <Provider>
  )
}
```
