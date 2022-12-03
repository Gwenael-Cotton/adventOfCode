const fs = require("fs");
const lines = fs.readFileSync("input.txt", { encoding: "utf8" }).split("\n").map((x) => {
    if (x === "") return "";
    return +x;
  });

let result = 0;
const elf = lines.map((line) => {
  line === "" ? (result = 0) : (result += line);
  return result;
});
elf.sort((a, b) => a - b);
const res1 = elf.reduce((prev, current) => (prev > current ? prev : current));

const elves = [];
for (let i = 3; i > 0; i--) {
  elves.push(elf.pop());
}
const res2 = elves.reduce((prev, curr) => prev + curr, 0);

console.log("FIRST STAR", res1);
console.log("SECONDE STAR", res2);