import React from "react";
import { Formik, Field } from "formik";
import { Container, Form, Row, Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import ButtonPrimary from "../framework/ButtonPrimary";
import { DatePickerField } from "../framework/DatePickerField";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
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
function SearchForm({ onShowSearchResults }) {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <hr />
      <div className="p-2 pl-3 pr-5">
        <Formik
          initialValues={{
            RequestDate: "",
            CRN: "",
            ARN: "",
            ContractNumber: "",
            ContractType: "",
            AnyUniqueID: "",
            UniqueIdType: "",
            FileName: "",
            City: "",
            LesseeNationalID: "",
            DateRangeFrom: "",
            DateRangeTo: "",
            Status: "",
            ContractOpenDate: "",
            ApprovalDate: "",
            ModifiedOn: "",
            PaymentStatus: "",
            ContractType: "",
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            onShowSearchResults();
            console.log("submit: ", data);
            setSubmitting(false);
          }}
        >
          {({
            values,
            isSubmitting,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.RequestDate")}
                </Form.Label>
                <Col sm={4}>
                  <DatePickerField name="RequestDate" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.CRN")}
                </Form.Label>
                <Col sm={4}>
                  <Field type="text" as={Form.Control} name="CRN" />
                </Col>
                <Form.Label column sm={2}>
                  {t("SearchScreen.ARN")}
                </Form.Label>
                <Col sm={4}>
                  <Field type="text" as={Form.Control} name="ARN" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.ContractNumber")}
                </Form.Label>
                <Col sm={4}>
                  <Field type="text" as={Form.Control} name="ContractNumber" />
                </Col>
                <Form.Label column sm={2}>
                  {t("SearchScreen.ContractType")}
                </Form.Label>
                <Col sm={4}>
                  <Field type="text" as={Form.Control} name="ContractType" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.AnyUniqueID")}
                </Form.Label>
                <Col sm={4}>
                  <Field type="text" as={Form.Control} name="AnyUniqueID" />
                </Col>
                <Form.Label column sm={2}>
                  {t("SearchScreen.UniqueIdType")}
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
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.FileName")}
                </Form.Label>
                <Col sm={10}>
                  <Field type="text" as={Form.Control} name="FileName" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.City")}
                </Form.Label>
                <Col sm={4}>
                  <Field type="text" as={Form.Control} name="City" />
                </Col>
                <Form.Label column sm={2}>
                  {t("SearchScreen.LesseeNationalID")}
                </Form.Label>
                <Col sm={4}>
                  <Field
                    type="text"
                    as={Form.Control}
                    name="LesseeNationalID"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.DateRanges")}
                </Form.Label>
                <Col sm={10}>
                  <div className="d-flex">
                    <DatePickerField name="DateRangeFrom" />
                    <To>
                      <p>{t("to")}</p>
                    </To>
                    <DatePickerField
                      name="DateRangeTo"
                      minDate={values.DateRangeFrom}
                    />
                  </div>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.Status")}
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    name="Status"
                    size="lg"
                    value={values.UniqueIdType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    as="select"
                    custom
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.ContractOpenDate")}
                </Form.Label>
                <Col sm={4}>
                  <Field
                    type="date"
                    as={Form.Control}
                    name="ContractOpenDate"
                  />
                </Col>
                <Form.Label column sm={2}>
                  {t("SearchScreen.ApprovalDate")}
                </Form.Label>
                <Col sm={4}>
                  <Field type="date" as={Form.Control} name="ApprovalDate" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.ModifiedOn")}
                </Form.Label>
                <Col sm={4}>
                  <Field type="date" as={Form.Control} name="ModifiedOn" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="align-items-center">
                <Form.Label column sm={2}>
                  {t("SearchScreen.PaymentStatus")}
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    name="PaymentStatus"
                    size="lg"
                    value={values.UniqueIdType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    as="select"
                    custom
                  >
                    <option value="1">1</option>
                  </Form.Control>
                </Col>
                <Form.Label column sm={2}>
                  {t("SearchScreen.ContractType")}
                </Form.Label>
                <Col sm={4}>
                  <Form.Control
                    name="ContractType"
                    size="lg"
                    value={values.UniqueIdType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    as="select"
                    custom
                  >
                    <option value="1">1</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <ButtonPrimary
                type="text"
                disabled={isSubmitting}
                className=" py-3 px-5"
                style={{ borderRadius: "30px", backgroundColor: "#00b2e2" }}
              >
                Search <i className="fa fa-search ml-2"></i>
              </ButtonPrimary>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SearchForm;
