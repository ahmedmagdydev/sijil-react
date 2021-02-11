import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import DashboardSidebar from './DashboardSidebar';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Box from '../components/framework/Box';
import { useCookies } from 'react-cookie';
const DashboardStyle = styled.div`
  display: flex;
  background-color: #f5f5fd;
  .content {
    padding: ${(props) => (props.dir === 'ltr' ? '0 0 0 220px' : '0 220px 0 0')};
    overflow-x: hidden;
    @media (max-width: 910px) {
      padding: 0;
      padding-top: 20px;
    }
  }
  &-header {
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
  }
`;
function Dashboard({ title, children }) {
  const { t, i18n } = useTranslation();
  const [{ token }, setCookie] = useCookies(['i18next']);
  console.log(`🚀 ~ file: Dashboard.js ~ line 36 ~ cookie`, token);

  useEffect(() => {
    if (!token) {
      alert('you are not logged in, you will be redirected to login page');
    }
    if (!localStorage.getItem('i18nextLng')) {
      localStorage.setItem('i18nextLng', 'ar');
    }
    changeLanguage(localStorage.getItem('i18nextLng'));
  }, []);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then(() => {
      setCookie('i18next', language);
    });
  };
  const getLang = () => i18n.language || window.localStorage.i18nLng;
  return (
    <DashboardStyle
      style={{
        ...styles.container,
        direction: getLang() === 'ar' ? 'rtl' : 'ltr',
      }}
      dir={getLang() === 'ar' ? 'rtl' : 'ltr'}
    >
      <DashboardSidebar lang={i18n.language} />
      <div dir={getLang() === 'ar' ? 'rtl' : 'ltr'} className="content flex-grow-1">
        <Container>
          <div className="dashboard-header px-4 pt-4 pb-2 d-flex">
            <h2>{t(title)}</h2>
            <div className={(getLang() === 'ar' ? 'mr-auto' : 'ml-auto') + ' d-md-flex d-none'}>
              <Box className={getLang() === 'ar' ? 'ml-2' : 'mr-2'}>
                <i className="fa fa-bell"></i>
              </Box>
              <Box className={getLang() === 'ar' ? 'ml-2' : 'mr-2'}>
                {t('SignOut')} <i className="fa fa-sign-out"></i>
              </Box>
              <Box>
                <button
                  className="btn btn-link p-0"
                  onClick={() => {
                    changeLanguage(i18n.language == 'ar' ? 'en' : 'ar');
                  }}
                >
                  {i18n.language == 'ar' ? 'English' : 'عربى'}
                </button>
              </Box>
            </div>
          </div>
        </Container>
        {children}
      </div>
    </DashboardStyle>
  );
}
const styles = {
  contentEn: {
    paddingLeft: 220,
  },
  contentAr: {
    paddingRight: 220,
  },
};
// eslint-disable-next-line no-undef
export default hot(module)(Dashboard);
