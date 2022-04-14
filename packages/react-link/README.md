# Link

The Link component allows you to create a standardized anchor elements

## Use

1. Install the @cebus/react-link component.

Using NPM

```
npm install @cebus/react-link
```

Using Yarn

```
yarn add @cebus/react-link
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

4. Integrate the Link component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Link } from '@cebus/react-link'

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
