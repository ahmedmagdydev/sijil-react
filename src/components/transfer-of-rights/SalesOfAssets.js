import { Field, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { useTranslation } from 'react-i18next';
import GroupInput from '../framework/GroupInput';
import GroupFileInput from '../framework/GroupFileInput';

const SalesOfAssetsStyle = styled.div`
  background: #fff;
  .arnNumbers {
    background: #ebeef9;
    &-title {
      background: #09375d;
      text-align: center;
      color: #fff;
      padding: 16px;
    }
    &-values {
      padding: 10px 15px;
      button {
        color: #aac3dc;
      }
    }
  }
  .fa {
    color: #aac3dc;
  }
`;
function SalesOfAssets() {
  const { t, i18n } = useTranslation();
  const removeArn = (toBeRemoved, arnArray) => {
    return arnArray.filter((item) => {
      return item != toBeRemoved;
    });
  };
  const removeSamaNoObjectionLetter = (toBeRemoved, array) => {
    return array.filter((item) => {
      return item.name != toBeRemoved.name ? item : null;
    });
  };
  return (
    <SalesOfAssetsStyle className="p-5">
      <Formik
        initialValues={{
          DisposalAgreement: '',
          BuyerCode: '',
          TransferType: '',
          ARN: [],
          samaNoObjectionLetter: [],
          otherAttachmetOptional: [],
          numberOfOverDueContracts: '',
          dealAmmountSAR: '',
          overdueInstallmentBalance: '',
          disclaimerAgreement: false,
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
          console.log(`🚀 ~ file: Factoring.js ~ line 74 ~ data`, data);
        }}
      >
        {({
          values,
          isSubmitting,
          handleSubmit,

          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={7}>
                <Form.Group as={Row}>
                  <Form.Label column sm={5}>
                    {t('Services.DisposalAgreement')}
                  </Form.Label>
                  <Col sm={7}>
                    <Field
                      as={Form.Check}
                      name="DisposalAgreement"
                      value="Recourse"
                      type="radio"
                      label={t('Services.Recourse')}
                      id="Recourse"
                    />
                    <Field
                      as={Form.Check}
                      name="DisposalAgreement"
                      type="radio"
                      label={t('Services.PartialRecourse')}
                      id="Partial Recourse"
                      value="Partial Recourse"
                    />
                    <Field
                      as={Form.Check}
                      name="DisposalAgreement"
                      type="radio"
                      label={t('Services.WithoutRecourse')}
                      id="Without Recourse"
                      value="Without Recourse"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={5}>
                    {t('Services.BuyerCode')}
                  </Form.Label>
                  <Col sm={7}>
                    <GroupInput
                      lang={i18n.language}
                      label={t('Add')}
                      placeholder={t('Services.PleaseAddMemberId')}
                      handleClick={(e) => {
                        alert('Entered Member ID is : ' + e);
                        setFieldValue('BuyerCode', e);
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={5}>
                    {t('Services.TransferType')}
                  </Form.Label>
                  <Col sm={7}>
                    <Field
                      as={Form.Check}
                      name="TransferType"
                      value="Assets"
                      type="radio"
                      label={t('Services.Assets')}
                      id="Assets"
                    />
                    <Field
                      as={Form.Check}
                      name="TransferType"
                      type="radio"
                      label={t('Services.Contracts')}
                      id="Contracts"
                      value="Contracts"
                    />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                  <Form.Label column sm={5}></Form.Label>
                  <Col sm={7}>
                    <Row>
                      <Col md="4">
                        <Form.Check
                          name="ArnOrBulk"
                          value="ARN"
                          id="ARN"
                          type="radio"
                          label={t('Services.EnterARN')}
                        />
                      </Col>
                      <Col md="8">
                        <Form.Check
                          name="ArnOrBulk"
                          type="radio"
                          label={t('Services.BulkUploadMax10assets')}
                          value="Bulk"
                          id="Bulk"
                        />
                      </Col>
                    </Row>
                    <GroupInput
                      lang={i18n.language}
                      placeholder={t('Services.PleaseEnterARNNumber')}
                      label={t('Add')}
                      handleClick={(e) => {
                        if (e.length > 0) setFieldValue('ARN', [...values.ARN, e]);
                      }}
                    />
                    <div className="arnNumbers mt-3">
                      <div className="arnNumbers-title">ARN</div>
                      <div className="arnNumbers-values">
                        {values.ARN.length == 0 ? t('Services.NoRecordstoDisplay') : null}
                        {values.ARN.map((arn) => (
                          <div
                            key={arn}
                            className="d-flex align-items-center justify-content-between"
                          >
                            <div>{arn}</div>
                            <button
                              type="button"
                              className="btn btn-link"
                              onClick={() => {
                                setFieldValue('ARN', removeArn(arn, values.ARN));
                              }}
                            >
                              <i className="fa fa-close"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Form.Group>
                <br />

                <br />
                <Form.Group as={Row}>
                  <Form.Label column sm={5}>
                    {t('Services.SamaNoObjectionLetter')}
                  </Form.Label>
                  <Col sm={7}>
                    {values.samaNoObjectionLetter.length > 0 ? (
                      <>
                        {values.samaNoObjectionLetter.map((item, index) => (
                          <div className="d-flex file-preview align-items-center" key={index}>
                            <i className="fa fa-file"></i>
                            <p className="px-3 my-0">{item.name}</p>
                            <button
                              type="button"
                              className="btn btn-link ml-auto"
                              onClick={() => {
                                setFieldValue(
                                  'samaNoObjectionLetter',
                                  removeSamaNoObjectionLetter(item, values.samaNoObjectionLetter),
                                );
                              }}
                            >
                              <i className="fa fa-close"></i>
                            </button>
                          </div>
                        ))}
                        <br />
                      </>
                    ) : null}
                    <GroupFileInput
                      lang={i18n.language}
                      name="fileInput"
                      id={'samaNoObjectionLetter'}
                      placeholder="Allowed Files JPG,PDF,JPEG,PNG"
                      handleClick={(e) => {
                        if (e)
                          setFieldValue('samaNoObjectionLetter', [
                            ...values.samaNoObjectionLetter,
                            e,
                          ]);
                      }}
                    />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                  <Form.Label column sm={5}>
                    {t('Services.otherAttachmetOptional')}
                  </Form.Label>
                  <Col sm={7}>
                    {values.otherAttachmetOptional.length > 0 ? (
                      <>
                        {' '}
                        {values.otherAttachmetOptional.map((item, index) => (
                          <div className="d-flex file-preview align-items-center" key={index}>
                            <i className="fa fa-file"></i>
                            <p className="px-3 my-0">{item.name}</p>
                            <button
                              type="button"
                              className="btn btn-link ml-auto"
                              onClick={() => {
                                setFieldValue(
                                  'otherAttachmetOptional',
                                  removeSamaNoObjectionLetter(item, values.otherAttachmetOptional),
                                );
                              }}
                            >
                              <i className="fa fa-close"></i>
                            </button>
                          </div>
                        ))}
                        <br />
                      </>
                    ) : null}
                    <GroupFileInput
                      lang={i18n.language}
                      id={'otherAttachmetOptional'}
                      name="fileInput"
                      placeholder="Allowed Files JPG,PDF,JPEG,PNG"
                      handleClick={(e) => {
                        if (e)
                          setFieldValue('otherAttachmetOptional', [
                            ...values.otherAttachmetOptional,
                            e,
                          ]);
                      }}
                    />
                  </Col>
                </Form.Group>
                <br />
                <Form.Group as={Row}>
                  <Form.Label column sm={5}>
                    {t('Services.numberOfOverDueContracts')}
                  </Form.Label>
                  <Col sm={7}>
                    <Field as={Form.Control} name="numberOfOverDueContracts" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={5}>
                    {t('Services.dealAmmountSAR')}
                  </Form.Label>
                  <Col sm={7}>
                    <Field as={Form.Control} name="dealAmmountSAR" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={5}>
                    {t('Services.overdueInstallmentBalance')}
                  </Form.Label>
                  <Col sm={7}>
                    <Field as={Form.Control} name="overdueInstallmentBalance" />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <hr />
            <h4 className="text-primary">{t('disclaimer')}</h4>
            <div className="p-4 bg-light my-3">
              <ul className="px-4">
                <li>Lorem, ipsum dolor.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facilis
                  repudiandae impedit quos consequuntur itaque ut magnam quo minus repellat.
                </li>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque!</li>
              </ul>
              <Field
                as={Form.Check}
                className="text-weight-bold"
                type="checkbox"
                label={t('agree')}
                id="disclaimerAgreement"
                name="disclaimerAgreement"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-grow-1 mr-2"
              variant="primary"
            >
              {t('submit')}
            </Button>
          </Form>
        )}
      </Formik>
    </SalesOfAssetsStyle>
  );
}

export default SalesOfAssets;
