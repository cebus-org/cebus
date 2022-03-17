import { Container } from './Container';
import { isConformant } from '../../common/isConformant';

describe('Container', () => {
  isConformant({
    Component: Container,
    displayName: 'Container',
  });
});
