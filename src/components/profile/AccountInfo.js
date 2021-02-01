import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";
import ButtonPrimary from "../framework/ButtonPrimary";

function AccountInfo({ onChangePassword }) {
  const { t } = useTranslation();
  return (
    <>
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
              <Button variant="link" onClick={onChangePassword}>
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
    </>
  );
}

export default AccountInfo;
