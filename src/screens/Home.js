import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import Chart from "../components/framework/Chart";
import Box from "../components/framework/Box";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ServiceStatuses from "../components/home/ServiceStatuses";
import Requests from "../components/home/Requests";
import { useTranslation } from "react-i18next";
import NumberOfClients from "../components/home/NumberOfClients";
import axios from "axios";
function Home() {
  const changeData = async (rate) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/lessoracceptance?period=${rate}`
    );
    setLessorRate(data);
    setActivePeriod(rate);
  };
  const getServiceRequests = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/lessoracceptance?period=monthly`
    );
    setServiceRequests(data);
  };
  const [lessorRate, setLessorRate] = useState();
  const [activePeriod, setActivePeriod] = useState();
  const [serviceRequests, setServiceRequests] = useState();
  useEffect(() => {
    changeData("weekly");
    getServiceRequests();
  }, []);
  const { t } = useTranslation();
  const isActive = (period) => {
    return activePeriod == period ? "active" : "";
  };
  return (
    <Container>
      <div className="p-4">
        <div className="row">
          <div className="col-md-7">
            <Box title={t("LessorAcceptanceRate")}>
              <Chart data={lessorRate} />
              <div className="d-flex justify-content-between px-4">
                <Button
                  onClick={() => {
                    changeData("weekly");
                  }}
                  className={`flex-grow-1 mr-1 ${isActive("weekly")}`}
                  variant="outline-primary"
                >
                  Weekly
                </Button>
                <Button
                  className={`flex-grow-1 mr-1 ${isActive("monthly")}`}
                  variant="outline-primary"
                  onClick={() => {
                    changeData("monthly");
                  }}
                >
                  Monthly
                </Button>
                <Button
                  className={`flex-grow-1 mr-1 ${isActive("sixMonths")}`}
                  variant="outline-primary"
                  onClick={() => {
                    changeData("sixMonths");
                  }}
                >
                  6 months
                </Button>
                <Button
                  className={`flex-grow-1 ${isActive("yearly")}`}
                  variant="outline-primary"
                  onClick={() => {
                    changeData("yearly");
                  }}
                >
                  Yearly
                </Button>
              </div>
            </Box>
            <Box title="Service Request by month">
              <Chart data={serviceRequests} />
            </Box>
          </div>
          <div className="col-md-5">
            <Box title="Service Statuses">
              <ServiceStatuses />
            </Box>
            <Box title="Number Of Clients">
              <NumberOfClients />
            </Box>
          </div>
        </div>
        <div className="d-flex p-3 py-4 font-weight-bold">
          <h5>Requests</h5>
          <a href="#" className="ml-auto">
            Show All Requests <i className="fa fa-angle-right"></i>
          </a>
        </div>
        <Box>
          <Requests />
        </Box>
      </div>
    </Container>
  );
}
// eslint-disable-next-line no-undef
export default hot(module)(Home);
