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

4. Integrate the Link component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Link } from '@pongo-ui/react-link'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Link>Hello World</Link>
    <Provider>
  )
}
```

## API

The Link API extends off of the FluentUI Link.
