import React, { useState, useEffect } from 'react';
import LoginForm from '../components/login/LoginForm';

import './login.css';
import Footer from '../components/login/Footer';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';
import Introduction from '../components/login/Introduction';
import Services from '../components/login/Services';
import CreateAccount from '../components/login/CreateAccount';

import { useTranslation } from 'react-i18next';
import { axiosInstance } from '../hooks/axiosRequest';

function Login() {
  const [services, setServices] = useState([]);
  const [loginView, setLoginView] = useState('login');
  const { i18n } = useTranslation();
  useEffect(() => {
    getServicesList();
  }, []);
  const getServicesList = async () => {
    const { data } = await axiosInstance.get(`serviceslist`);
    setServices(data);
  };
  const handleView = (view) => {
    setLoginView(view);
  };
  if (loginView === 'login') {
    return (
      <div
        style={{
          direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        <div className="login-wrapper">
          <div className="p-3 p-md-4">
            <img src="logo-dark.jpg" className="mx-5" alt="" />
            <Container>
              <div className="px-md-5">
                <div className="d-md-flex flex-row-reverse px-md-5">
                  <div className="mr-5 d-none d-md-block">
                    <img src="logo-lg.jpg" className="logo-large  " alt="" />
                  </div>

                  <LoginForm onViewChange={handleView} />
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Introduction />
        <Services servicesList={services} />
        <div className="video">
          <Container>
            <div className="p-5">
              <img src="video-dummy.jpg" className="img-fluid" alt="" />
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  } else if (loginView === 'createAccount') {
    return (
      <>
        <div className="video">
          <Container>
            <CreateAccount />
          </Container>
        </div>
        <Footer />
      </>
    );
  }
}

// eslint-disable-next-line no-undef
export default hot(module)(Login);
