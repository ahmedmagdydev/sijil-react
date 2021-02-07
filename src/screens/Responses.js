import React from 'react';
import { hot } from 'react-hot-loader';

import { usePrepareTable } from '../hooks/prepareTable';
import TableWithPaging from '../components/framework/TableWithPaging';

function Responses() {
  const { data, columns } = usePrepareTable('invoices');

  return <TableWithPaging data={data} columns={columns} />;
}

// eslint-disable-next-line no-undef
export default hot(module)(Responses);
