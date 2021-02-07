import React from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

function GeneralEnquiry() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="p-4">
        <hr />
        <Formik
          initialValues={{
            LesseId: '',
            TitleDeads: '',
            LessorId: '',
            VehicleRegistrationNumber: '',
            Crn: '',
            ChasisNumber: '',
            Arn: '',
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            console.log('submit: ', data);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group as={Row}>
                    <Form.Label as={Col} md={5}>
                      {t('Services.LesseId')}
                    </Form.Label>
                    <Col md={7}>
                      <Field as={Form.Control} name="LesseId" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group as={Row}>
                    <Form.Label as={Col} md={5}>
                      {t('Services.TitleDeads')}
                    </Form.Label>
                    <Col md={7}>
                      <Field as={Form.Control} name="TitleDeads" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group as={Row}>
                    <Form.Label as={Col} md={5}>
                      {t('Services.LessorId')}
                    </Form.Label>
                    <Col md={7}>
                      <Field as={Form.Control} name="LessorId" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group as={Row}>
                    <Form.Label as={Col} md={5}>
                      {t('Services.VehicleRegistrationNumber')}
                    </Form.Label>
                    <Col md={7}>
                      <Field as={Form.Control} name="VehicleRegistrationNumber" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group as={Row}>
                    <Form.Label as={Col} md={5}>
                      {t('Services.Crn')}
                    </Form.Label>
                    <Col md={7}>
                      <Field as={Form.Control} name="Crn" />
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group as={Row}>
                    <Form.Label as={Col} md={5}>
                      {t('Services.ChasisNumber')}
                    </Form.Label>
                    <Col md={7}>
                      <Field as={Form.Control} name="ChasisNumber" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group as={Row}>
                    <Form.Label as={Col} md={5}>
                      {t('Services.Arn')}
                    </Form.Label>
                    <Col md={7}>
                      <Field as={Form.Control} name="Arn" />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>
              <Button disabled={isSubmitting} type="submit" variant="primary">
                {t('search')}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(GeneralEnquiry);
