import React from 'react';
import { Provider } from './Provider';
import { ProviderProps } from './Provider.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';
import { webLightTheme } from '@pongo-ui/react-theme';

describe('Provider', () => {
  isConformant({
    Component: Provider as React.FunctionComponent<ProviderProps>,
    displayName: 'Provider',
    disabledTests: ['component-handles-classname'],
  });

  it('renders a basic provider', () => {
    const renderedComponent = render(<Provider theme={webLightTheme}>Test</Provider>);

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
