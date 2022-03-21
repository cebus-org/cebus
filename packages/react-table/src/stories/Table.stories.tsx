import * as React from 'react';
import { Table, TableHeader, TableRow, TableCell, TableFooter, TableBody } from '../index';
import { Card } from '@pongo-ui/react-card';

export const BasicTableExample = () => {
  return (
    <Card style={{ minWidth: '400px' }}>
      <Table label="Basic table example">
        <TableHeader>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>T shirt</TableCell>
            <TableCell>$20.00</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jeans</TableCell>
            <TableCell>$30.00</TableCell>
            <TableCell>2</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>$120.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Card>
  );
};

export default {
  title: 'Components/Table',
  component: Table,
};
