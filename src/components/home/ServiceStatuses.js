import React from "react";
import styled from "styled-components";
import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
const Styles = styled.div`
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
  return (
    <Styles>
      <Table responsive>
        <thead>
          <tr>
            <td></td>
            <td>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>completed</Tooltip>}
              >
                <i className="fa fa-check"></i>
              </OverlayTrigger>
            </td>
            <td>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>delayed</Tooltip>}
              >
                <i className="fa fa-clock-o"></i>
              </OverlayTrigger>
            </td>
            <td>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>canceled</Tooltip>}
              >
                <i className="fa fa-close"></i>
              </OverlayTrigger>
            </td>
            <td>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>rejected</Tooltip>}
              >
                <i className="fa fa-close fa-close-2"></i>
              </OverlayTrigger>
            </td>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, index) => (
            <tr key={index}>
              <td>
                <a href="#">contract registration</a>
              </td>
              <td>21</td>
              <td>213</td>
              <td>109</td>
              <td>12</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Styles>
  );
}

export default ServiceStatuses;
