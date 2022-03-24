# Carousel

The Carousel component is used to display a collection of images.

## Use

1. Install the @pongo-ui/react-carousel component.

Using NPM

```
npm install @pongo-ui/react-carousel
```

Using Yarn

```
yarn add @pongo-ui/react-carousel
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

4. Integrate the Carousel component.

```jsx
import { Provider } from '@pongo-ui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Carousel } from '@pongo-ui/react-carousel'

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
        <Carousel>
          <img src='...'/>
        </Carousel>
    <Provider>
  )
}
```

## API

To learn more about the Carousel API take a look at the [Carousel Interface](src/components/Carousel/Carousel.types.ts) file.
