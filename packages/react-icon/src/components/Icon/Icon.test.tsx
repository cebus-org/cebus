import { Icon } from './Icon';
import type { IconProps } from './Icon.types';
import { isConformant } from '../../common/isConformant';

describe('Icon', () => {
  isConformant({
    Component: Icon as React.FunctionComponent<IconProps>,
    displayName: 'Icon',
    // Icon resolves to the root element but the test checks for type of HTMLElement.
    disabledTests: ['component-has-root-ref'],
  });
});
