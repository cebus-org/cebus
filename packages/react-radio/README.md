# RadioButton

The RadioButton component allows a user to select a single option from a set.

## Use

1. Install the @pongo-ui/react-radio component.

Using NPM

```
npm install @pongo-ui/react-radio
```

Using Yarn

```
yarn add @pongo-ui/react-radio
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

4. Integrate the Radio component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { RadioRadioGroupList, Radio } from '@pongo-ui/react-radio'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <RadioGroup>
        <Radio value="1" label="Value 1" />
        <Radio value="2" label="Value 2" />
        <Radio value="3" label="Value 3" />
      </RadioGroup>
    <FluentProvider>
  )
}
```

## API

The Radio API extends off of FluentUI.
