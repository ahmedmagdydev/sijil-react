import React from 'react';

import { usePrepareTable } from '../../hooks/prepareTable';
import TableWithPaging from '../framework/TableWithPaging';

function Requests() {
  const { columns, data } = usePrepareTable('homerequests');

  return <TableWithPaging columns={columns} data={data} />;
}

export default Requests;
