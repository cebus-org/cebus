# Theme Generator

The theme generator package is a tool used to easily and quickly create themes.

## Use

1. Install the @cebus/react-theme-generator package.

Using NPM

```
npm install @cebus/react-theme-generator
```

Using Yarn

```
yarn add @cebus/react-theme-generator
```

2. Set up the themeGenerator in your app:

```jsx
import { themeGenerator } from './themeGenerator';

const hcTheme = themeGenerator({
  canvasColor: '#000000',
  semanticColors: {
    inherit: '#ffff00',
    brand: '#0029ff',
    success: '#278536',
    danger: '#de3309',
  },
});
```

4. Integrate your theme in your provider and components

```jsx
import { Provider } from '@cebus/react-provider'
import { webLightTheme } from '@cebus/react-theme'
import { Button } from '@cebus/react-button'

const hcTheme = themeGenerator({
  canvasColor: '#000000',
  semanticColors: {
    inherit: '#ffff00',
    brand: '#0029ff',
    success: '#278536',
    danger: '#de3309',
  },

const MyApp = () => {
  return (
    <Provider theme={hcTheme}>
      <Button>Hello World</Button>
    <Provider>
  )
}
```

## API

To learn more about the ThemeGenerator API take a look at the [ThemeGenerator Interface](src/theme-generator/themeGenerator.types.ts) file.
