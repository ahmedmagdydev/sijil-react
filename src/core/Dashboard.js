import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import DashboardSidebar from "./DashboardSidebar";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Box from "../components/framework/Box";
import { useCookies } from "react-cookie";
const HeaderStyle = styled.div`
  color: #1e4b5e;
  button {
    color: #1e4b5e;
    outline: none;
    &:focus {
      text-decoration: none;
      border: 0;
      box-shadow: none;
    }
  }
`;
function Dashboard({ title, children }) {
  const { t, i18n } = useTranslation();
  const [cookies, setCookie, removeCookie] = useCookies(["i18next"]);

  useEffect(() => {
    if (!localStorage.getItem("i18nextLng")) {
      localStorage.setItem("i18nextLng", "ar");
    }
    changeLanguage(localStorage.getItem("i18nextLng"));
  }, []);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then(() => {
      setCookie("i18next", language);
    });
  };
  const getLang = () => i18n.language || window.localStorage.i18nLng;
  return (
    <div
      style={{
        ...styles.container,
        direction: getLang() === "ar" ? "rtl" : "ltr",
      }}
      dir={getLang() === "ar" ? "rtl" : "ltr"}
    >
      <DashboardSidebar />
      <div
        style={getLang() === "ar" ? styles.contentAr : styles.contentEn}
        className="flex-grow-1"
      >
        <Container>
          <HeaderStyle className="px-4 pt-4 pb-2 d-flex">
            <h2>{t(title)}</h2>
            <div
              className={
                (getLang() === "ar" ? "mr-auto" : "ml-auto") + " d-flex"
              }
            >
              <Box className="mr-2">
                <i className="fa fa-bell"></i>
              </Box>
              <Box className="mr-2">
                Sign Out <i className="fa fa-sign-out"></i>
              </Box>
              <Box>
                <button
                  className="btn btn-link p-0"
                  onClick={() => {
                    changeLanguage(i18n.language == "ar" ? "en" : "ar");
                  }}
                >
                  {i18n.language == "ar" ? "English" : "عربى"}
                </button>
              </Box>
            </div>
          </HeaderStyle>
        </Container>
        {children}
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    backgroundColor: "#f5f5fd",
  },
  contentEn: {
    paddingLeft: 220,
  },
  contentAr: {
    paddingRight: 220,
  },
};
export default hot(module)(Dashboard);
