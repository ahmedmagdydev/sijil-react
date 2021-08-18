import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';
const SpinnerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #f5f5fd;
  .spinner-border {
    width: 10rem;
    height: 10rem;
  }
`;

function Loader() {
  return (
    <SpinnerStyle>
      <Spinner animation="border" variant="primary" />
    </SpinnerStyle>
  );
}

export default Loader;
