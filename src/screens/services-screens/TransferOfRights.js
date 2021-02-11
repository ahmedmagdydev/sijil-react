import React from 'react';
import { hot } from 'react-hot-loader';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Factoring from '../../components/transfer-of-rights/Factoring';
import SalesOfAssets from '../../components/transfer-of-rights/SalesOfAssets';
import { useTranslation } from 'react-i18next';

function TransferOfRights() {
  const { t } = useTranslation();
  return (
    <Container>
      <Tabs defaultActiveKey="factoring">
        <Tab eventKey="factoring" title={t('Factoring')}>
          <Factoring />
        </Tab>
        <Tab eventKey="saleOfAssets" title={t('Sale Of Assets')}>
          <SalesOfAssets />
        </Tab>
      </Tabs>
    </Container>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(TransferOfRights);
