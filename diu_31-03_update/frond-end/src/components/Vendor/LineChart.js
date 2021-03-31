import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class LineChart extends React.Component {
  constructor() {
    super();
    this.state = {
      dataLine: [],
    };
    this.getBills();
  }
  getBills() {
    const billDate = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    fetch("http://127.0.0.1:8000/api/bill").then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          dataLine: {
            labels: billDate,
            datasets: [
              {
                label: "Số Đơn hàng",
                fill: true,
                lineTension: 0.3,
                backgroundColor: "rgba(225, 204,230, .3)",
                borderColor: "rgb(205, 130, 158)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgb(205, 130,1 58)",
                pointBackgroundColor: "rgb(255, 255, 255)",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(0, 0, 0)",
                pointHoverBorderColor: "rgba(220, 220, 220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data,
              },
            ],
          },
        });
      });
    });
  }
  render() {
    var { dataLine } = this.state;
    return (
      <MDBContainer>
        {/* <h3 className="mt-5">Line chart</h3> */}
        <Line data={dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default LineChart;
