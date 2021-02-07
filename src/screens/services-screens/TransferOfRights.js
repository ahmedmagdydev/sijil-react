import React from 'react';
import { hot } from 'react-hot-loader';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Factoring from '../../components/transfer-of-rights/Factoring';
import SalesOfAssets from '../../components/transfer-of-rights/SalesOfAssets';

function TransferOfRights() {
  return (
    <Container>
      <Tabs defaultActiveKey="factoring">
        <Tab eventKey="factoring" title="Factoring">
          <Factoring />
        </Tab>
        <Tab eventKey="saleOfAssets" title="Sale Of Assets">
          <SalesOfAssets />
        </Tab>
      </Tabs>
    </Container>
  );
}

// eslint-disable-next-line no-undef
export default hot(module)(TransferOfRights);
