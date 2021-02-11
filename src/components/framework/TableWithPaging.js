import React from 'react';
import styled from 'styled-components';
import BTable from 'react-bootstrap/Table';
import { useTable, usePagination, useSortBy } from 'react-table';
import Container from 'react-bootstrap/Container';
import Pagination from './Pagination';
import { useTranslation } from 'react-i18next';
const TableStyle = styled.div`
  width: 100%;
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
      padding: 14px;
    }
    td {
      border-left: 1px dashed #efefef;
    }
    tbody tr:nth-of-type(odd) {
      background: #fff;
    }
  }
`;
function TableWithPaging({ data, columns, children, noSorting, onRowClick }) {
  const { t } = useTranslation();
  const handleClick = (e) => {
    onRowClick ? onRowClick(e) : null;
  };
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
    state: { pageIndex },
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
    usePagination,
  );
  return (
    <TableStyle>
      <Container>
        <div className="px-4">
          {children}
          <BTable responsive striped {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      key={'' + index + i}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {t(column.render('Header'))}
                      {!noSorting ? (
                        <span className="mx-2">
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
                      ) : null}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr
                    onClick={() => {
                      handleClick(row);
                    }}
                    key={'100' + index}
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell, i) => {
                      return cell.column.Header != 'download' ? (
                        <td key={'100' + index + i} {...cell.getCellProps()}>
                          <div>{cell.render('Cell')}</div>
                        </td>
                      ) : (
                        <td>
                          <div>
                            {cell.value.map((item, index) => (
                              <a href={item.url} key={item.url + index}>
                                <img
                                  src={'icons/' + item.type + '.jpg'}
                                  style={{ width: '17px', margin: ' 0 5px' }}
                                />
                              </a>
                            ))}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </BTable>
        </div>
        {pageCount > 1 ? (
          <Pagination
            gotoPage={gotoPage}
            previousPage={previousPage}
            pageCount={pageCount}
            pageIndex={pageIndex}
            nextPage={nextPage}
          />
        ) : null}
      </Container>
    </TableStyle>
  );
}

export default TableWithPaging;
