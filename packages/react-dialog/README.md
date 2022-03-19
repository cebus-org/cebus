# Dialog

The Dialog component presents a surface that users can either complete tasks or obtain information from.

## Use

1. Install the @pongo-ui/react-dialog component.

Using NPM

```
npm install @pongo-ui/react-dialog
```

Using Yarn

```
yarn add @pongo-ui/react-dialog
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

4. Integrate the Dialog component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { web1ghtTheme } from '@pongo-ui/react-theme'
import { Dialog } from '@pongo-ui/react-dialog'

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
