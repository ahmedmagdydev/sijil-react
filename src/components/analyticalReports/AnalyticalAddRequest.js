import React from 'react';
import { Formik } from 'formik';
import ModalSide from '../framework/ModalSide';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DatePickerField } from '../framework/DatePickerField';
import { useTranslation } from 'react-i18next';

function AnalyticalAddRequest({ onModalHide, show, onFormSubmit }) {
  const { t } = useTranslation();
  return (
    <ModalSide title={t('Add Request')} onModalHide={onModalHide} show={show}>
      <Formik
        initialValues={{
          ReportName: '',
          FromDate: '',
          ToDate: '',
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setSubmitting(false);
          onFormSubmit(data);
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur, resetForm }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t('Request.ReportName')}
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  value={values.ReportName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  as="select"
                  custom
                  name="ReportName"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t('Request.FromDate')}
              </Form.Label>
              <Col sm={7}>
                <DatePickerField name="FromDate" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t('Request.ToDate')}
              </Form.Label>
              <Col sm={7}>
                <DatePickerField minDate={values.FromDate} name="ToDate" />
              </Col>
            </Form.Group>

            <div className="d-flex pt-3">
              <Button type="submit" className="flex-grow-1 mr-2" variant="primary">
                {t('request')}
              </Button>
              <Button className="flex-grow-1" variant="light" onClick={resetForm}>
                {t('reset')}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalSide>
  );
}

export default AnalyticalAddRequest;
