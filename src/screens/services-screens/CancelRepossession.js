import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Steps from '../../components/framework/Steps';
import { useTranslation } from 'react-i18next';

import TableWithPaging from '../../components/framework/TableWithPaging';
import { axiosInstance } from '../../hooks/axiosRequest';

function CancelRepossession() {
  const { t, i18n } = useTranslation();
  const [activeSearch, setActiveSearch] = useState('');
  const [singleSearchLoading, setSingleSearchLoading] = useState(false);
  const [singleSearch, setSingleSearch] = useState('');
  const [singleSearchData, setSingleSearchData] = useState([]);
  const [singleSearchColumns, setSingleSearchColumns] = useState([]);
  const [bulkRequestLoading, setBulkRequestLoading] = useState(false);
  const [bulkRequest, setBulkRequest] = useState('');
  const submitSingleRequest = async (e) => {
    e.preventDefault();
    setSingleSearchLoading(true);
    try {
      const { data } = await axiosInstance.get(`singlesearch`);
      await setSingleSearchLoading(false);
      await setActiveSearch('single');
      let columns = await data.map((column) => {
        return Object.keys(column).map((key) => {
          return { Header: key, accessor: key };
        });
      });
      await setSingleSearchData(data);
      await setSingleSearchColumns(columns[0]);
    } catch {
      setSingleSearchData([]);
      setSingleSearchLoading(false);
    }
  };
  const submitBulkRequest = (e) => {
    e.preventDefault();
    setBulkRequestLoading(true);
    setActiveSearch('bulk');
  };
  return (
    <>
      <Container>
        <div className="px-4 pb-5">
          <hr />
          <Steps className="p-4" lang={i18n.language}>
            <div className="step">
              <Row>
                <Col md={6} disabled={activeSearch == 'bulk'}>
                  <div className="px-4">
                    <h4 className="pb-4">{t('Services.cancelSingleRequest')}</h4>
                    <label htmlFor="">{t('Services.searchForAnAsset')}</label>
                    <Form onSubmit={submitSingleRequest}>
                      <Form.Group as={Row}>
                        <Col sm={8}>
                          <Form.Control
                            value={singleSearch}
                            onChange={(e) => {
                              setSingleSearch(e.target.value);
                            }}
                          />
                        </Col>
                        <Col sm={4}>
                          <Button type="submit" disabled={singleSearchLoading} variant="primary">
                            {t('search')}
                          </Button>
                        </Col>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col md={6} disabled={activeSearch == 'single'}>
                  <div className="px-4">
                    <h4 className="pb-4">{t('Services.cancelBulkRequest')}</h4>
                    <label htmlFor=""></label>
                    <Form onSubmit={submitBulkRequest}>
                      <Form.Group as={Row}>
                        <Col sm={8}>
                          <Form.Control
                            value={bulkRequest}
                            onChange={(e) => {
                              setBulkRequest(e.target.value);
                            }}
                          />
                        </Col>
                        <Col sm={4}>
                          <Button type="submit" disabled={bulkRequestLoading} variant="primary">
                            {t('search')}
                          </Button>
                        </Col>
                      </Form.Group>
                    </Form>
                    <p className="small text-black-50">
                      you should fill out the sample and upload it
                    </p>
                    <a href="#">
                      download sample <i className="fa fa-download"></i>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
            {singleSearchData.length > 0 ? (
              <>
                <div className="step">
                  <div className="px-4">
                    <h4 className="pb-4">{t('Services.searchResult')}</h4>
                  </div>
                  <TableWithPaging
                    noSorting
                    data={singleSearchData}
                    columns={singleSearchColumns}
                  />
                </div>
                <Button variant="primary">{t('Services.submitCancelation')}</Button>
              </>
            ) : null}
          </Steps>
        </div>
      </Container>
    </>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(CancelRepossession);
