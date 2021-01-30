import { Field, Formik } from "formik";
import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { DatePickerField } from "../framework/DatePickerField";
import ModalSide from "../framework/ModalSide";
function SearchFilter({ show, onModalHide }) {
  const { t } = useTranslation();
  return (
    <ModalSide show={show} onModalHide={onModalHide} title="Filter By">
      <Formik
        initialValues={{
          DateRanges: "",
          Status: "",
          ApprovalOn: "",
          CreatedOn: "",
          AssetType: "",
          ContractType: "",
          ServiceType: "",
          ServiceStatus: "",
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
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
          resetForm,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t("SearchScreen.DateRanges")}
              </Form.Label>
              <Col sm={7}>
                <DatePickerField name="DateRanges" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t("SearchScreen.Status")}
              </Form.Label>
              <Col sm={7}>
                <Field as={Form.Control} name="Status" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t("SearchScreen.ApprovalOn")}
              </Form.Label>
              <Col sm={7}>
                <DatePickerField name="ApprovalOn" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t("SearchScreen.CreatedOn")}
              </Form.Label>
              <Col sm={7}>
                <DatePickerField name="CreatedOn" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t("SearchScreen.AssetType")}
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  value={values.AssetType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  as="select"
                  custom
                  name="AssetType"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t("SearchScreen.ContractType")}
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  value={values.ContractType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  as="select"
                  custom
                  name="ContractType"
                >
                  <option>1</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t("SearchScreen.ServiceType")}
              </Form.Label>
              <Col sm={7}>
                <Form.Control
                  value={values.ServiceType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  as="select"
                  custom
                  name="ServiceType"
                >
                  <option>1</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="align-items-center">
              <Form.Label column sm={5}>
                {t("SearchScreen.ServiceStatus")}
              </Form.Label>
              <Col sm={7}>
                <Field as={Form.Control} name="ServiceStatus" />
              </Col>
            </Form.Group>
            <div className="d-flex pt-3">
              <Button
                type="submit"
                className="flex-grow-1 mr-2"
                variant="primary"
              >
                Apply Filter
              </Button>
              <Button
                className="flex-grow-1"
                variant="light"
                onClick={resetForm}
              >
                Reset Filter
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalSide>
  );
}

export default SearchFilter;
