import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';
import Box from '../../components/framework/Box';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { usePrepareTable } from '../../hooks/prepareTable';
import TableWithPaging from '../../components/framework/TableWithPaging';
import { axiosInstance } from '../../hooks/axiosRequest';
const StripedRows = styled.div`
  padding-top: 20px;
  .row {
    & > div {
      border-left: 1px dashed #ccc;
    }
    :nth-child(odd) {
      background-color: #f9fafd;
    }
  }
`;

// this function split any array into chunks
// [1,2,3,4,5,6] => [[1,2,3],[4,5,6]]
const chunk = (chunkSize, array) => {
  return [].concat.apply(
    [],
    array.map(function (elem, i) {
      return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
    }),
  );
};
function ContractDetails() {
  const [contractDetails, setContractDetails] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const { columns: lessesColumns, data: lessesData } = usePrepareTable('lessees');
  const { columns: certificatesColumns, data: certificatesData } = usePrepareTable('certificates');
  const { t, i18n } = useTranslation();
  const getData = async (api) => {
    const { data } = await axiosInstance.get(`${api}?lang=${i18n.language}`);
    return data;
  };
  useEffect(() => {
    getData('contractdetails').then((res) => {
      setContractDetails(chunk(3, Object.entries(res)));
    });
    getData('contractdetails').then((res) => {
      setPaymentDetails(chunk(3, Object.entries(res)));
    });
  }, [i18n.language]);
  return (
    <>
      <Container>
        <div className="p-4">
          <hr />

          <Box className="mt-5 pt-5" title={t('Services.contractDetails')}>
            <StripedRows>
              {contractDetails.map((row, index) => (
                <Row key={index} className="py-2">
                  {row.map((item, i) => (
                    <Col md={i == 0 ? 5 : i == 1 ? 4 : 3} key={i}>
                      <label className="font-weight-bold ml-4">{t('Services.' + item[0])}: </label>
                      <span>{item[1]}</span>
                    </Col>
                  ))}
                </Row>
              ))}
            </StripedRows>
          </Box>
          <Box className="mt-5 pt-5" title={t('Services.paymentDetails')}>
            <StripedRows>
              {paymentDetails.map((row, index) => (
                <Row key={index} className="py-2">
                  {row.map((item, i) => (
                    <Col md={i == 0 ? 5 : i == 1 ? 4 : 3} key={i}>
                      <label className="font-weight-bold ml-4">{t('Services.' + item[0])}: </label>
                      <span>{item[1]}</span>
                    </Col>
                  ))}
                </Row>
              ))}
            </StripedRows>
          </Box>
        </div>
      </Container>

      <div className="mt-5">
        <TableWithPaging noSorting data={lessesData} columns={lessesColumns}>
          <h3 className="pb-3">{t('Services.lesses')}</h3>
        </TableWithPaging>
      </div>
      <div className="mt-5">
        <TableWithPaging noSorting data={certificatesData} columns={certificatesColumns}>
          <h3 className="pb-3">{t('Services.certificates')}</h3>
        </TableWithPaging>
      </div>
      <div className="mt-5">
        <TableWithPaging noSorting data={certificatesData} columns={certificatesColumns}>
          <h3 className="pb-3">{t('Services.assetsNhistory')}</h3>
        </TableWithPaging>
      </div>
      <div className="mt-5">
        <TableWithPaging noSorting data={certificatesData} columns={certificatesColumns}>
          <h3 className="pb-3">{t('Services.contractPaymentCycles')}</h3>
        </TableWithPaging>
      </div>
      <Container>
        <div className="p-4">
          <div className="mb-3">
            <Button style={{ width: '200px' }} variant="primary">
              {t('Services.requestRepossession')}
            </Button>
            <Button style={{ width: '200px' }} variant="light" className="mx-4">
              {t('Services.cancelRepossession')}
            </Button>
          </div>
          <div className="mb-3">
            <Button style={{ width: '200px' }} variant="primary">
              {t('Services.requestEnforcement')}
            </Button>
            <Button style={{ width: '200px' }} variant="light" className="mx-4">
              {t('Services.cancelEnforcement')}
            </Button>
          </div>
          <div className="mb-3">
            <Button style={{ width: '200px' }} variant="primary">
              {t('Services.requestToR')}
            </Button>
            <Button style={{ width: '200px' }} variant="light" className="mx-4">
              {t('Services.cancelToR')}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(ContractDetails);
