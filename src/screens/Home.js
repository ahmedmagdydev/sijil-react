import React, { useState } from "react";
import { hot } from "react-hot-loader";
import Chart from "../components/Chart";
import Box from "../components/framework/Box";
import Button from "../components/framework/Button";
import { data } from "../lessorAcceptanceRate";
import { _rows, _columns } from "../serviceStatuses";
import { Container } from "react-bootstrap";

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
              <div className="flex justify-between">
                <Button>Weekly</Button>
                <Button
                  onClick={() => {
                    changeData("monthly", 1000 * 3600 * 24);
                  }}
                >
                  Monthly
                </Button>
                <Button
                  onClick={() => {
                    changeData("sixMonths", (1000 * 3600 * 24 * 30) / 2);
                  }}
                >
                  6 months
                </Button>
                <Button
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
            <Box title="Service Statuses"></Box>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default hot(module)(Home);
