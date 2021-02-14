import React from 'react';
import Container from 'react-bootstrap/Container';
import TableWithPaging from '../framework/TableWithPaging';
import EnforcementDetails from './EnforcementDetails';
import { useTranslation } from 'react-i18next';

function EnforcementSingleRequest({
  singleSearchData,
  singleSearchColumns,
  handleSearchResultClick,
  enforcementDetails,
  setEnforcementDetails,
  removeDocument,
}) {
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
      {enforcementDetails ? (
        <div className="step">
          <div className="px-4">
            <h4 className="pb-4">{t('Services.enforcementDetails')}</h4>
            <Container>
              <div className="table-responsive">
                <EnforcementDetails
                  enforcementDetails={enforcementDetails}
                  onReasonChange={(e) => {
                    setEnforcementDetails({
                      ...enforcementDetails,
                      reason: e.target.value,
                    });
                  }}
                  onRemoveDocument={removeDocument}
                  onDocumentAdd={(e) => {
                    setEnforcementDetails({
                      ...enforcementDetails,
                      supportingDocuments: [...enforcementDetails.supportingDocuments, ...e],
                    });
                  }}
                />
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default EnforcementSingleRequest;
