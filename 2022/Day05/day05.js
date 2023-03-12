const { moves } = require("./moves.js");
const crates1 = [
  ["F", "T", "C", "L", "R", "P", "G", "Q"],
  ["N", "Q", "H", "W", "R", "F", "S", "J"],
  ["F", "B", "H", "W", "P", "M", "Q"],
  ["V", "S", "T", "D", "F"],
  ["Q", "L", "D", "W", "V", "F", "Z"],
  ["Z", "C", "L", "S"],
  ["Z", "B", "M", "V", "D", "F"],
  ["T", "J", "B"],
  ["Q", "N", "B", "G", "L", "S", "P", "H"],
];
const crates2 = [
  ["F", "T", "C", "L", "R", "P", "G", "Q"],
  ["N", "Q", "H", "W", "R", "F", "S", "J"],
  ["F", "B", "H", "W", "P", "M", "Q"],
  ["V", "S", "T", "D", "F"],
  ["Q", "L", "D", "W", "V", "F", "Z"],
  ["Z", "C", "L", "S"],
  ["Z", "B", "M", "V", "D", "F"],
  ["T", "J", "B"],
  ["Q", "N", "B", "G", "L", "S", "P", "H"],
];

for (const move of moves) {
  qty = move.move;
  from = move.from - 1;
  to = move.to - 1;
  // PART 1
  for (let i = 0; i < qty; i++) {
    crates1[to].push(crates1[from].pop());
    1;
  }
  // PART 2
  const t = crates2[from].splice(-qty);
  crates2[to].push(...t);
}

// PART 1
let output1 = "";
crates1.forEach((l) => {
  output1 += l[l.length - 1];
});
console.log("PART1", output1);

// PART 2
let output2 = "";
crates2.forEach((l) => {
  output2 += l[l.length - 1];
});
console.log("PART2", output2);
