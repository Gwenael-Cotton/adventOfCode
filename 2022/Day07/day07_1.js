const fs = require("fs");
const input = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .split("\n")
  .map((x) => x);

let currDir = {};
let root = currDir;
files = [];

input.forEach((cmd) => {
  switch (cmd[0]) {
    case "$":
      switch (cmd[2]) {
        case "c":
          const word = cmd.slice(5);
          switch (word) {
            case "/":
              files = [];
              currDir = root;
              break;
            case "..":
              currDir = files.pop();
              break;
            default:
              if (!(word in currDir)) {
                currDir[word] = {};
              }
              files.push(currDir);
              currDir = currDir[word];
              break;
          }
          break;
        default:
          break;
      }

      break;
    default:
      [value, key] = cmd.split(" ");
      if (value == "dir") {
        if (!(key in currDir)) {
          currDir[key] = {};
        }
      } else {
        currDir[key] = parseInt(value);
      }
      break;
  }
});
console.log(root);

function getSize(dir = root) {
  if (Number.isInteger(dir)) {
    return dir;
  } else {
    const values = Object.values(dir)
      .map(getSize)
      .reduce((a, b) => a + b, 0);
    return values;
  }
}

let sum = 0;
function puzzle1(dir = root) {
  if (getSize(dir) <= 100000) {
    sum += getSize(dir);
  }
  if (Number.isInteger(dir)) {
    return dir;
  }
  for (const child of Object.values(dir)) {
    if (typeof child !== "object") {
      continue;
    }
    puzzle1(child);
  }
}
// puzzle1();
// console.log(sum);

const sizeNeeded = getSize() - 40_000_000;
let solution = Number.POSITIVE_INFINITY;
function puzzle2(dir = root) {
  if (getSize(dir) >= sizeNeeded) {
    solution = Math.min(solution, getSize(dir));
  }
  if (Number.isInteger(dir)) {
    return dir;
  }
  for (const child of Object.values(dir)) {
    if (typeof child !== "object") {
      continue;
    }
    puzzle2(child);
  }
}
puzzle2();
console.log(sizeNeeded, solution);
