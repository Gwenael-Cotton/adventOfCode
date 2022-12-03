const fs = require("fs");
const lines = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .split("\n")
  .map((x) => x);

// codes 65 to 90 represent uppercase
// codes 97 to 122 represent lowercase

// PART 1
let sumOfpriority = 0;
for (let i = 0; i < lines.length; i++) {
  const sizePart = lines[i].length / 2;
  const part1 = lines[i].split("", sizePart);
  const part2 = lines[i].split("").reverse().join("").split("", sizePart);
  const result = part1.filter((val) => part2.includes(val));
  result[0].charCodeAt(0) > 97
    ? (sumOfpriority += result[0].charCodeAt(0) - 96) // lowercase
    : (sumOfpriority += result[0].charCodeAt(0) - 64 + 26); // uppercase
}
console.log(sumOfpriority);

// PART 2
let sumOfpriority2 = 0;
const groups = [];
for (let i = 0; i < lines.length; i += 3) {
  const chunk = lines.slice(i, i + 3);
  groups.push(chunk);
}

for (let i = 0; i < groups.length; i++) {
  const str1 = groups[i][0].split("");
  const str2 = groups[i][1].split("");
  const str3 = groups[i][2].split("");
  const result = str1.filter((val) => {
    return str2.includes(val) && str3.includes(val);
  });
  result[0].charCodeAt(0) > 97
    ? (sumOfpriority2 += result[0].charCodeAt(0) - 96)
    : (sumOfpriority2 += result[0].charCodeAt(0) - 64 + 26);
}
console.log(sumOfpriority2);
