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

4. Integrate the Button component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Button } from '@pongo-ui/react-button'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button>Hello World</Button>
    <FluentProvider>
  )
}
```

## API

To learn more about the Button API take a look at the [Button Interface](src/components/Button/Button.types.ts) file.
