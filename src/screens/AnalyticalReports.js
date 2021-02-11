import React from 'react';
import { hot } from 'react-hot-loader';

import Container from 'react-bootstrap/Container';
import AnalyticalAddRequest from '../components/analyticalReports/AnalyticalAddRequest';
import Notification from '../components/framework/Notification';
import { usePrepareTable } from '../hooks/prepareTable';
import TableWithPaging from '../components/framework/TableWithPaging';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

function AnalyticalReports() {
  const [requestState, setRequestState] = React.useState();
  const [showAddRequest, setShowAddRequest] = React.useState(false);
  const { data, columns } = usePrepareTable('invoices');
  const { t } = useTranslation();
  if (requestState == 'success') {
    return (
      <Container>
        <div className="px-4">
          <hr />
          <h4 className="pb-3">Successfull</h4>
          <Notification alert="success" content="Request ID 1312143 was created successfully" />
        </div>
      </Container>
    );
  } else if (requestState == 'warning') {
    return (
      <Container>
        <div className="px-4">
          <hr />
          <h4 className="pb-3">Successfull</h4>
          <Notification alert="warning" content="Request ID 1312143 was not created successfully" />
        </div>
      </Container>
    );
  } else {
    return (
      <>
        <TableWithPaging data={data} columns={columns}>
          <div className="mb-4">
            <Button onClick={() => setShowAddRequest(true)}>{t('Add Request')}</Button>
          </div>
        </TableWithPaging>
        <AnalyticalAddRequest
          show={showAddRequest}
          onModalHide={() => setShowAddRequest(false)}
          onFormSubmit={(data) => {
            console.log('data: ', data);
            setRequestState('warning');
          }}
        />
      </>
    );
  }
}

// eslint-disable-next-line no-undef
export default hot(module)(AnalyticalReports);
