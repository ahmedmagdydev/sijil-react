import React, { useState } from "react";
import { hot } from "react-hot-loader";
import Chart from "../components/Chart";
import Box from "../components/framework/Box";
import { data } from "../lessorAcceptanceRate";
import { _rows, _columns } from "../components/home/ServiceStatusesData";
import { Container, Button } from "react-bootstrap";
import ServiceStatuses from "../components/home/ServiceStatuses";
import Requests from "../components/home/Requests";

function Home() {
  const changeData = (rate, interval) => {
    const _data = data[rate];
    setLessorRate({ data: _data, interval });
  };
  const [lessorRate, setLessorRate] = useState({
    data: data["yearly"],
    interval: 1000 * 3600 * 24 * 30,
  });
  return (
    <Container className="">
      <div className="p-4">
        <div className="row">
          <div className="col-md-7">
            <Box title="Lessor Acceptance Rate">
              <Chart data={lessorRate.data} interval={lessorRate.interval} />
              <div className="d-flex justify-content-between px-4">
                <Button className="flex-grow-1 mr-1" variant="outline-primary">
                  Weekly
                </Button>
                <Button
                  className="flex-grow-1 mr-1"
                  variant="outline-primary"
                  onClick={() => {
                    changeData("monthly", 1000 * 3600 * 24);
                  }}
                >
                  Monthly
                </Button>
                <Button
                  className="flex-grow-1 mr-1"
                  variant="outline-primary"
                  onClick={() => {
                    changeData("sixMonths", (1000 * 3600 * 24 * 30) / 2);
                  }}
                >
                  6 months
                </Button>
                <Button
                  className="flex-grow-1"
                  variant="outline-primary"
                  onClick={() => {
                    changeData("yearly", 1000 * 3600 * 24 * 30);
                  }}
                >
                  Yearly
                </Button>
              </div>
            </Box>
            <Box title="Service Request by month">
              <Chart data={data.monthly} interval={1000 * 3600 * 24} />
            </Box>
          </div>
          <div className="col-md-5">
            <Box title="Service Statuses">
              <ServiceStatuses />
            </Box>
            <Box title="Number Of Clients">
              <div className="px-4 d-flex align-items-center justify-content-between">
                <div>
                  <i className="fa fa-user"></i>
                </div>
                <h3>1,234</h3>
                <div className="chart">chart</div>
              </div>
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
export default hot(module)(Home);
