import React from "react";
import { Form, Modal } from "react-bootstrap";
import styled from "styled-components";
import ButtonPrimary from "../framework/ButtonPrimary";

const ResetStyle = styled.div`
  padding: 1rem;
  .form-control {
    width: 200px;
    margin: auto;
  }
  button {
    border-radius: 20px;
    padding-right: 30px;
    padding-left: 30px;
    border: 0;
  }
`;

function ResetPassword({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <ResetStyle>
          <p>
            please enter your email to reset the password <br /> or enter your
            phone number to reset your username
          </p>
          <div className="text-center">
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Email address" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
            </Form>
            <div>
              <ButtonPrimary onClick={handleClose}>Send</ButtonPrimary>
            </div>
            <div></div>
          </div>
        </ResetStyle>
      </Modal.Body>
    </Modal>
  );
}

export default ResetPassword;
