const fs = require("fs");
const lines = fs.readFileSync("input.txt", { encoding: "utf8" });

let arrOfArr = new Array(3);

for (let x = 0; x < arrOfArr.length; x++) {
  arrOfArr[x] = new Array(3);
}

arrOfArr[0][0] = "A X";
arrOfArr[0][1] = "A Y";
arrOfArr[0][2] = "0 Z";

arrOfArr[1][0] = "B X";
arrOfArr[1][1] = "B Y";
arrOfArr[1][2] = "B Z";

arrOfArr[2][0] = "C X";
arrOfArr[2][1] = "C Y";
arrOfArr[2][2] = "C Z";

arrOfArr[0][0][3] = "some value";

console.log(arrOfArr);
