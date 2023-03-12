const fs = require("fs");

const parseInput = (input) => {
  return (lines = fs
    .readFileSync(input, { encoding: "utf8" })
    .split("\n")
    .map((x) => x));
};

module.exports = {
  parseInput,
};
