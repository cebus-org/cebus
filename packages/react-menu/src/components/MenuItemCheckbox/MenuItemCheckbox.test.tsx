import { MenuItemCheckbox } from './MenuItemCheckbox';
import { isConformant } from '../../common/isConformant';

describe('MenuItemCheckbox', () => {
  isConformant({
    Component: MenuItemCheckbox,
    displayName: 'MenuItemCheckbox',
    disabledTests: ['component-handles-classname', 'make-styles-overrides-win'],
  });
});
