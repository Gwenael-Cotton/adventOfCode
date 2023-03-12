const fs = require("fs");
const input = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .split("\n")
  .map((x) => x);

let dir = {};
let currDir = dir;
let previousDirectory = [dir];
let result = 0;

input.forEach((el, index) => {
  if (el[2] === "c" && el[el.length - 1] === "/") return;

  if (el[0] === "$") {
    // el --- command
    if (el[2] === "c" && el[el.length - 1] !== ".") {
      // el --- entrer dans un dossier
      dir = dir[el.split(" ")[2]];
      previousDirectory.push(dir);
    } else if (el[2] === "c" && el[el.length - 1] === ".") {
      // el --- command pour back
      previousDirectory.pop();
      dir = previousDirectory[previousDirectory.length - 1];
    }
  } else if (el[0] === "d") {
    // el = dir
    var dirKey = el.split(" ")[1];
    dir[dirKey] ? dir[dirKey] : (dir[dirKey] = {});
  } else {
    const value = el.split(" ")[1];
    dir[value] = +el.split(" ")[0];
  }
});

function getSize(dirr = currDir) {
  if (Number.isInteger(dirr)) {
    return dirr;
  } else {
    const values = Object.values(dirr)
      .map(getSize)
      .reduce((a, b) => a + b, 0);
    return values;
  }
}

let sum = 0;
function puzzle1(dirr = currDir) {
  if (getSize(dirr) <= 100000) {
    sum += getSize(dirr);
  }
  if (Number.isInteger(dirr)) {
    return dirr;
  }
  for (const child of Object.values(dirr)) {
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
function puzzle2(dir = currDir) {
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
