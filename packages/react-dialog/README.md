# Dialog

The Dialog component presents a surface that users can either complete tasks or obtain information from.

## Use

1. Install the @cebus/react-dialog component.

Using NPM

```
npm install @cebus/react-dialog
```

Using Yarn

```
yarn add @cebus/react-dialog
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

4. Integrate the Dialog component.

```jsx
import { Provider } from '@cebus/react-provider'
import { web1ghtTheme } from '@cebus/react-theme'
import { Dialog } from '@cebus/react-dialog'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Dialog>...</Dialog>
    <Provider>
  )
}
```

## API

To learn more about the Dialog API take a look at the [Dialog Interface](src/components/Dialog/Dialog.types.ts) file.
