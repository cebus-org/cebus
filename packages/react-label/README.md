# Label

The Label component provides a title to a form component.

## Use

1. Install the @pongo-ui/react-label component.

Using NPM

```
npm install @pongo-ui/react-label
```

Using Yarn

```
yarn add @pongo-ui/react-label
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

4. Integrate the Label component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Label } from '@pongo-ui/react-label'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Label htmlFor="text">This is a Label</Label>
      <input id="text" />
    <Provider>
  )
}
```

## API

The Label API extends off of FluentUI.
