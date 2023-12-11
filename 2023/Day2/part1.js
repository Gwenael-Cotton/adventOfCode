const fs = require("fs");
const lines = fs
  .readFileSync("input.txt", { encoding: "utf8" })
  .trim()
  .split("\n");

const games = [];

for (let i = 0; i < lines.length; i++) {
    let filterIdentifications = [];
    filterIdentifications.push(lines[i].split(':'));
    games.push(filterIdentifications[0][1].split(';'));
}

let counterGames = 0;
const stackNotPossibleGames = [];

const filterGames = () => {
    for(let game of games) {
        counterGames++
        for (let i = 0; i < game.length; i++) {
            let subsetsOfCubes = game[i].split(',');
            for (sub of subsetsOfCubes) {
                let str = sub.split(',').join('').trim().split(' ');
                if((str[1].startsWith('blue') && Number(str[0]) > 14) 
                    || (str[1].startsWith('red') && (Number(str[0]) > 12)) 
                    || (str[1].startsWith('green') && Number(str[0]) > 13)) {
                        stackNotPossibleGames.push(counterGames);
                        break;
                    } 
            }
        }
    }
}

filterGames();
/** remove duplicate occurence */
const result = [...new Set(stackNotPossibleGames)];
/** sum of 0 to 100 equal 5050
 * response are 5050 - result of not possible games
*/
console.log(5050 - result.reduce((acc, curr) => acc + curr, 0))
