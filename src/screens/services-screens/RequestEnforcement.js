import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

import 'react-responsive-select/dist/react-responsive-select.css';
import Steps from '../../components/framework/Steps';
import { axiosInstance } from '../../hooks/axiosRequest';

const EnforcementSingleRequest = React.lazy(() =>
  import('../../components/requestEnforcement/EnforcementSingleRequest'),
);
const EnforcementBulkRequest = React.lazy(() =>
  import('../../components/requestEnforcement/EnforcementBulkRequest'),
);

function RequestEnforcement() {
  const [singleSearch, setSingleSearch] = useState('');
  const [singleSearchData, setSingleSearchData] = useState([]);
  const [singleSearchColumns, setSingleSearchColumns] = useState([]);
  const [singleSearchLoading, setSingleSearchLoading] = useState(false);
  const [bulkRequest, setBulkRequest] = useState('');
  const [bulkRequestLoading, setBulkRequestLoading] = useState(false);
  const [activeSearch, setActiveSearch] = useState('');
  const [enforcementDetails, setEnforcementDetails] = useState();
  const [requestDetails, setRequestDetails] = useState('');
  const [supportingDocuments, setSupportingDocuments] = useState([]);
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
  const handleSearchResultClick = async (e) => {
    console.log(`🚀 ~ file: RequestEnforcement.js ~ line 69 ~ e`, e);
    setEnforcementDetails({
      '#': e.values['#'],
      type: e.values.type,
      ARN: e.values.assetRegistrationNumber,
      reason: 'allReasons',
      supportingDocuments: [],
    });
    setRequestDetails({
      type: e.values.type,
      plateNumber: e.values.plateNumber,
      ARN: e.values.assetRegistrationNumber,
    });
  };
  const removeDocument = (name) => {
    const documentsAfterRemoval = requestDetails.supportingDocuments.filter((item) => {
      return item.name != name ? item : null;
    });
    setEnforcementDetails({
      ...requestDetails,
      supportingDocuments: documentsAfterRemoval,
    });
  };
  const removeSupportingDocument = (name) => {
    const documentsAfterRemoval = supportingDocuments.filter((item) => {
      return item.name != name ? item : null;
    });
    setSupportingDocuments(documentsAfterRemoval);
  };
  const supportingDocumentAdd = (e) => {
    setSupportingDocuments([...supportingDocuments, e]);
  };
  const { t, i18n } = useTranslation();

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
                    <h4 className="pb-4">{t('Services.singleRequest')}</h4>
                    <label htmlFor="">{t('Services.searchForContact')}</label>
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
                    <h4 className="pb-4">{t('Services.bulkRequest')}</h4>
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
            {activeSearch == 'single' ? (
              <EnforcementSingleRequest
                singleSearchData={singleSearchData}
                singleSearchColumns={singleSearchColumns}
                handleSearchResultClick={handleSearchResultClick}
                enforcementDetails={enforcementDetails}
                setEnforcementDetails={setEnforcementDetails}
                removeDocument={removeDocument}
              />
            ) : null}
            {activeSearch == 'bulk' ? (
              <EnforcementBulkRequest
                supportingDocuments={supportingDocuments}
                onRemoveSupportingDocument={removeSupportingDocument}
                onSupportingDocumentAdd={supportingDocumentAdd}
              />
            ) : null}
          </Steps>
          {activeSearch == 'single' || activeSearch == 'bulk' ? (
            <>
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
              <Button type="submit" className="flex-grow-1 mr-2" variant="primary">
                {t('submit')}
              </Button>
            </>
          ) : null}
        </div>
      </Container>
    </>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(RequestEnforcement);
