const fs = require("fs");
const lines = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .split("\n")
  .map((x) => x);

const x = 1; // 1 pierre
const y = 2; // 2 feuille
const z = 3; // 3 ciseau
const score1 = [],
  score2 = [];

for (let i = 0; i < lines.length; i++) {
  switch (lines[i]) {
    case "A Y":
      score1.push(y + 6);
      break;
    case "A X":
      score1.push(x + 3);
      break;
    case "A Z":
      score1.push(z + 0);
      break;
    case "B X":
      score1.push(x + 0);
      break;
    case "B Y":
      score1.push(y + 3);
      break;
    case "B Z":
      score1.push(z + 6);
      break;
    case "C X":
      score1.push(x + 6);
      break;
    case "C Y":
      score1.push(y + 0);
      break;
    case "C Z":
      score1.push(z + 3);
      break;
    default:
      break;
  }
}

for (let i = 0; i < lines.length; i++) {
  switch (lines[i]) {
    case "A Y":
      score2.push(x + 3);
      break;
    case "A X":
      score2.push(z + 0);
      break;
    case "A Z":
      score2.push(y + 6);
      break;
    case "B X":
      score2.push(x + 0);
      break;
    case "B Y":
      score2.push(y + 3);
      break;
    case "B Z":
      score2.push(z + 6);
      break;
    case "C X":
      score2.push(y + 0);
      break;
    case "C Y":
      score2.push(z + 3);
      break;
    case "C Z":
      score2.push(x + 6);
      break;
    default:
      break;
  }
}
const result1 = score1.reduce((prev, curr) => prev + curr, 0);
const result2 = score2.reduce((prev, curr) => prev + curr, 0);

console.log(result1);
console.log(result2);
