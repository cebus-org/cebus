# Avatar

The Avatar provides a recognizable icon for a user.

## Use

1. Install the @pongo-ui/react-avatar component.

Using NPM

```
npm install @pongo-ui/react-avatar
```

Using Yarn

```
yarn add @pongo-ui/react-avatar
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

4. Integrate the Avatar component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Avatar } from '@pongo-ui/react-avatar'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
        <Avatar name="Your Name"/>
    <Provider>
  )
}
```

## API

To learn more about the Avatar API take a look at the [Avatar Interface](src/components/Avatar/Avatar.types.ts) file.
