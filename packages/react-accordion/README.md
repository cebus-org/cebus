# Accordion

The Accordion component is used to show and hide nested information.

## Use

1. Install the @pongo-ui/react-accordion component.

Using NPM

```
npm install @pongo-ui/react-accordion
```

Using Yarn

```
yarn add @pongo-ui/react-accordion
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

4. Integrate the Accordion component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Accordion, ... } from '@pongo-ui/react-accordion'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
        <Accordion >
        ...
        </Accordion>
    <Provider>
  )
}
```

## API

To learn more about the Accordion API take a look at the [Accordion Interface](src/components/Accordion/Accordion.types.ts) file.
