# Input

A set of components that enable users to input and edit given values.

## Use

1. Install the @cebus/react-input component.

Using NPM

```
npm install @cebus/react-input
```

Using Yarn

```
yarn add @cebus/react-input
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

4. Integrate the Input component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Input } from '@cebus/react-input'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Input />
    <Provider>
  )
}
```

## API

To learn more about the Input API take a look at the [Input Interface](src/components/Input/Input.types.ts) file.
