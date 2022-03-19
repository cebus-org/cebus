import React from 'react';
import { Link } from './Link';
import { LinkProps } from '@fluentui/react-link';
import { isConformant } from '../../common/isConformant';

describe('Link', () => {
  isConformant({
    Component: Link as React.FunctionComponent<LinkProps>,
    displayName: 'Link',
  });
});
