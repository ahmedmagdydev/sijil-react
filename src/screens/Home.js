import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import Chart from '../components/framework/Chart';
import Box from '../components/framework/Box';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ServiceStatuses from '../components/home/ServiceStatuses';
import Requests from '../components/home/Requests';
import { useTranslation } from 'react-i18next';
import NumberOfClients from '../components/home/NumberOfClients';

import Row from 'react-bootstrap/Row';
import { axiosInstance } from '../hooks/axiosRequest';
function Home() {
  const changeData = async (rate) => {
    const { data } = await axiosInstance.get(`lessoracceptance?period=${rate}`);
    setLessorRate(data);
    setActivePeriod(rate);
  };
  const getServiceRequests = async () => {
    const { data } = await axiosInstance.get(`lessoracceptance?period=monthly`);
    setServiceRequests(data);
  };
  const [lessorRate, setLessorRate] = useState();
  const [activePeriod, setActivePeriod] = useState();
  const [serviceRequests, setServiceRequests] = useState();
  useEffect(() => {
    changeData('weekly');
    getServiceRequests();
  }, []);
  const { t, i18n } = useTranslation();
  const isActive = (period) => {
    return activePeriod == period ? 'active' : '';
  };
  return (
    <Container>
      <div className="px-4 pt-4">
        <div className="row">
          <div className="col-md-7">
            <Box title={t('LessorAcceptanceRate')}>
              <Chart data={lessorRate} />
              <div className="d-flex justify-content-between px-4 flex-wrap">
                <Button
                  onClick={() => {
                    changeData('weekly');
                  }}
                  className={`flex-grow-1 mr-1 ${isActive('weekly')}`}
                  variant="outline-primary"
                >
                  {t('Weekly')}
                </Button>
                <Button
                  className={`flex-grow-1 mr-1 ${isActive('monthly')}`}
                  variant="outline-primary"
                  onClick={() => {
                    changeData('monthly');
                  }}
                >
                  {t('Monthly')}
                </Button>
                <Button
                  className={`flex-grow-1 mr-1 ${isActive('sixMonths')}`}
                  variant="outline-primary"
                  onClick={() => {
                    changeData('sixMonths');
                  }}
                >
                  {t('6 months')}
                </Button>
                <Button
                  className={`flex-grow-1 ${isActive('yearly')}`}
                  variant="outline-primary"
                  onClick={() => {
                    changeData('yearly');
                  }}
                >
                  {t('Yearly')}
                </Button>
              </div>
            </Box>
            <Box title={t('Service Request by month')}>
              <Chart data={serviceRequests} />
            </Box>
          </div>
          <div className="col-md-5">
            <Box title={t('Service Statuses')}>
              <ServiceStatuses />
            </Box>
            <Box title={t('Number Of Clients')}>
              <NumberOfClients />
            </Box>
          </div>
        </div>
        <div className="d-flex p-3 py-4 font-weight-bold">
          <h5>{t('requests')}</h5>
          <a href="#" className={i18n.language == 'en' ? 'ml-auto' : 'mr-auto'}>
            {t('Show All Requests')}{' '}
            <i className={i18n.language == 'en' ? 'fa fa-angle-right' : 'fa fa-angle-left'}></i>
          </a>
        </div>
      </div>
      <Row>
        <Requests />
      </Row>
    </Container>
  );
}
// eslint-disable-next-line no-undef
export default hot(module)(Home);
