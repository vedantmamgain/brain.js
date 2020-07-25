const brain = require("brain.js");
const data = require("./training.json");

const network = new brain.recurrent.LSTM();

const trainingData = data.map((item) => ({
  input: item.text,
  output: item.category,
}));

network.train(trainingData, {
  iterations: 2000,
});
const output = network.run("Is that github repo fixed");
console.log(output);
