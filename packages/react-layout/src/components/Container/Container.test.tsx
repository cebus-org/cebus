import * as React from 'react';
import { Container } from './Container';
import { fireEvent, render, screen } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('Container', () => {
  isConformant({
    Component: Container,
    displayName: 'Container',
  });
});
