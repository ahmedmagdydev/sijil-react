import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Chart({ data, interval }) {
  const options = {
    chart: {
      type: "spline",
      height: 173,
    },
    title: {
      text: null,
    },
    legend: { enabled: false },
    xAxis: {
      type: "datetime",
      // tickInterval: interval,
      dateTimeLabelFormats: {
        month: "%b",
        year: "%b",
      },
      title: {
        text: null,
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      min: 0,
    },
    tooltip: {
      headerFormat: "",
      pointFormat: " {point.y}",
    },

    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },

    colors: ["#6CF"],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            plotOptions: {
              series: {
                marker: {
                  radius: 2.5,
                },
              },
            },
          },
        },
      ],
    },
    series: data,
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default Chart;
