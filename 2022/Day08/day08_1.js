const fs = require("fs");
const lines = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .trim() // remove whitespaces
  .split("\n")
  .map((x) => [...x].map(Number));

const setVisibility = (y, x, visibility) => {
  visibility.add(`${y} ${x}`);
};

const checkLine = (y, x, dy, dx, map, visibility) => {
  setVisibility(y, x, visibility);
  let max = map[y][x];

  while (true) {
    y += dy;
    x += dx;
    if (y < 0 || y >= map.length || x <= 0 || x >= map[y].length) break;
    if (map[y][x] > max) {
      max = map[y][x];
      setVisibility(y, x, visibility);
    }
  }
};

const part1 = () => {
  const visibility = new Set();
  // columns
  for (let i = 0; i < lines[0].length; i++) {
    checkLine(0, i, 1, 0, lines, visibility);
    checkLine(lines.length - 1, i, -1, 0, lines, visibility);
  }
  // rows
  for (let i = 0; i < lines.length; i++) {
    checkLine(i, 0, 0, 1, lines, visibility);
    checkLine(i, lines[0].length - 1, 0, -1, lines, visibility);
  }
  console.log(visibility.size);
};

part1();
