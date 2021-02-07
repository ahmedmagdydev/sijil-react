import React from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { usePrepareTable } from '../../hooks/prepareTable';

const Styles = styled.div`
  text-align: center;
  thead tr td {
    border-top: 0;
    padding: 0.45rem;
    i.fa {
      background: #f5f5f5;
      border-radius: 50%;
      width: 27px;
      height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      &.fa-check {
        color: #2ac299;
      }
      &.fa-clock-o {
        color: #33a2d9;
      }
      &.fa-close {
        color: #fdc412;
        &.fa-close-2 {
          color: #ff1e53;
        }
      }
    }
  }
  tbody tr td {
    border-top: 2px dotted #f0f0f0;
    padding: 0.45rem;
    color: #b4bdc6;
    a {
      color: #49c5f9;
      text-decoration: underline;
      font-weight: bold;
    }
  }
  tbody tr:first-child td {
    border-top: 0;
  }
`;
function ServiceStatuses() {
  const { columns, data } = usePrepareTable('servicestatuses');
  return (
    <Styles>
      <Table responsive>
        <thead>
          <tr>
            {columns.map((column, index) => {
              if (column.Header == 'service' || column.Header == 'الخدمة') {
                return <td key={index}></td>;
              } else {
                return (
                  <td key={index}>
                    <WithToolTip title={column.Header} />
                  </td>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {row['service'] ? <td>{row['service']}</td> : null}
                {row['الخدمة'] ? <td>{row['service']}</td> : null}
                {row['completed'] ? <td>{row['completed']}</td> : null}
                {row['انتهت'] ? <td>{row['انتهت']}</td> : null}
                {row['delayed'] ? <td>{row['delayed']}</td> : null}
                {row['تأجلت'] ? <td>{row['تأجلت']}</td> : null}
                {row['canceled'] ? <td>{row['canceled']}</td> : null}
                {row['ألغيت'] ? <td>{row['ألغيت']}</td> : null}
                {row['rejected'] ? <td>{row['rejected']}</td> : null}
                {row['رفضت'] ? <td>{row['رفضت']}</td> : null}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Styles>
  );
}
function WithToolTip({ title }) {
  const getIcon = (title) => {
    switch (title) {
      case 'completed':
      case 'انتهت':
        return 'check';
      case 'delayed':
      case 'تأجلت':
        return 'clock-o';
      case 'canceled':
      case 'ألغيت':
        return 'close';
      case 'rejected':
      case 'رفضت':
        return 'close fa-close-2';
      default:
        return '';
    }
  };
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{title}</Tooltip>}>
      <i className={`fa fa-${getIcon(title)}`}></i>
    </OverlayTrigger>
  );
}
export default ServiceStatuses;
