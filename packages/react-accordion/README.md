# Accordion

The Accordion component is used to show and hide nested information.

## Use

1. Install the @cebus/react-accordion component.

Using NPM

```
npm install @cebus/react-accordion
```

Using Yarn

```
yarn add @cebus/react-accordion
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

4. Integrate the Accordion component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Accordion, ... } from '@cebus/react-accordion'

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
