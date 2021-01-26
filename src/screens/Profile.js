import React from "react";
import { hot } from "react-hot-loader";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ButtonPrimary from "../components/framework/ButtonPrimary";
import styled from "styled-components";
import Notification from "../components/framework/Notification";
const VerticalLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: #d0d8e5;
  margin: auto;
`;
const Notifications = styled.div`
  background-color: #e9ebf6;
`;
function Profile() {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <div className="p-4">
          <hr />
          <Row className={"mt-4"}>
            <Col md={5}>
              <h4>
                {t("profileScreen.AccountInformation")}
                <i className="fa fa-user"></i>
              </h4>
              <div className="pl-4 pt-4">
                <Form>
                  <Form.Group as={Row} className="align-items-center">
                    <Form.Label column sm={5}>
                      {t("UserEmail")}
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="email"></Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="align-items-center">
                    <Form.Label column sm={5}>
                      {t("Username")}
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="text"></Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="align-items-center">
                    <Form.Label column sm={5}>
                      {t("Password")}
                    </Form.Label>
                    <Col sm={7}>
                      <Form.Control type="password"></Form.Control>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="align-items-center">
                    <Form.Label column sm={5}></Form.Label>
                    <Col sm={7}>
                      <Button variant="link">
                        <i className="fa fa-pencil"></i> {t("Change Password")}
                      </Button>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
              <ButtonPrimary
                className=" py-3 px-5"
                style={{ borderRadius: "30px", backgroundColor: "#00b2e2" }}
              >
                {t("SignOut")} <i className="fa fa-sign-out ml-2"></i>
              </ButtonPrimary>
            </Col>
            <Col md={1}>
              <VerticalLine />
            </Col>
            <Col md={6}>
              <h4>{t("profileScreen.History")}</h4>
              <ul className="mt-5 list-unstyled">
                {Array.from({ length: 6 }).map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="d-flex justify-content-between"
                      style={{
                        borderBottom: "1px solid #d0d8e5",
                        paddingBottom: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <div>Actor Added your profile</div>
                      <div className="text-black-50">
                        10 may 2014 at 12:00 PM
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
      <Notifications className="p-4 pt-5">
        <Container>
          <h4 className="text-uppercase">{t("Notifications")}</h4>
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
      </Notifications>
    </>
  );
}
export default hot(module)(Profile);
