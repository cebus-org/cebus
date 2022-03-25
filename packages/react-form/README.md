# Button

The Button controls allow users to make an action through a press.

## Use

1. Install the @pongo-ui/react-button component.

Using NPM

```
npm install @pongo-ui/react-button
```

Using Yarn

```
yarn add @pongo-ui/react-button
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

4. Integrate the Button component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Button } from '@pongo-ui/react-button'

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
