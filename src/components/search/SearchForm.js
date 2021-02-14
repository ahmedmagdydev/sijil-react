import React from 'react';
import { Formik, Field } from 'formik';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonPrimary from '../framework/ButtonPrimary';
import { DatePickerField } from '../framework/DatePickerField';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import * as yup from 'yup';
const To = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00b2e2;
  width: 45px;
  transform: scaleX(2.4);
  z-index: 999;
  border-radius: 7px;
  p {
    transform: scaleX(0.4);
    font-size: 18px;
    padding: 0;
    margin: 0;
    color: #fff;
  }
`;
const FieldWithValidation = ({ error, touched, name }) => {
  return (
    <>
      <Field type="text" as={Form.Control} name={name} />
      {error && touched && <p className="small text-danger">{error}</p>}
    </>
  );
};
function SearchForm({ onShowSearchResults }) {
  const { t } = useTranslation();
  const validationSchema = yup.object().shape({
    RequestDate: yup.date().required(),
    CRN: yup.string().required(),
    ARN: yup.string().required(),
    ContractNumber: yup.string().required(),
    ContractName: yup.string().required(),
    AnyUniqueID: yup.string().required(),
    UniqueIdType: yup.string().required(),
    FileName: yup.string().required(),
    City: yup.string().required(),
    LesseeNationalID: yup.string().required(),
    DateRangeFrom: yup.string().required(),
    DateRangeTo: yup.string().required(),
    Status: yup.string().required(),
    ContractOpenDate: yup.string().required(),
    ApprovalDate: yup.string().required(),
    ModifiedOn: yup.string().required(),
    PaymentStatus: yup.string().required(),
    ContractType: yup.string().required(),
  });
  return (
    <div className="p-4">
      <hr />
      <div className="p-2 pl-3 pr-5">
        <Formik
          validationSchema={validationSchema}
          validateOnChange={true}
          initialValues={{
            RequestDate: '',
            CRN: '',
            ARN: '',
            ContractNumber: '',
            ContractName: '',
            AnyUniqueID: '',
            UniqueIdType: '',
            FileName: '',
            City: '',
            LesseeNationalID: '',
            DateRangeFrom: '',
            DateRangeTo: '',
            Status: '',
            ContractOpenDate: '',
            ApprovalDate: '',
            ModifiedOn: '',
            PaymentStatus: '',
            ContractType: '',
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            onShowSearchResults();
            console.log('submit: ', data);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, handleSubmit, handleChange, handleBlur, errors, touched }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.RequestDate')}
                  </Form.Label>
                  <Col sm={4}>
                    <DatePickerField name="RequestDate" />
                    {errors.RequestDate && touched.RequestDate && (
                      <p className="small text-danger">{errors.RequestDate}</p>
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.CRN')}
                  </Form.Label>
                  <Col sm={4}>
                    <FieldWithValidation name="CRN" error={errors.CRN} touched={touched.CRN} />
                  </Col>
                  <Form.Label column sm={2}>
                    {t('SearchScreen.ARN')}
                  </Form.Label>
                  <Col sm={4}>
                    <FieldWithValidation name="ARN" error={errors.ARN} touched={touched.ARN} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.ContractNumber')}
                  </Form.Label>
                  <Col sm={4}>
                    <FieldWithValidation
                      name="ContractNumber"
                      error={errors.ContractNumber}
                      touched={touched.ContractNumber}
                    />
                  </Col>
                  <Form.Label column sm={2}>
                    {t('SearchScreen.ContractName')}
                  </Form.Label>
                  <Col sm={4}>
                    {/* <Field type="text" as={Form.Control} name="ContractName" /> */}
                    <FieldWithValidation
                      name="ContractName"
                      error={errors.ContractName}
                      touched={touched.ContractName}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.AnyUniqueID')}
                  </Form.Label>
                  <Col sm={4}>
                    <FieldWithValidation
                      name="AnyUniqueID"
                      error={errors.AnyUniqueID}
                      touched={touched.AnyUniqueID}
                    />
                  </Col>
                  <Form.Label column sm={2}>
                    {t('SearchScreen.UniqueIdType')}
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control
                      name="UniqueIdType"
                      value={values.UniqueIdType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      as="select"
                      custom
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    {errors.UniqueIdType && touched.UniqueIdType && (
                      <p className="small text-danger">{errors.UniqueIdType}</p>
                    )}
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.FileName')}
                  </Form.Label>
                  <Col sm={10}>
                    <FieldWithValidation
                      name="FileName"
                      error={errors.FileName}
                      touched={touched.FileName}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.City')}
                  </Form.Label>
                  <Col sm={4}>
                    <FieldWithValidation name="City" error={errors.City} touched={touched.City} />
                  </Col>
                  <Form.Label column sm={2}>
                    {t('SearchScreen.LesseeNationalID')}
                  </Form.Label>
                  <Col sm={4}>
                    <FieldWithValidation
                      name="LesseeNationalID"
                      error={errors.LesseeNationalID}
                      touched={touched.LesseeNationalID}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.DateRanges')}
                  </Form.Label>
                  <Col sm={10}>
                    <div className="d-flex">
                      <DatePickerField name="DateRangeFrom" />
                      <To>
                        <p>{t('to')}</p>
                      </To>
                      <DatePickerField name="DateRangeTo" minDate={values.DateRangeFrom} />
                    </div>
                    {errors.DateRangeFrom && touched.DateRangeFrom && (
                      <p className="small text-danger">{errors.DateRangeFrom}</p>
                    )}
                    {errors.DateRangeTo && touched.DateRangeTo && (
                      <p className="small text-danger">{errors.DateRangeTo}</p>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.Status')}
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control
                      name="Status"
                      size="lg"
                      value={values.Status}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      as="select"
                      custom
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Form.Control>
                    {errors.Status && touched.Status && (
                      <p className="small text-danger">{errors.Status}</p>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.ContractOpenDate')}
                  </Form.Label>
                  <Col sm={4}>
                    <DatePickerField name="ContractOpenDate" />
                    {errors.ContractOpenDate && touched.ContractOpenDate && (
                      <p className="small text-danger">{errors.ContractOpenDate}</p>
                    )}
                  </Col>
                  <Form.Label column sm={2}>
                    {t('SearchScreen.ApprovalDate')}
                  </Form.Label>
                  <Col sm={4}>
                    <DatePickerField name="ApprovalDate" />
                    {errors.ApprovalDate && touched.ApprovalDate && (
                      <p className="small text-danger">{errors.ApprovalDate}</p>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.ModifiedOn')}
                  </Form.Label>
                  <Col sm={4}>
                    <DatePickerField name="ModifiedOn" />
                    {errors.ModifiedOn && touched.ModifiedOn && (
                      <p className="small text-danger">{errors.ModifiedOn}</p>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="align-items-center">
                  <Form.Label column sm={2}>
                    {t('SearchScreen.PaymentStatus')}
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control
                      name="PaymentStatus"
                      size="lg"
                      value={values.PaymentStatus}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      as="select"
                      custom
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Form.Control>
                    {errors.PaymentStatus && touched.PaymentStatus && (
                      <p className="small text-danger">{errors.PaymentStatus}</p>
                    )}
                  </Col>
                  <Form.Label column sm={2}>
                    {t('SearchScreen.ContractType')}
                  </Form.Label>
                  <Col sm={4}>
                    <Form.Control
                      name="ContractType"
                      size="lg"
                      value={values.ContractType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      as="select"
                      custom
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Form.Control>
                    {errors.ContractType && touched.ContractType && (
                      <p className="small text-danger">{errors.ContractType}</p>
                    )}
                  </Col>
                </Form.Group>
                <ButtonPrimary
                  type="text"
                  disabled={isSubmitting}
                  className=" py-3 px-5"
                  style={{ borderRadius: '30px', backgroundColor: '#00b2e2' }}
                >
                  {t('search')} <i className="fa fa-search ml-2"></i>
                </ButtonPrimary>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default SearchForm;
