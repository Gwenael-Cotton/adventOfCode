const fs = require("fs");
const lines = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .trim()
  .split("\n")

/** Part 2 */
const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function filterOccurrences(line) {
    let resultString = [];

    for (let i = 0; i < line.length; i++) {
      if(parseInt(line[i], 10)) {
            resultString.push(line[i]);
        } else {
          for (let j = 0; j < numbers.length; j++) {
            let currentNumber = numbers[j];
      
            if (line.startsWith(currentNumber, i)) {
              resultString.push(currentNumber);
            }
          }
        }
    }

    return resultString;
  }

  let stackStr = [];
  const inputMapping = () => {
    let firstNumber = "";
    let endNumber = "";
    let firstStrToNumber = "";
    let endStrToNumber = "";
    for(const line of lines) {
        let filteredString = filterOccurrences(line);
        if(filteredString.length < 2) {
          firstNumber = filteredString[0]
          endNumber = filteredString[0]
        } else {
          firstNumber = filteredString.shift()
          endNumber = filteredString.pop()
        }
        if(isNaN(firstNumber)) {
            firstStrToNumber = numbers.findIndex((a) => a === firstNumber) + 1;
        } else {
            firstStrToNumber = firstNumber;
        }
        if(isNaN(endNumber)) {
            endStrToNumber = numbers.findIndex((a) => a === endNumber) + 1;
        } else {
            endStrToNumber = endNumber;
        }
        stackStr.push(firstStrToNumber.toString() + endStrToNumber.toString());
    }
    const result = stackStr.reduce(
      (acc, curr) => Number(acc) + Number(curr),
      0,
  );

  console.log("RESULT - PART 1 :", result);
  }

inputMapping();

/** Part 2 */