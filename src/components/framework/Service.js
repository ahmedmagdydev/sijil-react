import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ServiceStyle = styled.a`
  color: ${(props) => props.textColor || "#fff"};
  text-align: center;
  margin-bottom: 50px;
  display: block;
  .service-icon {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    img {
      width: 40px;
    }
  }
`;
function Service({ titleEn, link, titleAr, textColor }) {
  const { i18n } = useTranslation();
  return (
    <ServiceStyle href={link} textColor={textColor}>
      <div className={"service-icon"}>
        <img src="serviece icons/service-icon1.jpg" alt="" />
      </div>
      <p>{i18n.language == "en" ? titleEn : titleAr}</p>
    </ServiceStyle>
  );
}

export default Service;
