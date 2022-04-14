# Menu

The Menu related components allow you to display information over a given element.

## Use

1. Install the @cebus/react-menu component.

Using NPM

```
npm install @cebus/react-menu
```

Using Yarn

```
yarn add @cebus/react-menu
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

4. Integrate the Menu components.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Menu } from '@cebus/react-menu'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Menu>
      // Add your menu here
      </Menu>
    <Provider>
  )
}
```

## API

The Menu API extends off of the FluentUI Menu.
