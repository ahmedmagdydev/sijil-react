import React from "react";
import styled from "styled-components";

const BtnStyle = styled.button`
  background-color: #00b2e2;
`;
function ButtonPrimary({ children, onClick }) {
  return (
    <BtnStyle onClick={onClick} className="btn btn-primary">
      {children}
    </BtnStyle>
  );
}

export default ButtonPrimary;
