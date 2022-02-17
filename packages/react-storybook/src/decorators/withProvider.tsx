import * as React from 'react';
import { makeDecorator } from '@storybook/addons';
import { FluentProvider } from '@fluentui/react-provider';
import { useTheme, useDirection } from '../knobs/index';

const ProviderWrapper: React.FunctionComponent = props => {
  const { theme } = useTheme();
  const { dir } = useDirection();

  return (
    <FluentProvider theme={theme as any} dir={dir as 'ltr' | 'rtl'}>
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
