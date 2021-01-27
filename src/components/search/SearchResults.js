import React from "react";
import BTable from "react-bootstrap/Table";

import { useTable } from "react-table";
import styled from "styled-components";

const TableStyle = styled.div`
  text-align: center;
  td,
  th,
  tr {
    border: none !important;
    padding: 0;
  }
  thead th {
    color: #b0bccc;
    font-weight: normal;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  tbody td {
    &:first-child > div {
      border-radius: 15px 0 0 15px;
      font-weight: bold;
    }
    &:last-child > div {
      border-radius: 0px 15px 15px 0;
    }
    & > div {
      background-color: #fff;
      border-bottom: 8px solid #f5f5fd !important;
      padding: 20px 10px;
      color: #002b49;
    }
  }
`;
function SearchResults() {
  const columns = React.useMemo(
    () => [
      {
        Header: "File Name",
        accessor: "fileName",
      },
      {
        Header: "Contract open date",
        accessor: "contractOpenDate",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Contract type",
        accessor: "contractType",
      },
      {
        Header: "Modified on",
        accessor: "modifiedOn",
      },
      {
        Header: "Download",
        accessor: "download",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        fileName: "file name",
        contractOpenDate: "13 Jan 2021 at 12:00 am",
        status: "status",
        contractType: "contract type",
        modifiedOn: "13 Jan 2002 at 12:00 pm",
        download: "download",
      },
      {
        fileName: "file name",
        contractOpenDate: "13 Jan 2021 at 12:00 am",
        status: "status",
        contractType: "contract type",
        modifiedOn: "13 Jan 2002 at 12:00 pm",
        download: "download",
      },
      {
        fileName: "file name",
        contractOpenDate: "13 Jan 2021 at 12:00 am",
        status: "status",
        contractType: "contract type",
        modifiedOn: "13 Jan 2002 at 12:00 pm",
        download: "download",
      },
      {
        fileName: "file name",
        contractOpenDate: "13 Jan 2021 at 12:00 am",
        status: "status",
        contractType: "contract type",
        modifiedOn: "13 Jan 2002 at 12:00 pm",
        download: "download",
      },
    ],
    []
  );
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <>
      <hr />
      <TableStyle>
        <BTable responsive {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
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
                      <td {...cell.getCellProps()}>
                        <div>{cell.render("Cell")}</div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </BTable>
      </TableStyle>
    </>
  );
}

export default SearchResults;
