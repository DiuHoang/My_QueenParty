import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class BarChart extends React.Component {
  state = {
    dataBar: {
      labels: ["Tổng đơn hàng", "Tổng khách hàng", "Tổng lợi nhuận"],
      datasets: [
        {
          label: "% of Tổng đơn hàng",
          data: [1, 2, 1],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
          ],
        },
      ],
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  render() {
    return (
      <MDBContainer>
        <h5 style={{ height: "550px" }}>
          <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
        </h5>
      </MDBContainer>
    );
  }
}

export default BarChart;
