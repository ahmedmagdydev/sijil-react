import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonPrimary from "../framework/ButtonPrimary";
import { useTranslation } from "react-i18next";

function ChangePassword({ children, onChangePassword }) {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="p-4">
        <hr />
        <Row className={"mt-4"}>
          <Col md={5}>
            <h4>{t("profileScreen.ChangePassword")}</h4>
            <div className="pl-4 pt-4">
              <Form>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={5}>
                    {t("CurrentPassword")}
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control type="password"></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={5}>
                    {t("NewPassword")}
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control type="password"></Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={5}>
                    {t("RepeatPassword")}
                  </Form.Label>
                  <Col sm={7}>
                    <Form.Control type="password"></Form.Control>
                  </Col>
                </Form.Group>
              </Form>
            </div>
            <div className="text-right">
              <Button
                onClick={onChangePassword}
                variant="secondary"
                className=" py-3 px-5 mr-2"
                style={{ borderRadius: "30px" }}
              >
                {t("Cancel")}
              </Button>
              <ButtonPrimary
                className=" py-3 px-5"
                style={{ borderRadius: "30px", backgroundColor: "#00b2e2" }}
              >
                {t("Change")}
              </ButtonPrimary>
            </div>
          </Col>
          <Col md={1}>{children}</Col>
          <Col md={6}>
            <div className="pt-5">
              <p>the new password should follow the following:</p>
              <ul>
                <li>More than or equal six characters</li>
                <li>Having Uppers lowers characters</li>
                <li>At least one number</li>
                <li>One special character</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ChangePassword;
