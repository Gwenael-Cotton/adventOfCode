const fs = require("fs");
const input = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .trim()
  .split(/[\n\n ]/g)
  .map((item) => (item !== "" ? item : "-"));

const parse = (input) => {
  const parsedInput = [];
  input.push("-");
  let temp = [];
  for (let item of input) {
    item !== "-" ? temp.push(item) : parsedInput.push(temp);
    item === "-" ? (temp = []) : null;
  }
  const seeds = parsedInput[0].splice(1).map(x => Number(x));
  for (let [i, item] of parsedInput.entries()) {
    if (i < 1) continue;
    temp.push(item.slice(2, item.lenght));
  }
  return [seeds, temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6]];
};

const c = parse(input);
const [seeds] = c;

const divideByTwo = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3));
  }
  return result;
};

const maps = c.slice(1, c.length).map((item) => divideByTwo(item));

const getTranslateResponse = (maps, seed) => {
  const temp = [];
    for (let map of maps) {
      for(let m of map) {
        if ((seed < Number(m[1])) || seed >= Number(m[1]) + Number(m[2])) {
          temp.push(Number(seed));
        }
        if((seed >= Number(m[1])) && seed < Number(m[1]) + Number(m[2])) {
          const calculate = Number(m[0]) + (seed - Number(m[1]))
          temp.push(calculate)
          seed = calculate
          break
        }

      };
    }
    return temp
};

const part1 = () => {
  const result = [];
    const res = seeds.map((seed) => getTranslateResponse(maps, seed))
   for (let c = 0; c < res.length; c++) {
    result.push(res[c].pop())
   }
   console.log(Math.min(...result))
}

part1();