# Table

The Table component displays sets of data.

## Use

1. Install the @pongo-ui/react-table component.

Using NPM

```
npm install @pongo-ui/react-table
```

Using Yarn

```
yarn add @pongo-ui/react-table
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

4. Integrate the Table component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Table, ... } from '@pongo-ui/react-table'

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
