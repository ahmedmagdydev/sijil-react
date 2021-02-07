import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader';
import Container from 'react-bootstrap/Container';
import Box from '../../components/framework/Box';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { apiBaseUrl } from '../../constants/api';
const StripedRows = styled.div`
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
  const { t, i18n } = useTranslation();
  const getData = async (api) => {
    const { data } = await axios.get(`${apiBaseUrl}/api/${api}?lang=${i18n.language}`);
    return data;
  };
  useEffect(() => {
    getData('contractdetails').then((res) => {
      setContractDetails(chunk(3, Object.entries(res)));
    });
  }, [i18n.language]);
  return (
    <Container>
      <div className="p-4">
        <hr />

        <Box className="mt-5" title={t('Services.contractDetails')}>
          <StripedRows>
            {contractDetails.map((row, index) => (
              <Row key={index} className="py-2">
                {row.map((item, i) => (
                  <Col md={i == 0 ? 5 : i == 1 ? 4 : 3} key={i}>
                    <label className="font-weight-bold">{t('Services.' + item[0])}: </label>
                    <span>{item[1]}</span>
                  </Col>
                ))}
              </Row>
            ))}
          </StripedRows>
        </Box>
      </div>
    </Container>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(ContractDetails);
