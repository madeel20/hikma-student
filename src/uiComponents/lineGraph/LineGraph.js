import React, { Component } from "react";
import Chart from "chart.js";

export class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const {
      data,
      labels,

      type = "line",
      colors = ["rgba(255, 255, 255, 0.15)", "rgba(255, 255, 255, 0.0001)"],
    } = this.props;

    const { height: graphHeight } = myChartRef.canvas;
    console.log(graphHeight);

    let gradientLine = myChartRef.createLinearGradient(0, 0, 0, graphHeight);
    gradientLine.addColorStop(0, colors[0]);
    gradientLine.addColorStop(1, colors[1]);
    new Chart(myChartRef, {
      type: type,
      data: {
        //Bring in data
        labels: labels,

        datasets: [
          {
            label: "",
            data: data,
            borderColor: "white",
            backgroundColor: gradientLine,
            pointBackgroundColor: "#3538A1",
            pointHoverBorderColor: "white",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: true,
                fontFamily: "HKGrotesk-Medium",
                fontColor: "white",
                fontSize: 10,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: { display: false },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
      },
    });
  };

  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}
export class LineGraph2 extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const {
      data,
      labels,

      type = "line",
      colors = ["rgba(255, 255, 255, 0.15)", "rgba(255, 255, 255, 0.0001)"],
    } = this.props;

    const { height: graphHeight } = myChartRef.canvas;
    let gradientLine = myChartRef.createLinearGradient(0, 0, 0, graphHeight);
    gradientLine.addColorStop(0, "rgba(16, 199, 227, 0.2)");
    gradientLine.addColorStop(0.7, "rgba(16, 199, 227, 0.05)");
    gradientLine.addColorStop(1, "rgba(16, 199, 227, 0.01)");

    new Chart(myChartRef, {
      type: type,
      data: {
        //Bring in data
        labels: labels,

        datasets: [
          {
            label: "",
            data: data,
            lineTension: 0.2,
            borderColor: "#10C7E3",
            backgroundColor: gradientLine,
            pointBackgroundColor: "white",
            pointHoverBorderColor: "#10C7E3",
            pointBorderWidth: 1,
            pointHoverBorderWidth: 1,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: true,
                fontFamily: "HKGrotesk-Medium",
                fontColor: "rgba(120, 125, 152, 0.4)",
                fontSize: 10,
                min: 0,
                max: 10,
                stepSize: 2,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
        layout: {
          padding: {
            left: -5,
            right: 4,
            top: 0,
            bottom: 0,
          },
        },
      },
    });
  };

  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}
// import React, { Component } from 'react'
// import Chart from "chart.js";

// export default class LineGraph extends Component {
//     chartRef = React.createRef();
//
//     componentDidMount() {
//         this.buildChart();
//     }
//
//     componentDidUpdate() {
//         this.buildChart();
//     }
//
//     renderColors = () => {
//
//     }
//
//     buildChart = () => {
//         const myChartRef = this.chartRef.current.getContext("2d");
//         const { data, labels, type = 'line', datasets } = this.props;
//
//         const {height: graphHeight} = myChartRef.canvas;
//         new Chart(myChartRef, {
//             type: type,
//             data: {
//                 //Bring in data
//                 labels: labels,
//                 datasets: datasets(myChartRef, graphHeight, data)
//             },
//             options: {
//                 responsive: true,
//                 legend: {
//                     display: false
//                 },
//                 scales: {
//                     xAxes: [{
//                         ticks: {
//                             display: true,
//                             fontFamily: 'HKGrotesk-Medium',
//                             fontColor: 'white',
//                             fontSize: 10
//                         },
//                         gridLines: {
//                             display: false,
//                             drawBorder: false
//                         }
//                     }],
//                     yAxes: [{
//                         ticks: { display: false },
//                         gridLines: {
//                             display: false,
//                             drawBorder: false
//                         }
//                     }],
//                 },
//                 layout: {
//                     padding: {
//                         left: 0,
//                         right: 0,
//                         top: 0,
//                         bottom: 0
//                     },
//
//                 },
//             }
//         });
//     }
//
//     render() {
//         return (
//             <canvas
//                 id="myChart"
//                 ref={this.chartRef}
//             />
//         )
//     }
// }
