const fs = require("fs");
const lines = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .trim() // remove whitespaces
  .split("\n")
  .map((x) => x.split(" "));

countCycles = 0;
let X = 1;

const getSignal = (cycle) => {
  const signals = [20, 60, 100, 140, 180, 220];
  for (const signal of signals) {
    if (signal === cycle) {
      return signal;
    }
  }
};
const parseInstruction = (line) => {
  const [instruction, value] = line;
  if (instruction === "noop") {
    countCycles++;
    const signal = getSignal(countCycles);
    const res = signal !== undefined ? X * signal : 0;
    total.push(res);
    return;
  } else {
    for (let i = 0; i < 2; i++) {
      countCycles++;
      const signal = getSignal(countCycles);
      const res = signal !== undefined ? X * signal : 0;
      total.push(res);
    }
  }
  X += +value;
};
const total = [];
const part1 = () => {
  for (const line of lines) {
    parseInstruction(line);
  }
};

part1();
const sum = total.reduce((a, b) => a + b);
console.log(sum);
