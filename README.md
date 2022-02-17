<h1 align="center">pongo-ui</h1>

<div align="center">

Pongo UI is a simple collection of fast, clean, and accessible components ready to be used and customized on [React](https://reactjs.org/) based applications. Our components are built using utilities from [FluentUI](https://github.com/microsoft/fluentui) and work hand in hand.

[![License](https://img.shields.io/badge/License-MIT-%232060cf?style=flat-square)](https://github.com/PongoAI/pongo-ui/blob/HEAD/LICENSE)
![GitHub top language](https://img.shields.io/github/languages/top/PongoAI/pongo-ui?style=flat-square)

</div>

## Installation

Using NPM
```
npm install @pongo-ui/react-button
```
Using Yarn
```
yarm add @pongo-ui/react-button
```

## Use
```jsx
import { webLightTheme } from '@pongo-ui/react-theme'
import { Button } from '@pongo-ui/react-button'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Button>Hello World</Button>
    <FluentProvider>
  )
}
```

## Licenses
All of our code is licensed under the terms of the
[MIT license](/LICENSE).
