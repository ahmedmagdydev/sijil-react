import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { useTable, usePagination } from 'react-table';
import BTable from 'react-bootstrap/Table';
import Pagination from '../components/framework/Pagination';
import { useTranslation } from 'react-i18next';
import ModalSide from '../components/framework/ModalSide';
import { axiosInstance } from '../hooks/axiosRequest';
import Loader from '../components/framework/Loader';

const TableStyle = styled.div`
  .privileges {
    color: #46d73f;
    & > div {
      border: 1px solid #46d73f;
      background: #edfbec;
      margin: 0 5px;
      border-radius: 9px;
      padding: 5px;
    }
  }
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
    padding: 20px 10px;
  }
  tbody td {
    &:first-child > div {
      border-radius: ${(props) => (props.lang === 'en' ? '15px 0 0 20px' : '0px 15px 20px 0')};
      font-weight: bold;
    }
    &:last-child > div {
      border-radius: ${(props) => (props.lang === 'en' ? '0px 15px 20px 0' : '15px 0 0 20px')};
    }
    & > div {
      background-color: #fff;
      border-bottom: 8px solid #f5f5fd !important;
      padding: 20px 10px;
      color: #002b49;
      height: 81px;
    }
    .fa {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ebf4ff;
      color: #0dabfa;
      border-radius: 50%;
      margin: ${(props) => (props.lang === 'en' ? '0 0 0 auto' : '0 auto 0 0')};
    }
  }
`;
function Users() {
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const getServiceStatuses = async () => {
    const { data } = await axiosInstance.get(
      `users?lang=${i18n.language}${'&page=' + pageIndex + '&perPage=' + 2}`,
    );
    let columns = data.map((column) => {
      return Object.keys(column).map((key) => {
        return { Header: key, accessor: key };
      });
    });

    return { columns: columns[0], data };
  };

  const [listOfPrivilages, setListOfPrivilages] = useState([]);
  const [showPrivilages, setShowPrivilages] = useState(false);
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
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: noOfPages,
    },
    usePagination,
  );
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getServiceStatuses().then((res) => {
        setColumns(res.columns);
        setData(res.data);
        setNoOfPages(6);
        setLoading(false);
      });
    }, 1000);
  }, [i18n.language, pageIndex]);
  return loading ? (
    <Loader />
  ) : (
    <TableStyle lang={i18n.language}>
      <Container>
        <div className="px-4">
          <BTable responsive {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                  <th></th>
                  {headerGroup.headers.map((column, i) => (
                    <th key={i} {...column.getHeaderProps()}>
                      {t(column.render('Header'))}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr key={i} {...row.getRowProps()}>
                    <td>
                      <div className="text-center py-3">
                        <i className="fa fa-user"></i>
                      </div>
                    </td>
                    {row.cells.map((cell, index) => {
                      return (
                        <td key={index} {...cell.getCellProps()}>
                          {cell.column.Header == 'privileges' ? (
                            <div className="d-flex align-items-center ">
                              <div className="d-flex privileges">
                                {cell.value.slice(0, 2).map((item, index) => (
                                  <div key={index}>{item}</div>
                                ))}
                              </div>
                              {cell.value.length > 2 ? (
                                <button
                                  className="mx-3 btn btn-link text-success"
                                  onClick={() => {
                                    setListOfPrivilages(cell.value);
                                    setShowPrivilages(true);
                                  }}
                                >
                                  see more
                                </button>
                              ) : null}
                            </div>
                          ) : (
                            <div>{cell.render('Cell')}</div>
                          )}
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
      <ModalSide
        title={t('privileges')}
        onModalHide={() => {
          setShowPrivilages(false);
        }}
        show={showPrivilages}
      >
        <div style={{ color: '#46d73f' }}>
          {listOfPrivilages &&
            listOfPrivilages.map((item, index) => (
              <div
                style={{
                  border: '1px solid #46d73f',
                  background: '#edfbec',
                  margin: '15px 5px ',
                  borderRadius: '9px',
                  padding: '5px',
                }}
                key={index}
              >
                {item}
              </div>
            ))}
        </div>
      </ModalSide>
    </TableStyle>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(Users);
