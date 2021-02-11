import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Notification from '../components/framework/Notification';
import AccountInfo from '../components/profile/AccountInfo';
import History from '../components/profile/History';
import ChangePassword from '../components/profile/ChangePassword';
const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #d0d8e5;
  margin: auto;
`;

function Profile() {
  const { t } = useTranslation();
  const [profileView, setProfileView] = useState('default');
  const changePassword = () => {
    setProfileView('change password');
  };
  const cancelChangePassword = () => {
    setProfileView('default');
  };
  if (profileView == 'change password') {
    return (
      <ChangePassword onChangePassword={cancelChangePassword}>
        <VerticalLine />
      </ChangePassword>
    );
  } else {
    return (
      <>
        <Container>
          <div className="p-4">
            <hr />
            <Row className={'mt-4'}>
              <Col md={5}>
                <AccountInfo onChangePassword={changePassword} />
              </Col>
              <Col md={1}>
                <VerticalLine />
              </Col>
              <Col md={6}>
                <History />
              </Col>
            </Row>
          </div>
        </Container>
        <div className="p-4 pt-5" style={{ backgroundColor: '#e9ebf6' }}>
          <Container>
            <h4 className="text-uppercase">{t('Notifications')}</h4>
            <hr />
            <Notification
              alert="success"
              content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
              date="10 may 2020 at 23:00 am"
            ></Notification>
            <Notification
              alert="warning"
              content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
              date="10 may 2020 at 23:00 am"
            ></Notification>
            <Notification
              alert="info"
              content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
              date="10 may 2020 at 23:00 am"
            ></Notification>
          </Container>
        </div>
      </>
    );
  }
}
// eslint-disable-next-line no-undef
export default hot(module)(Profile);
