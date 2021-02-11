import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import Box from '../framework/Box';

import { Select, ModalCloseButton, CaretIcon } from 'react-responsive-select';
function CompanyName({ setAddedCompanies, addedCompanies, companies }) {
  const { t } = useTranslation();
  return (
    <Container>
      <Box title={t('companyName')}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setAddedCompanies(e.target[0].value.split(','));
          }}
        >
          <Form.Group as={Row}>
            <Col sm={8}>
              <Select
                as={Form.Control}
                multiselect={true}
                name="make6"
                selectedValues={addedCompanies}
                modalCloseButton={<ModalCloseButton />}
                noSelectionLabel="Please select"
                options={companies}
                caretIcon={<CaretIcon />}
                onSubmit={() => console.log('onSubmit')}
              />
            </Col>
            <Col sm={4}>
              <Button type="submit" variant="primary">
                {t('Add')}
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Box>
      <div className="table-responsive mt-4">
        <table className="table">
          <thead>
            <tr>
              <th>{t('company')}</th>
              <th>{t('remove')}</th>
            </tr>
          </thead>
          <tbody>
            {addedCompanies.map((item, index) => (
              <tr key={index}>
                <td>
                  <div>{item}</div>
                </td>
                <td>
                  <div>
                    <Button
                      variant="link"
                      onClick={() => {
                        setAddedCompanies(addedCompanies.filter((item, i) => i != index));
                      }}
                    >
                      <i className="fa fa-close"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default CompanyName;
