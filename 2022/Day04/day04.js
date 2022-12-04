const fs = require("fs");
const lines = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .split("\n")
  .map((x) => x);

const sections = [];
let count = 0,
  count2 = 0;
for (let i = 0; i < lines.length; i++) {
  sections.push(lines[i].replaceAll("-", " ").replace(",", "\n").split("\n"));
}

for (let i = 0; i < sections.length; i++) {
  const section1 = sections[i][0].split(" ", 4);
  const section2 = sections[i][1].split(" ", 4);
  let a = +section1[0];
  let b = +section1[1];
  let c = +section2[0];
  let d = +section2[1];
  // PART 1
  (a < c && b < d) || (a > c && b > d) ? null : count++;
  // PART 2
  (a <= d && d <= b) || (b <= d && b >= c) ? count2++ : null;
}

console.log(count);
console.log(count2);

// let count = 0,
//   count2 = 0;

// for (let i = 0; i < lines.length; i++) {
//   const [...ranges] = lines[i];
//   console.log(ranges);
//   const a = +ranges[0];
//   const b = +ranges[1];
//   const c = +ranges[2];
//   const d = +ranges[3];
//    PART 1
//   (a < c && b < d) || (a > c && b > d) ? null : count++;
//    PART 2
//   (a <= d && d <= b) || (b <= d && b >= c) ? count2++ : null;
// }
// console.log(count);
// console.log(count2);
