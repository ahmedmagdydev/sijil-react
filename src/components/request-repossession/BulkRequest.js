import React from 'react';
import CompanyName from './CompanyName';
import { MultiSelectOptionMarkup } from 'react-responsive-select';
import { useTranslation } from 'react-i18next';
import GroupFileInput from '../framework/GroupFileInput';
import Box from '../framework/Box';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function BulkRequest({
  setAddedCompanies,
  addedCompanies,
  supportingDocuments,
  onRemoveSupportingDocument,
  onSupportingDocumentAdd,
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
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="step">
        <div className="px-4">
          <h4 className="pb-4">{t('supportingDocuments')}</h4>
          <Box>
            <Row>
              <Col md={6}>
                <GroupFileInput
                  lang={i18n.language}
                  handleClick={onSupportingDocumentAdd}
                  name="addDocument"
                  placeholder="PDF,JPEG,JPG,PNG"
                  id="addDocument"
                />
              </Col>
              <Col md={6}>
                {supportingDocuments.length > 0 ? (
                  <div className="mb-3">
                    {supportingDocuments.map((item, index) => (
                      <div className="d-flex file-preview align-items-center" key={index}>
                        <i className="fa fa-file"></i>
                        <p className="px-3 my-0">{item.name}</p>
                        <button
                          type="button"
                          className="btn btn-link ml-auto"
                          onClick={() => {
                            onRemoveSupportingDocument(item.name);
                          }}
                        >
                          <i className="fa fa-close"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
              </Col>
            </Row>
          </Box>
        </div>
      </div>
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
    </>
  );
}

export default BulkRequest;
