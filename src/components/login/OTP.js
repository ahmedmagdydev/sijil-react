import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import ButtonPrimary from "../framework/ButtonPrimary";

const OTPStyle = styled.div`
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
const calcTimeLeft = (time) => {
  const minutes = Math.floor(time / 60);
  const secondes = Math.floor(time % 60);
  if (time > 0) {
    return (
      <>
        (<span>{minutes}:</span>
        <span>{secondes}</span>)
      </>
    );
  } else {
    return null;
  }
};
function OTP({ show, handleClose }) {
  const [OtpTimer, setOtpTimer] = useState(2 * 60);
  useEffect(() => {
    if (show && OtpTimer > 0) {
      const timer = setTimeout(() => {
        setOtpTimer(OtpTimer - 1);
      }, 1000);
    }
  }, [show, OtpTimer]);
  const resetTimer = () => {
    setOtpTimer(2 * 60);
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Body>
        <OTPStyle>
          <p>please enter OTP to sing in to your account</p>
          <div className="text-center">
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="OTP" />
              </Form.Group>
            </Form>
            <div>
              <ButtonPrimary onClick={handleClose}>Sing in</ButtonPrimary>
            </div>
            <div>
              <Button
                variant="link"
                disabled={OtpTimer > 0}
                onClick={resetTimer}
              >
                Resend OTP {calcTimeLeft(OtpTimer)}
              </Button>
            </div>
          </div>
        </OTPStyle>
      </Modal.Body>
    </Modal>
  );
}

export default OTP;
