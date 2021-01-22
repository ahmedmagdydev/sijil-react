import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import ReCAPTCHA from "react-google-recaptcha";
import { Modal } from "bootstrap";

function LoginForm({ onViewChange }) {
  const createAccount = () => {
    onViewChange("createAccount");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mr-auto sign-in-form">
      <h1 className="text-capitalize mb-4">
        please <span style={{ color: "#00b2e2" }}>sign in</span> to your account
      </h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="username/Useremail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          {/* <ReCAPTCHA sitekey="asdasdsad" /> */}
        </Form.Group>
        <Button
          className="submit"
          variant="primary"
          size="lg"
          block="true"
          type="submit"
          onClick={handleShow}
        >
          Submit
        </Button>
      </Form>
      <div className="py-4">
        <div>
          <Button variant="link">Forget Password/Username or usermail</Button>
        </div>
        <div>
          <Button variant="link" onClick={createAccount}>
            Create account
          </Button>
        </div>
      </div>
      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>please enter OTP to sing in to your account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default LoginForm;
