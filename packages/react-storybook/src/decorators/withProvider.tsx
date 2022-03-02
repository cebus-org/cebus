import * as React from 'react';
import { makeDecorator } from '@storybook/addons';
import { FluentProvider } from '@fluentui/react-provider';
import { tokens } from '@pongo-ui/react-theme';
import { useTheme, useDirection } from '../knobs/index';

const canvasColorStyles = { background: tokens.canvasColor };

const ProviderWrapper: React.FunctionComponent = props => {
  const { theme } = useTheme();
  const { dir } = useDirection();

  return (
    <FluentProvider theme={theme as any} dir={dir as 'ltr' | 'rtl'} style={canvasColorStyles}>
      {props.children}
    </FluentProvider>
  );
};

export const withProvider = makeDecorator({
  name: 'withFluentProvider',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context) => {
    return <ProviderWrapper>{storyFn(context) as any}</ProviderWrapper>;
  },
});
