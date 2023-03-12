const fs = require("fs");
const lines = fs
  .readFileSync("test.txt", { encoding: "utf8" })
  .trim() // remove whitespaces
  .split("\n")
  .map((x) => x);
const pair = [];
for (let i = 0; i < lines.length; i += 3) {
  pair.push(`${lines[i].split()}, ${lines[i + 1].split()}`);
}
console.log(pair);
