const fs = require("fs");
const input = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .split("\n")
  .map((x) => [...x].map(Number));

const check = (
  positionY,
  positionX,
  directionY,
  directionX,
  map,
  isVisible
) => {
  isVisible.push(`${positionY} - ${positionX}`);
  let max = map[positionY][positionX];
  while (true) {
    positionY = positionY + directionY;
    positionX = positionX + directionX;
    if (
      positionY < 0 || // position Y = 0 is top border
      positionY >= map.length || // position = map.length  is bottom border
      positionX <= 0 || // position = 0 is left border
      positionX >= map[positionY].length // right border for Y axis position
    ) {
      break;
    }
    if (map[positionY][positionX] > max) {
      max = map[positionY][positionX];
      isVisible.push(`${positionY} - ${positionX}`);
    }
  }
};

const check2 = (positionY, positionX, directionY, directionX, map) => {
  let visibility = 0;
  let max = map[positionY][positionX];
  while (true) {
    positionY = positionY + directionY;
    positionX = positionX + directionX;
    if (
      positionY < 0 || // position Y = 0 is top border
      positionY >= map.length || // position = map.length  is bottom border
      positionX <= 0 || // position = 0 is left border
      positionX >= map[positionY].length // right border for Y axis position
    ) {
      break;
    }
    visibility++;
    if (map[positionY][positionX] >= max) {
      break;
    }
  }
  return visibility;
};

const part1 = () => {
  const isVisible = [];
  // on columns
  for (let i = 0; i < input.length; i++) {
    // Check from Top
    check(0, i, 1, 0, input, isVisible); // ( positionY, positionX, directionY, directionX, map, isVisible )
    // Check from Bottom
    check(input.length - 1, i, -1, 0, input, isVisible); // ( positionY, positionX, directionY, directionX, map, isVisible )
  }
  // on rows
  for (let i = 0; i < input.length; i++) {
    // Check from Left
    check(i, 0, 0, 1, input, isVisible); // ( positionY, positionX, directionY, directionX, map, isVisible )
    // Check from Right
    check(i, input[0].length - 1, 0, -1, input, isVisible); // ( positionY, positionX, directionY, directionX, map, isVisible )
  }
  // result remove occurences of positions in isVisible if tree is visible from several directions
  const result = [...new Set(isVisible)];
  console.log(result.length);
};

const part2 = () => {
  // check2( positionY, positionX, directionY, directionX, map )
  // check2(1, 2, -1, 0, input); // to Top
  // check2(1, 2, 1, 0, input); // to Bottom
  // check2(1, 2, 0, 1, input); // to right
  // check2(1, 2, 0, -1, input); // to left
  let results = [];
  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input.length; y++) {
      const result =
        check2(y, x, -1, 0, input) *
        check2(y, x, 1, 0, input) *
        check2(y, x, 0, 1, input) *
        check2(y, x, 0, -1, input);
      results.push(result);
    }
  }
  results.sort((a, b) => a - b);
  console.log(results.pop());
};

part1();
part2();
