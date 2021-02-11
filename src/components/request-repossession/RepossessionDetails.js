import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Form from 'react-bootstrap/Form';
import GroupFileInput from '../framework/GroupFileInput';
const TableStyled = styled.table`
  background: #f9fafd;
  border-radius: 18px;
  overflow: hidden;
  thead tr {
    background: #fff;
    th {
      border-bottom: 1px solid #dfe1e4;
    }
  }
  td,
  th {
    border: none;
    padding: 20px;
  }
  td {
    border-left: 1px dashed #efefef;
  }
  tbody tr:nth-of-type(odd) {
    background: #fff;
  }
  .fa {
    color: #aac3dc;
  }
`;
function RepossessionDetails({
  repossessionDetails,
  onReasonChange,
  onRemoveDocument,
  onDocumentAdd,
}) {
  const { t, i18n } = useTranslation();
  return (
    <TableStyled className="table ">
      <thead>
        <tr>
          <th>#</th>
          <th>{t('type')}</th>
          <th>{t('ARN')}</th>
          <th>{t('reason')}</th>
          <th>{t('supportingDocuments')}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>{repossessionDetails['#']}</div>
          </td>
          <td>
            <div>{repossessionDetails['type']}</div>
          </td>
          <td>
            <div>{repossessionDetails['ARN']}</div>
          </td>
          <td>
            <div>
              <Form>
                <Form.Group>
                  <Form.Control
                    value={repossessionDetails['reason']}
                    onChange={onReasonChange}
                    as="select"
                    custom
                  >
                    <option value="allReasons">All Reasons</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </td>
          <td>
            {repossessionDetails['supportingDocuments'].length > 0 ? (
              <div className="mb-3">
                {repossessionDetails['supportingDocuments'].map((item, index) => (
                  <div className="d-flex file-preview align-items-center" key={index}>
                    <i className="fa fa-file"></i>
                    <p className="px-3 my-0">{item.name}</p>
                    <button
                      type="button"
                      className="btn btn-link ml-auto"
                      onClick={() => {
                        onRemoveDocument(item.name);
                      }}
                    >
                      <i className="fa fa-close"></i>
                    </button>
                  </div>
                ))}
              </div>
            ) : null}

            <GroupFileInput
              lang={i18n.language}
              handleClick={onDocumentAdd}
              name="addDocument"
              placeholder="PDF,JPEG,JPG,PNG"
              id="addDocument"
            />
          </td>
        </tr>
      </tbody>
    </TableStyled>
  );
}

export default RepossessionDetails;
