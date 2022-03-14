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

4. Integrate the Label component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Label } from '@pongo-ui/react-label'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Label htmlFor="text">This is a Label</Label>
      <input id="text" />
    <FluentProvider>
  )
}
```

## API

The Label API extends off of FluentUI.
