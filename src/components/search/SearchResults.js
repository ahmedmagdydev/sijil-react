import React, { useState, useEffect } from 'react';
import BTable from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { useTable, usePagination, useSortBy } from 'react-table';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import SearchFilter from './SearchFilter';
import Pagination from '../framework/Pagination';
import { siteBaseUrl } from '../../constants/api';

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
      border-radius: ${(props) => (props.lang == 'en' ? '15px 0 0 15px' : '0 15px 15px 0 ')};
      font-weight: bold;
    }
    &:last-child > div {
      border-radius: ${(props) => (props.lang == 'en' ? '0px 15px 15px 0' : '15px 0 0 15px ')};
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
  const { t, i18n } = useTranslation();
  const columns = React.useMemo(
    () => [
      {
        Header: 'File Name',
        accessor: 'fileName',
      },
      {
        Header: 'Contract open date',
        accessor: 'contractOpenDate',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Contract type',
        accessor: 'contractType',
      },
      {
        Header: 'Modified on',
        accessor: 'modifiedOn',
      },
    ],
    [],
  );

  //this is for demo only, you can remove it and use http request to get the data
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sorting, setSorting] = useState('Newest To Oldest');

  useEffect(() => {
    let dataArray = [];
    for (let i = 0; i < 90; i++) {
      dataArray.push({
        fileName: 'file name ' + (i + 1),
        contractOpenDate: Math.floor(Math.random() * 91) + ' Jan 2021 at 12:00 am',
        status: 'status',
        contractType: 'contract type',
        modifiedOn: '13 Jan 2002 at 12:00 pm',
        download: { excel: 'http://file.xlx', pdf: 'http://file.pdf' },
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
    setSortBy,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 7,
        manualSortBy: true,
        sortBy: [
          {
            id: 'contractOpenDate',
            desc: true,
          },
        ],
      },
    },

    useSortBy,
    usePagination,
  );
  return (
    <>
      <hr />

      <TableStyle lang={i18n.language} className="px-5">
        <div className="table-options justify-content-end d-flex">
          <Dropdown className={i18n.language == 'en' ? 'mr-3' : 'ml-3'}>
            <Dropdown.Toggle variant="light">{t(sorting)}</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setSorting('Newest To Oldest');
                  setSortBy([{ id: 'contractOpenDate', desc: true }]);
                }}
              >
                {t('Newest To Oldest')}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setSorting('Oldest to Newest');
                  setSortBy([{ id: 'contractOpenDate', desc: false }]);
                }}
              >
                {t('Oldest to Newest')}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            onClick={() => {
              setShowFilter(true);
            }}
          >
            {t('Filter')}
          </Button>
        </div>
        <BTable responsive {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, rowIndex) => (
              <tr key={rowIndex + 'row'} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, thIndex) => (
                  <th key={rowIndex + thIndex + 'th'} {...column.getHeaderProps()}>
                    {column.render('Header')}
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
                <tr key={i + 'bodyRow'} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td key={index + i + 'bodyCell'} {...cell.getCellProps()}>
                        <div>{cell.render('Cell')}</div>
                      </td>
                    );
                  })}
                  <td>
                    <div>
                      <a href={row.original.download.excel}>
                        <img
                          src={siteBaseUrl + 'icons/excel.jpg'}
                          style={{ width: '17px', margin: ' 0 5px' }}
                        />
                      </a>
                      <a href={row.original.download.pdf}>
                        <img
                          src={siteBaseUrl + 'icons/pdf.jpg'}
                          style={{ width: '17px', margin: ' 0 5px' }}
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </BTable>
        <Pagination
          gotoPage={gotoPage}
          previousPage={previousPage}
          pageCount={pageCount}
          pageIndex={pageIndex}
          nextPage={nextPage}
        />
      </TableStyle>
      <SearchFilter
        show={showFilter}
        onModalHide={() => {
          setShowFilter(false);
        }}
      />
    </>
  );
}

export default SearchResults;
