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

let result = [];
const filterGames = () => {
    let blue = 0;
    let red = 0;
    let green = 0;
    for(let game of games) {
        for (let i = 0; i < game.length; i++) {
            let subsetsOfCubes = game[i].split(',');
            for (sub of subsetsOfCubes) {
                let str = sub.split(',').join('').trim().split(' ');
                if (str[1].startsWith('blue') && Number(str[0]) > blue) {
                    blue = Number(str[0])
                } else if (str[1].startsWith('red') && (Number(str[0]) > red)) {
                    red = Number(str[0])
                } else if (str[1].startsWith('green') && Number(str[0]) > green) {
                    green = Number(str[0])
                }
            }
        }
        result.push(blue * red * green)
        blue = 0;
        red = 0;
        green = 0;
    }
}


filterGames();
console.log(result.reduce((acc, curr) => acc + curr))