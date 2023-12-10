const fs = require("fs");
const lines = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .trim()
  .split("\n")

  /** Part 1 */
  const stack = []
  let byStartParsed = 0;
  let byEndParsed = 0;

  const mapping = () => {
      for (const element of lines) {
          for(let i = 0; i < element.length; i++) {
              byStartParsed = parseInt(element[i])
              if (!isNaN(byStartParsed)) {
                  break;
              }
          }
          for (let j = element.length; j >= 0; j--) {
              byEndParsed = parseInt(element[j])
              if (!isNaN(byEndParsed)) {
                  break;
              }
          }
          stack.push(byStartParsed.toString() + byEndParsed.toString());
        }
      
        const result = stack.reduce(
          (acc, curr) => Number(acc) + Number(curr),
          0,
        );
          console.log("RESULT - PART 1 :", result)
        return result;
  }

  mapping()
/** Part 1 */
