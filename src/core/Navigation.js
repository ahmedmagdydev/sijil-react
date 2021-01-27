import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const NavigationStyle = styled.ul`
  a {
    height: 30px;
    border-radius: 9px;
    padding: 3px 40px;
    margin-top: 15px;
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
    left: 0;
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
  const { t } = useTranslation();

  return (
    <NavigationStyle className="list-unstyled mt-4 navigation">
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
        <a href="search" className={`d-block ${activeLink("search")}`}>
          <i className={"fa fa-search"}></i>
          {t("search")}
        </a>
      </li>
    </NavigationStyle>
  );
}

export default Navigation;
