# Menu

The Menu related components allow you to display information over a given element.

## Use

1. Install the @pongo-ui/react-menu component.

Using NPM

```
npm install @pongo-ui/react-menu
```

Using Yarn

```
yarn add @pongo-ui/react-menu
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

4. Integrate the Menu components.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Menu } from '@pongo-ui/react-menu'

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
