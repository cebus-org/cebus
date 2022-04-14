import * as React from 'react';
import { makeDecorator } from '@storybook/addons';
import { Provider } from '@cebus/react-provider';
import { tokens } from '@cebus/react-theme';
import { useTheme, useDirection } from '../knobs/index';

const canvasColorStyles = { background: tokens.canvasColor };

const ProviderWrapper: any = (props: any) => {
  const { theme } = useTheme();
  const { dir } = useDirection();

  return (
    <Provider theme={theme} dir={dir as 'ltr' | 'rtl'} style={canvasColorStyles}>
      {props.children}
    </Provider>
  );
};

export const withProvider = makeDecorator({
  name: 'withProvider',
  parameterName: 'theme',
  skipIfNoParametersOrOptions: false,
  wrapper: (storyFn, context) => {
    return <ProviderWrapper>{storyFn(context) as any}</ProviderWrapper>;
  },
});
