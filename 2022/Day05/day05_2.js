const fs = require("fs");
const lines = fs
  .readFileSync("input2.txt", { encoding: "utf8" })
  .split("\n")
  .map((x) => x);

lines.pop();

const crate = [];
for (let i = 0; i < lines.length; i++) {
  const crates = lines[i].split("\n", 35);
  const data = crates[0].split("");
  crate.push(data);
}
let count = 0;
for (let i = 0; i < crate.length; i++) {
  const t = crate[i].map((x, i) => {
    return x.split("");
  });
  for (let j = 0; j <= 34; j++) {
    console.log(t[count], j);
    if (count === 34) count = -1;
    count += 1;
    // TODO remove space all 3 counts
  }
}
