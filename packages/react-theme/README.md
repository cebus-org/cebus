# Theme

The Theme package is a set of various theme tokens used by Pongo components.

## Use

1. Install the @pongo-ui/react-theme package.

Using NPM

```
npm install @pongo-ui/react-theme
```

Using Yarn

```
yarn add @pongo-ui/react-theme
```

2. Install the @fluentui/react-provider and one of our components.

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

4. Build your app.

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

To learn more about the Theme API take a look at the [Theme Interface](src/types.ts) file.
