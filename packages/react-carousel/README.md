# Carousel

The Carousel component is used to display a collection of images.

## Use

1. Install the @cebus/react-carousel component.

Using NPM

```
npm install @cebus/react-carousel
```

Using Yarn

```
yarn add @cebus/react-carousel
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

4. Integrate the Carousel component.

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Carousel } from '@cebus/react-carousel'

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
