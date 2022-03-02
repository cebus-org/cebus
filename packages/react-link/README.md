# Link

The Link component allows you to create a standardized anchor elements

## Use

1. Install the @pongo-ui/react-link component.

Using NPM

```
npm install @pongo-ui/react-link
```

Using Yarn

```
yarn add @pongo-ui/react-link
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

4. Integrate the Link component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Link } from '@pongo-ui/react-link'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Link>Hello World</Link>
    <FluentProvider>
  )
}
```

## API

To learn more about the Link API take a look at the [Link Interface](src/components/Link/Link.types.ts) file.
