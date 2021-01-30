import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const NavigationStyle = styled.ul`
  padding-right: 0;
  a {
    height: 30px;
    border-radius: 9px;
    padding: ${(props) =>
      props.dir === "rtl" ? "3px 40px 3px 0" : "3px 0 3px 40px"};
    margin-top: 15px;
    text-align: ${(props) => (props.dir === "rtl" ? "right" : "left")};
    color: #9dc1e5;
    position: relative;
    &:hover,
    &.active {
      background-color: #274d72;
      text-decoration: none;
    }
  }

  i.fa {
    display: inline-block;
    height: 30px;
    position: absolute;
    left: ${(props) => (props.dir === "rtl" ? "auto" : "0")};
    right: ${(props) => (props.dir === "rtl" ? "0" : "auto")};
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
  }
  li a.active i.fa {
    background-color: #00b3de;
    color: #fff;
    border-radius: 9px;
  }
`;
const activeLink = (url) => {
  return document.location.href.indexOf(url) >= 0 ? "active" : "";
};
function Navigation() {
  const { t, i18n } = useTranslation();
  const getLang = () => i18n.language || window.localStorage.i18nLng;

  return (
    <NavigationStyle
      dir={getLang() === "ar" ? "rtl" : "ltr"}
      className="list-unstyled mt-4 navigation"
    >
      <li>
        <a href="home" className={`d-block ${activeLink("home")}`}>
          <i className={"fa fa-home"}></i>
          {t("home")}
        </a>
      </li>
      <li>
        <a href="profile" className={`d-block ${activeLink("profile")}`}>
          <i className={"fa fa-user"}></i>
          {t("profile")}
        </a>
      </li>
      <li>
        <a href="dashboard" className={`d-block ${activeLink("dashboard")}`}>
          <i className={"fa fa-th"}></i>
          {t("dashboard")}
        </a>
      </li>
      <li>
        <a href="services" className={`d-block ${activeLink("services")}`}>
          <i className={"fa fa-suitcase"}></i>
          {t("services")}
        </a>
      </li>
      <li>
        <a href="responses" className={`d-block ${activeLink("responses")}`}>
          <i className={"fa fa-comment"}></i>
          {t("responses")}
        </a>
      </li>
      <li>
        <a href="invoices" className={`d-block ${activeLink("invoices")}`}>
          <i className={"fa fa-sticky-note"}></i>
          {t("invoices")}
        </a>
      </li>
      <li>
        <a
          href="documentation"
          className={`d-block ${activeLink("documentation")}`}
        >
          <i className={"fa fa-file"}></i>
          {t("documentation")}
        </a>
      </li>
      <li>
        <a
          href="analytical-reports"
          className={`d-block ${activeLink("analytical-reports")}`}
        >
          <i className={"fa fa-pie-chart"}></i>
          {t("AnalyticalReports")}
        </a>
      </li>
      <li>
        <a href="users" className={`d-block ${activeLink("users")}`}>
          <i className={"fa fa-users"}></i>
          {t("users")}
        </a>
      </li>
    </NavigationStyle>
  );
}

export default Navigation;
