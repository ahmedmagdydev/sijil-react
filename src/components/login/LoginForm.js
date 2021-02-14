import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReCAPTCHA from 'react-google-recaptcha';
import OTP from './OTP';
import ResetPassword from './ResetPassword';
import { useTranslation } from 'react-i18next';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
function LoginForm({ onViewChange }) {
  const { i18n } = useTranslation();

  const createAccount = () => {
    onViewChange('createAccount');
  };
  const [showOTP, setShowOTP] = useState(false);
  const [showResetPassword, ShowResetPassword] = useState(false);
  const handleCloseOTP = () => setShowOTP(false);
  const handleShowOTP = () => setShowOTP(true);
  const handleCloseResetPassword = () => ShowResetPassword(false);
  const handleShoweResetPassword = () => ShowResetPassword(true);
  const getLang = () => i18n.language || window.localStorage.i18nLng;

  return (
    <div className={(getLang() == 'ar' ? 'ml-auto' : 'mr-auto') + ' sign-in-form'}>
      <h1 className="text-capitalize mb-4">
        please <span style={{ color: '#00b2e2' }}>sign in</span> to your account
      </h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
          recaptcha: '',
        }}
        onSubmit={(data) => {
          handleShowOTP();
        }}
        validationSchema={yup.object().shape({
          username: yup.string().required(),
          password: yup.string().required(),
          recaptcha: yup.string().required(),
        })}
      >
        {({ handleSubmit, errors, isValid, touched, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Field as={Form.Control} name="username" placeholder="username/Useremail" />
                {errors.username && touched.username && (
                  <p className="small text-danger">{errors.username}</p>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Field
                  as={Form.Control}
                  required
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <p className="small text-danger">{errors.password}</p>
                )}
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <ReCAPTCHA
                  sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                  onChange={(response) => {
                    setFieldValue('recaptcha', response);
                  }}
                />
              </Form.Group>
              <Button
                className="submit"
                variant="primary"
                size="lg"
                block="true"
                type="submit"
                disabled={!isValid}
                // onClick={handleShowOTP}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
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
      <ResetPassword show={showResetPassword} handleClose={handleCloseResetPassword} />
    </div>
  );
}

export default LoginForm;
