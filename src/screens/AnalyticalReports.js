import React from "react";
import { hot } from "react-hot-loader";
import BTable from "react-bootstrap/Table";
import { useTable, usePagination, useSortBy } from "react-table";
import Pagination from "../components/framework/Pagination";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import AnalyticalAddRequest from "../components/analyticalReports/AnalyticalAddRequest";

const TableStyle = styled.div`
  table {
    background: #f9fafd;
    border-radius: 18px;
    overflow: hidden;
    thead tr {
      background: #fff;
      th {
        border-bottom: 1px solid #dfe1e4;
      }
    }
    td,
    th {
      border: none;
      padding: 20px;
    }
    td {
      border-left: 1px dashed #efefef;
    }
    tbody tr:nth-of-type(odd) {
      background: #fff;
    }
  }
`;
function AnalyticalReports() {
  const { t } = useTranslation();
  const [data, setData] = React.useState([]);
  const [showAddRequest, setShowAddRequest] = React.useState(false);
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Type",
        accessor: "type",
      },
    ],
    []
  );
  React.useEffect(() => {
    let dataArray = [];
    for (let i = 0; i < 90; i++) {
      dataArray.push({
        name: "name " + (i + 1),
        date: Math.floor(Math.random() * 91) + " Jan 2021 at 12:00 am",
        type: "type",

        download: { excel: "http://file.xlx", pdf: "http://file.pdf" },
      });
    }
    setData(dataArray);
  }, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 7,
      },
    },

    useSortBy,
    usePagination
  );
  return (
    <TableStyle>
      <Container>
        <div className="px-4">
          <div className="mb-4">
            <Button onClick={() => setShowAddRequest(true)}>Add Request</Button>
          </div>
          <BTable responsive striped {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
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
                  <th>Download</th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
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
                    <td>
                      <div>
                        <a href={row.original.download.excel}>
                          <img
                            src="icons/excel.jpg"
                            style={{ width: "17px", margin: " 0 5px" }}
                          />
                        </a>
                        <a href={row.original.download.pdf}>
                          <img
                            src="icons/pdf.jpg"
                            style={{ width: "17px", margin: " 0 5px" }}
                          />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </BTable>
        </div>
        <Pagination
          gotoPage={gotoPage}
          previousPage={previousPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          nextPage={nextPage}
        />
      </Container>
      <AnalyticalAddRequest
        show={showAddRequest}
        onModalHide={() => setShowAddRequest(false)}
      />
    </TableStyle>
  );
}

export default hot(module)(AnalyticalReports);
