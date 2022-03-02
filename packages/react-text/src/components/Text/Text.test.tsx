import { Text } from './Text';
import { isConformant } from '../../common/isConformant';

describe('Text', () => {
  isConformant({
    Component: Text as any,
    displayName: 'Text',
    testOptions: {
      'make-styles-overrides-win': {
        callCount: 1,
      },
    } as any,
  });
});
