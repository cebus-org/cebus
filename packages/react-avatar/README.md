# Avatar

The Avatar provides a recognizable icon for a user.

## Use

1. Install the @cebus/react-avatar component.

Using NPM

```
npm install @cebus/react-avatar
```

Using Yarn

```
yarn add @cebus/react-avatar
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

4. Integrate the Avatar component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Avatar } from '@cebus/react-avatar'

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
