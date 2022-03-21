import * as React from 'react';
import { Table, TableHeader, TableRow, TableCell, TableBody } from '../index';
import { Card } from '@pongo-ui/react-card';

export const BasicTableExample = () => {
  return (
    <Card>
      <Table label="Basic table example">
        <TableHeader>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Fat&nbsp;(g)</TableCell>
            <TableCell>Carbs&nbsp;(g)</TableCell>
            <TableCell>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Frozen yoghurt</TableCell>
            <TableCell>20</TableCell>
            <TableCell>30</TableCell>
            <TableCell>40</TableCell>
            <TableCell>50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Frozen yoghurt</TableCell>
            <TableCell>20</TableCell>
            <TableCell>30</TableCell>
            <TableCell>40</TableCell>
            <TableCell>50</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Frozen yoghurt</TableCell>
            <TableCell>20</TableCell>
            <TableCell>30</TableCell>
            <TableCell>40</TableCell>
            <TableCell>50</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default {
  title: 'Components/Table',
  component: Table,
};
