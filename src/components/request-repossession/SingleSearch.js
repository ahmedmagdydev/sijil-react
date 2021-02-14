import React from 'react';
import TableWithPaging from '../framework/TableWithPaging';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import RepossessionDetails from './RepossessionDetails';
import { useTranslation } from 'react-i18next';

import { MultiSelectOptionMarkup } from 'react-responsive-select';
import CompanyName from './CompanyName';
function SingleSearch({
  singleSearchData,
  singleSearchColumns,
  handleSearchResultClick,
  repossessionDetails,
  setRepossessionDetails,
  removeDocument,
  requestDetails,
  setAddedCompanies,
  addedCompanies,
  selectedCity,
  setSelectedCity,
}) {
  const companies = [
    {
      value: 'stc',
      text: 'stc',
      markup: <MultiSelectOptionMarkup text="stc" />,
    },
    {
      value: 'asset',
      text: 'asset',
      markup: <MultiSelectOptionMarkup text="asset" />,
    },
    {
      value: 'sijil',
      text: 'sijil',
      markup: <MultiSelectOptionMarkup text="sijil" />,
    },
    {
      value: 'sts',
      text: 'sts',
      markup: <MultiSelectOptionMarkup text="sts" />,
    },
  ];
  const { t } = useTranslation();
  return (
    <>
      {singleSearchData.length > 0 ? (
        <div className="step">
          <div className="px-4">
            <h4 className="pb-4">{t('Services.searchResult')}</h4>
          </div>
          <TableWithPaging
            noSorting
            data={singleSearchData}
            columns={singleSearchColumns}
            onRowClick={handleSearchResultClick}
          />
        </div>
      ) : null}
      {repossessionDetails ? (
        <div className="step">
          <div className="px-4">
            <h4 className="pb-4">{t('Services.repossessionDetails')}</h4>
            <Container>
              <div className="table-responsive">
                <RepossessionDetails
                  repossessionDetails={repossessionDetails}
                  onReasonChange={(e) => {
                    setRepossessionDetails({
                      ...repossessionDetails,
                      reason: e.target.value,
                    });
                  }}
                  onRemoveDocument={removeDocument}
                  onDocumentAdd={(e) => {
                    setRepossessionDetails({
                      ...repossessionDetails,
                      supportingDocuments: [...repossessionDetails.supportingDocuments, ...e],
                    });
                  }}
                />
              </div>
            </Container>
          </div>
        </div>
      ) : null}
      {requestDetails ? (
        <div className="step">
          <div className="px-4">
            <h4 className="pb-4">{t('Services.requestDetails')}</h4>
            <Container>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t('type')}</th>
                      <th>{t('plateNumber')}</th>
                      <th>{t('ARN')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>{requestDetails['type']}</div>
                      </td>
                      <td>
                        <div>{requestDetails['plateNumber']}</div>
                      </td>
                      <td>
                        <div>{requestDetails['ARN']}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
      {requestDetails ? (
        <div className="step">
          <div className="px-4">
            <h4 className="pb-4">{t('Services.addRepossessionCompany')}</h4>
            <CompanyName
              setAddedCompanies={setAddedCompanies}
              addedCompanies={addedCompanies}
              companies={companies}
            />
          </div>
        </div>
      ) : null}
      {requestDetails ? (
        <div className="step">
          <div className="px-4">
            <h4 className="pb-4">{t('Services.lessesDetails')}</h4>
            <Container>
              <div className="table-responsive mt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th>{t('id')}</th>
                      <th>{t('name')}</th>
                      <th>{t('cityAddress')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>3213124</div>
                      </td>
                      <td>
                        <div>fullName</div>
                      </td>
                      <td>
                        <div>
                          <Form>
                            <Form.Group>
                              <Form.Control
                                value={selectedCity}
                                onChange={(e) => {
                                  setSelectedCity(e.target.value);
                                }}
                                as="select"
                                custom
                              >
                                <option value="">select city</option>
                                <option value="2">riyadh</option>
                                <option value="3">jeddah</option>
                                <option value="4">makkah</option>
                                <option value="5">madina</option>
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SingleSearch;
