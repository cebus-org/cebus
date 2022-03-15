# Input

A set of components that enable users to input and edit given values.

## Use

1. Install the @pongo-ui/react-input component.

Using NPM

```
npm install @pongo-ui/react-input
```

Using Yarn

```
yarn add @pongo-ui/react-input
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

4. Integrate the Input component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Input } from '@pongo-ui/react-input'

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
