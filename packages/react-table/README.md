# Table

The Table component displays sets of data.

## Use

1. Install the @cebus/react-table component.

Using NPM

```
npm install @cebus/react-table
```

Using Yarn

```
yarn add @cebus/react-table
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

4. Integrate the Table component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Table, ... } from '@cebus/react-table'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Table>
        ...
      </Table>
    <Provider>
  )
}
```

## API

To learn more about the Table API take a look at the [Table Interface](src/components/Table/Table.types.ts) file.
