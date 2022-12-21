function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let randomXAxisNumberOne = getRandomArbitrary(-10, 10);
let randomYaxisNumberOne = getRandomArbitrary(-10, 10);
let randomXAxisNumberTwo = getRandomArbitrary(-10, 10);
let randomYaxisNumberTwo = getRandomArbitrary(-10, 10);
let FirstCoordinates = { x: randomXAxisNumberOne, y: randomYaxisNumberOne };
let SecondCoordinates = { x: randomXAxisNumberTwo, y: randomYaxisNumberTwo };

const data = {
  datasets: [
    {
      label: "Changes Coordinates on refresh",
      data: [FirstCoordinates, SecondCoordinates],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

const numbers = [
  -1, -2, -3, -4, -5, -6, -7, -8, -9, -10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

const config = {
  type: "scatter",
  data: data,
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);
