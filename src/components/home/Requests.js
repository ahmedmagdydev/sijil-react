import React from "react";
import BTable from "react-bootstrap/Table";

import { useSortBy, useTable } from "react-table";
import styled from "styled-components";

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
  const columns = React.useMemo(
    () => [
      {
        Header: "Requset ID",
        accessor: "requestId",
      },
      {
        Header: "Requset Date",
        accessor: "requestDate",
      },
      {
        Header: "Requset Type",
        accessor: "requestType",
      },
      {
        Header: "CRN",
        accessor: "CRN",
      },
      {
        Header: "ARN",
        accessor: "ARN",
      },
      {
        Header: "Contract Open Date",
        accessor: "contractOpenDate",
      },
      {
        Header: "Approval Date",
        accessor: "approvalDate",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        requestId: 1,
        requestDate: "13 Jan 2021 at 12:00 am",
        requestType: "request type",
        CRN: "CRN",
        ARN: "ARN",
        contractOpenDate: "13 Jan 2002 at 12:00 pm",
        approvalDate: "13 Jan 2002 at 12:00 pm",
        status: "status",
      },
      {
        requestId: 2,
        requestDate: "13 Jan 2021 at 12:00 am",
        requestType: "request type",
        CRN: "CRN",
        ARN: "ARN",
        contractOpenDate: "13 Jan 2002 at 12:00 pm",
        approvalDate: "13 Jan 2002 at 12:00 pm",
        status: "status",
      },
      {
        requestId: 3,
        requestDate: "13 Jan 2021 at 12:00 am",
        requestType: "request type",
        CRN: "CRN",
        ARN: "ARN",
        contractOpenDate: "13 Jan 2002 at 12:00 pm",
        approvalDate: "13 Jan 2002 at 12:00 pm",
        status: "status",
      },
      {
        requestId: 4,
        requestDate: "13 Jan 2021 at 12:00 am",
        requestType: "request type",
        CRN: "CRN",
        ARN: "ARN",
        contractOpenDate: "13 Jan 2002 at 12:00 pm",
        approvalDate: "13 Jan 2002 at 12:00 pm",
        status: "status",
      },
    ],
    []
  );
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  const handleAction = (row, i) => {};
  return (
    <TableStyle>
      <BTable striped bordered responsive hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
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
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                <td>
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => {
                      handleAction(row, i);
                    }}
                  >
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
