import React from 'react';
import { Dialog } from './Dialog';
import { DialogProps } from './Dialog.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Dialog', () => {
  isConformant({
    Component: Dialog as React.FunctionComponent<DialogProps>,
    displayName: 'Dialog',
    disabledTests: ['component-has-root-ref', 'make-styles-overrides-win', 'component-handles-classname'],
    requiredProps: { open: true, label: 'This is a label' },
  });

  it('renders a basic Dialog', () => {
    const renderedComponent = render(
      <div>
        Test
        <Dialog open label="This is a label">
          Dialog content
        </Dialog>
      </div>,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });

  it('renders a closed Dialog', () => {
    const renderedComponent = render(
      <div>
        Test
        <Dialog open={false} label="This is a label">
          Dialog content
        </Dialog>
      </div>,
    );

    expect(renderedComponent.baseElement).toMatchSnapshot();
  });
});
