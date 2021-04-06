import React from "react";

import Paper from "@material-ui/core/Paper";
import UITable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";

export interface TableItem {
  owner: string;
  name: string;
  starsCount: number;
  forksCount: number;
}

interface Column {
  id: keyof TableItem;
  label: string | React.ReactNode;
  minWidth?: number;
  align?: "right";
}

const columns: Column[] = [
  {
    id: "owner",
    label: "Owner",
    minWidth: 170,
  },
  {
    id: "name",
    label: "Name",
    minWidth: 170,
  },
  { id: "starsCount", label: "Stars", minWidth: 170 },
  { id: "forksCount", label: "Forks", minWidth: 170 },
];

type Props = {
  items: TableItem[];
};

const Table: React.FC<Props> = ({ items }) => {
  return (
    <Paper style={{ width: "100%" }}>
      <TableContainer style={{ maxHeight: "100%" }}>
        <UITable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={index} align={column.align}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </UITable>
      </TableContainer>
    </Paper>
  );
};

export default Table;
