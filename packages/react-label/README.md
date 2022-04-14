# Label

The Label component provides a title to a form component.

## Use

1. Install the @cebus/react-label component.

Using NPM

```
npm install @cebus/react-label
```

Using Yarn

```
yarn add @cebus/react-label
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

4. Integrate the Label component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Label } from '@cebus/react-label'

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
