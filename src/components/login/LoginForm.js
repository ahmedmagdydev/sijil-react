import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import ReCAPTCHA from "react-google-recaptcha";
import OTP from "./OTP";
import ResetPassword from "./ResetPassword";

function LoginForm({ onViewChange }) {
  const createAccount = () => {
    onViewChange("createAccount");
  };
  const [showOTP, setShowOTP] = useState(false);
  const [showResetPassword, ShowResetPassword] = useState(false);
  const handleCloseOTP = () => setShowOTP(false);
  const handleShowOTP = () => setShowOTP(true);
  const handleCloseResetPassword = () => ShowResetPassword(false);
  const handleShoweResetPassword = () => ShowResetPassword(true);
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
          type="button"
          onClick={handleShowOTP}
        >
          Submit
        </Button>
      </Form>
      <div className="py-4">
        <div>
          <Button variant="link" onClick={handleShoweResetPassword}>
            Forget Password/Username or usermail
          </Button>
        </div>
        <div>
          <Button variant="link" onClick={createAccount}>
            Create account
          </Button>
        </div>
      </div>
      <OTP show={showOTP} handleClose={handleCloseOTP} />
      <ResetPassword
        show={showResetPassword}
        handleClose={handleCloseResetPassword}
      />
    </div>
  );
}

export default LoginForm;
