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

4. Integrate the Menu components.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Menu } from '@pongo-ui/react-menu'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Menu>
      // Add your menu here
      </Menu>
    <FluentProvider>
  )
}
```

## API

The Menu API extends off of the FluentUI Menu.
