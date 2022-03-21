import * as React from 'react';
import { Table } from './Table';
import { fireEvent, render, screen } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';
import { resetIdsForTests } from '@fluentui/react-utilities';

describe('Table', () => {
  isConformant({
    Component: Table,
    displayName: 'Table',
  });
});
