# Components

This the entire suite package of Pongo components.

## Use

1. Install the @pongo-ui/react-components package.

Using NPM

```
npm install @pongo-ui/react-components
```

Using Yarn

```
yarn add @pongo-ui/react-components
```

2. Set up the provider in your app:

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-components'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
    <Provider>
  )
}
```

4. Integrate your components.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme, Button } from '@pongo-ui/react-components'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Button>Hello World</Button>
    <Provider>
  )
}
```
