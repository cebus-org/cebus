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

4. Integrate the Avatar component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Avatar } from '@pongo-ui/react-avatar'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
        <Avatar name="Your Name"/>
    <FluentProvider>
  )
}
```

## API

To learn more about the Avatar API take a look at the [Avatar Interface](src/components/Avatar/Avatar.types.ts) file.
