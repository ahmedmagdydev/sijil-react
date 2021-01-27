import React from "react";
import styled from "styled-components";

const BtnStyle = styled.button`
  background-color: #00b2e2;
`;
function ButtonPrimary({
  children,
  onClick,
  className,
  style,
  type = "text",
  ...rest
}) {
  return (
    <BtnStyle
      onClick={onClick}
      type={type}
      className={`btn btn-primary ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </BtnStyle>
  );
}

export default ButtonPrimary;
