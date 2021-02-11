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
import Box from '../../components/framework/Box';
import { usePrepareTable } from '../../hooks/prepareTable';
import styled from 'styled-components';
import { axiosInstance } from '../../hooks/axiosRequest';
const Attachments = styled.ul`
  li {
    &:nth-child(odd) {
      background: #f9fafd;
    }
  }
  .file {
    img {
      width: 20px;
    }

    a {
      margin: ${(props) => (props.lang == 'en' ? '0 0 0 auto' : '0 auto 0 0 ')};
    }
  }
`;
function RequestToR() {
  const { t, i18n } = useTranslation();
  const [activeSearch, setActiveSearch] = useState('');
  const [singleSearchLoading, setSingleSearchLoading] = useState(false);
  const [singleSearch, setSingleSearch] = useState('');
  const [singleSearchData, setSingleSearchData] = useState([]);
  const [singleSearchColumns, setSingleSearchColumns] = useState([]);
  const [requestDetails, setRequestDetails] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const { data: listOfContractsData, columns: listOfContractsColumns } = usePrepareTable('lessees');

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
    try {
      const { data } = await axiosInstance.get(`contractdetails?lang=${i18n.language}`);
      await setRequestDetails(Object.entries(data));
    } catch (error) {
      setRequestDetails();
    }
    setAttachments([
      {
        name: 'lorem ipsum',
        url: 'http://example',
      },
      {
        name: 'lorem lorem ipsum ipsum',
        url: 'http://example',
      },
    ]);
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
                    <div className="px-3">
                      <h4 className="pb-4">{t('Services.request')}</h4>
                      <label htmlFor="">{t('Services.searchForaToR')}</label>
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
                  </div>
                </Col>
              </Row>
            </div>
            {singleSearchData.length > 0 ? (
              <>
                <div className="step">
                  <div className="px-4">
                    <h4 className="pb-4 px-3">{t('Services.searchResult')}</h4>
                  </div>
                  <TableWithPaging
                    noSorting
                    data={singleSearchData}
                    columns={singleSearchColumns}
                  />
                </div>
                <div className="step">
                  <Container>
                    <div className="px-4">
                      <Box className="pt-4" title={t('Services.requestDetails')}>
                        <div className="p-4">
                          <Row>
                            {requestDetails.map((item, index) => (
                              <Col md={6} key={index}>
                                <Row>
                                  <Col xs={6}>
                                    <label className="font-weight-bold">
                                      {t('Services.' + item[0])}
                                    </label>
                                  </Col>
                                  <Col xs={6}>
                                    <p>{item[1]}</p>
                                  </Col>
                                </Row>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </Box>
                    </div>
                  </Container>
                </div>
                <div className="step">
                  <TableWithPaging
                    noSorting
                    data={listOfContractsData}
                    columns={listOfContractsColumns}
                  >
                    <h3>{t('Services.listofContracts')}</h3>
                  </TableWithPaging>
                </div>
                <div className="step">
                  <div className="px-4">
                    <h4 className="pb-4 px-3">{t('Services.attachments')}</h4>
                  </div>
                  <Box className="m-3 d-flex flex-column w-50" title={t('Services.files')}>
                    <Attachments
                      lang={i18n.language}
                      className="list-unstyled text-left files-list p-0 "
                    >
                      {attachments.map((file, index) => (
                        <li className="d-flex file align-items-center px-2 py-3" key={index}>
                          <div>
                            <img src="icons/pdf.jpg" alt="" />
                          </div>
                          <p className="mx-3 my-0">{file.name}</p>
                          <a href={file.url} target="_blank" rel="noreferrer">
                            <i className="fa fa-download"></i>
                          </a>
                        </li>
                      ))}
                    </Attachments>
                  </Box>
                </div>
                <h4 className="text-primary">{t('disclaimer')}</h4>
                <div className="p-4 bg-light my-3">
                  <ul className="px-4">
                    <li>Lorem, ipsum dolor.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facilis
                      repudiandae impedit quos consequuntur itaque ut magnam quo minus repellat.
                    </li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque!</li>
                  </ul>
                  <Form>
                    <Form.Check
                      className="text-weight-bold"
                      type="checkbox"
                      label={t('agree')}
                      id="disclaimerAgreement"
                      name="disclaimerAgreement"
                    />
                  </Form>
                </div>
                <Button className="flex-grow-1 mr-2" variant="light">
                  {t('reject')}
                </Button>
                <Button type="submit" className="flex-grow-1 mr-2" variant="primary">
                  {t('approve')}
                </Button>
              </>
            ) : null}
          </Steps>
        </div>
      </Container>
    </>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(RequestToR);
