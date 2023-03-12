const fs = require("fs");
const lines = fs
  .readFileSync("test.txt", { encoding: "utf8" })
  .trim() // remove whitespaces
  .split("\n")
  .map((x) => x.split(" "));

let headPosY = 0,
  headPosX = 0;
let tailPosY = 0,
  tailPosX = 0;

const setVisited = (y, x, tailVisited) => {
  tailVisited.add(`${y} ${x}`);
};

const followHead = (headPosX, headPosY, tailVisited) => {
  const distanceX = Math.abs(headPosX - tailPosX);
  const distanceY = Math.abs(headPosY - tailPosY);
  // Check if the head and tail are touching
  if (headPosX === tailPosX && headPosY === tailPosY) {
    // Go to step 3
  } else {
    // Check if the head and tail are in the same row or column
    if (headPosX === tailPosX || headPosY === tailPosY) {
      // Go to step 4
    } else if (
      (headPosX === tailPosX || headPosY === tailPosY) &&
      (distanceX < 2 || distanceY < 2)
    ) {
      // Move the tail one step diagonally to keep up with the head
      tailPosX += headPosX > tailPosX ? 1 : -1;
      tailPosY += headPosY > tailPosY ? 1 : -1;
      console.log(tailPosY, tailPosX);
      // setVisited(tailPosY, tailPosX, tailVisited);
    }
  }

  // Check if the head is two steps directly up, down, left, or right from the tail
  if (distanceX === 2 || distanceY === 2) {
    // Move the tail one step in the same direction as the head
    tailPosX = headPosX > tailPosX ? tailPosX + 1 : tailPosX + 0;
    tailPosX = headPosX < tailPosX ? tailPosX + -1 : tailPosX + 0;

    tailPosY = headPosY < tailPosY ? tailPosY + -1 : tailPosY + 0;
    tailPosY = headPosY > tailPosY ? tailPosY + 1 : tailPosY + 0;
    // console.log(tailPosY, tailPosX);
    // setVisited(tailPosY, tailPosX, tailVisited);
  }
};

const move = (direction, directionMove, tailVisited) => {
  for (let i = 0; i < directionMove; i++) {
    switch (direction) {
      case "R":
        followHead(headPosX, headPosY, tailVisited);
        headPosX += 1;
        break;
      case "L":
        followHead(headPosX, headPosY, tailVisited);
        headPosX -= 1;
        break;
      case "U":
        followHead(headPosX, headPosY, tailVisited);
        headPosY += 1;
        break;
      case "D":
        followHead(headPosX, headPosY, tailVisited);
        headPosY -= 1;
        break;
      default:
        break;
    }
  }
};

const part2 = () => {
  tailVisited = new Set();
  const nodes = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [direction, directionMove] = lines[i];
    move(direction, +directionMove, tailVisited);
    for (let j = 1; j < nodes.length; j++) {
      console.log(nodes[0][j - 1], nodes[1][j - 1]);
      followHead(nodes[0][j - 1], nodes[1][j - 1], tailVisited);
    }
    const lastNode = nodes[nodes.length - 1];
    // console.log(lastNode);
    tailVisited.add(lastNode[0], lastNode[1], tailVisited);
    // console.log(tailVisited);
  }

  // console.log(tailVisited);
};

part2();
// console.log(tailVisited.size + 1);
