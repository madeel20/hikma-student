const firstOptions = {
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
};
const whiteGradientLine = (ref, graphHeight) => {
  let data = ref.createLinearGradient(0, 0, 0, graphHeight);
  data.addColorStop(0, "rgba(255, 255, 255, 0.15)");
  data.addColorStop(1, "rgba(255, 255, 255, 0.0001)");
  return data;
};
const firstDataSets = (ref, graphHeight, data) => [
  {
    label: "",
    data: data,
    borderColor: "white",
    backgroundColor: whiteGradientLine(ref, graphHeight),
    pointBackgroundColor: "#3538A1",
    pointHoverBorderColor: "white",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    borderWidth: 1,
  },
];

const secondOptions = {
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
          fontColor: "red",
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
};
const lightBlueGradientLine = (ref, graphHeight) => {
  let data = ref.createLinearGradient(0, 0, 0, graphHeight);
  data.addColorStop(0, "rgba(16, 199, 227, 0.2)");
  data.addColorStop(0.7, "rgba(16, 199, 227, 0.05)");
  data.addColorStop(1, "rgba(16, 199, 227, 0.01)");
  return data;
};
const secondDataSets = (ref, graphHeight, data) => [
  {
    label: "",
    data: data,
    borderColor: "#10C7E3",
    backgroundColor: lightBlueGradientLine(ref, graphHeight),
    pointBackgroundColor: "white",
    pointBorderColor: "#10C7E3",
    pointBorderWidth: 1,
    borderWidth: 1,
  },
];
export { firstOptions, firstDataSets, secondOptions, secondDataSets };
