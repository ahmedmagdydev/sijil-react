import React from "react";
import styled from "styled-components";

const ClientsStyle = styled.div`
  color: #1db6ef;
  .fa-user {
    font-size: 24px;
    background-color: #daf8f8;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`;
function NumberOfClients() {
  return (
    <ClientsStyle className="px-5 d-flex align-items-center justify-content-between">
      <div>
        <i className="fa fa-user"></i>
      </div>
      <h1>1,234</h1>
      <div className="chart">
        <img src="chart-dummy.jpg" alt="" />
      </div>
    </ClientsStyle>
  );
}

export default NumberOfClients;
