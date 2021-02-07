import React from 'react';
import BTable from 'react-bootstrap/Table';

import { useSortBy, useTable } from 'react-table';
import styled from 'styled-components';
import { usePrepareTable } from '../../hooks/prepareTable';

const TableStyle = styled.div`
  font-size: 0.9rem;
  margin: -1rem;
  thead th {
    color: #535e60;
  }
  .table {
    border: none;
    text-align: center;
  }
  .table td,
  .table th {
    vertical-align: middle;
    border-top: none;
    border-bottom: none;
    &:first-child {
      border-left: none;
    }
    &:last-child {
      border-right: none;
    }
  }
  .table th {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: #f9fafe;
  }
`;

function Requests() {
  const { columns, data } = usePrepareTable('homerequests');

  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );

  return (
    <TableStyle>
      <BTable striped bordered responsive hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/jsx-key
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span className="ml-2">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-sort-down"></i>
                      ) : (
                        <i className="fa fa-sort-up"></i>
                      )
                    ) : (
                      <i className="fa fa-unsorted"></i>
                    )}
                  </span>
                </th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
                <td>
                  <button type="button" className="btn btn-link">
                    :
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </BTable>
    </TableStyle>
  );
}

export default Requests;
