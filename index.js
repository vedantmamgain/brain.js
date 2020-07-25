const brain = require("brain.js");
const net = new brain.NeuralNetwork();

net.train([
  { input: [1, 2], output: [1] },
  { input: [1, 3], output: [1] },
  { input: [2, 3], output: [0] },
  { input: [2, 4], output: [1] },
  { input: [3, 4], output: [0] },
]);

const output = net.run([1, 4]); // [0.987]
console.log(output);
