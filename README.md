<h1 align="center">Cebus</h1>

<div align="center">

Cebus is a simple collection of fast, clean, and accessible components ready to be used and customized on [React](https://reactjs.org/) based applications. Our components are built using utilities from [FluentUI](https://github.com/microsoft/fluentui) and work hand in hand.

[![Build Status](https://img.shields.io/azure-devops/build/czearing/pongoai-frontend/4/master?style=flat-square)](https://dev.azure.com/czearing/pongoai-frontend/_build/latest?definitionId=4&branchName=master)
[![License](https://img.shields.io/badge/License-MIT-%232060cf?style=flat-square)](https://github.com/cebus-org/cebus/blob/HEAD/LICENSE)
![GitHub contributors](https://img.shields.io/github/contributors/cebus-org/cebus?style=flat-square)
[![codecov](https://codecov.io/gh/cebus-org/cebus/branch/master/graph/badge.svg?token=kqgYbdrr6I)](https://app.codecov.io/gh/cebus-org/cebus)
![GitHub top language](https://img.shields.io/github/languages/top/cebus-org/cebus?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/cebus-org/cebus?label=issues&style=flat-square)
[![Chromatic](https://img.shields.io/badge/Chromatic-stories-important?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iODQiIHZpZXdCb3g9IjAgMCA4NCA4NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI0ZDNTIxRiIgY3g9IjQyIiBjeT0iNDIiIHI9IjQyIj48L2NpcmNsZT48cGF0aCBkPSJNNTEuOSA2MS4zbC02LjctMy44IDIwLTExLjYgMi4yLTEuNWMyLjcgMy43IDMgOC42LjYgMTIuNmExMS44IDExLjggMCAwIDEtMTYuMSA0LjN6bS0xLjYgMi44Yy43LjQgMS41LjggMi40IDEuMWExMS44IDExLjggMCAwIDEtMjIuNS01VjM3LjFsMTAuMiA1Ljh2MTQuNmMwIC41LjMgMSAuOCAxLjRsOSA1LjJ6bS0yNC0xLjJBMTEuOCAxMS44IDAgMCAxIDE0LjcgNDhjLjktMyAyLjgtNS42IDUuNS03LjJsNi43LTMuOHYyMy4xYzAgLjkgMCAxLjguMiAyLjdoLTF6bTI1LjktMjguNkw0MiA0MGwtMTIuNi03YTEuNiAxLjYgMCAwIDAtMS42IDBsLTkgNS4yLTIuMiAxLjVBMTEuNyAxMS43IDAgMCAxIDE2IDI3YTExLjggMTEuOCAwIDAgMSAxNi4xLTQuM2wyMC4xIDExLjZ6TTQyIDEyYzYuNSAwIDExLjggNS4zIDExLjggMTEuOHY3LjdMMzMuNyAxOS45YTE1IDE1IDAgMCAwLTIuNC0xLjFjMi00LjEgNi02LjggMTAuNy02Ljh6bTI2IDE1YTExLjggMTEuOCAwIDAgMS00LjMgMTYuMUw0My42IDU0LjdWNDIuOWwxMi42LTcuMmMuNS0uMy44LS45LjgtMS40VjIzLjhjMC0uOSAwLTEuOC0uMi0yLjZoMWM0LjIgMCA4IDIuMiAxMC4yIDUuOHoiIGZpbGw9IiNGRkYiPjwvcGF0aD48L2c+PC9zdmc+DQo=)](https://www.chromatic.com/library?appId=62579de5a4dd66003a914014)
[![NPM](https://img.shields.io/npm/dt/@pongo-ui/react-components?color=%23cc3533&label=Downloads&logo=NPM&style=flat-square)](https://www.npmjs.com/package/@pongo-ui/react-components)

</div>

## Installation

Using NPM

```
npm install @cebus/react-button
```

Using Yarn

```
yarn add @cebus/react-button
```

## Use

```jsx
import { Provider } from '@cebus/react-provider';
import { webLightTheme } from '@cebus/react-theme';
import { Button } from '@cebus/react-button';

const MyApp = () => {
  return (
    <Provider theme={webLightTheme}>
      <Button>Hello World</Button>
    </Provider>
  );
};
```

With the FluentProvider.

```jsx
import { FluentProvider } from '@fluentui/react-provider';
import { webLightTheme as cebusWebLightTheme } from '@cebus/react-theme';
import { webLightTheme as fluentWebLightTheme } from '@fluentui/react-theme';
import { Button as CebusButton } from '@cebus/react-button';
import { Button as FluentButton } from '@fluentui/react-button';

const MyApp = () => {
  return (
    <FluentProvider theme={{ ...cebusWebLightTheme, ...fluentWebLightTheme }}>
      <CebusButton>Hello World</CebusButton>
      <FluentButton>Hello World</FluentButton>
    </FluentProvider>
  );
};
```

## Licenses

All of our code is licensed under the terms of the
[MIT license](/LICENSE).
