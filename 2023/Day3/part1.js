const fs = require('fs');
const grid = fs.readFileSync('input.txt', {encoding: 'utf8'}).split('\n')


const findSymbol = () => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) { 
            if(grid[i][j].match(/[^.0-9]/g)) {
                findAdjacentNumber(i, j);
            }
        }
    }
}

const findAdjacentNumber = (row, col) => {
    const directions = [
        { row: -1, col: 0 }, // Top
        { row: 1, col: 0 },  // Bot
        { row: 0, col: -1 }, // Left
        { row: 0, col: 1 },  // Right
        { row: -1, col: -1 },// Top-left
        { row: -1, col: 1 }, // Top-right
        { row: 1, col: -1 }, // bot-left
        { row: 1, col: 1 },  // bot-right
      ];

      for(dir of directions) {
        const checkRow = row + dir.row;
        const checkCol = col + dir.col;

        for (let i = 0; i < grid.length; i++) {
          for (let j = 0; j < grid[i].length; j++) { 
              if(!isNaN(grid[i][j]) && i === checkRow && j === checkCol) {
                  checkRowNumber(checkRow, checkCol, grid[checkRow])
                }
          }
        }
      }

}

const result = [];

const checkRowNumber = (x, y, line) => {
    const numbers = [];
    for (let i = y + 1; i <= line.length && !isNaN(line[i]); i++) {
        checkIfUnique(i, x, y) ? numbers.push(line[i]) : null
    }
    for (let i = y; i >= 0 && !isNaN(line[i]); i--) {
        checkIfUnique(i, x, y) ? numbers.unshift(line[i]) : null
    }
    result.push(numbers.join(''))
}

const checkIfUnique = (i, x) => {
    const key = `${i},${x}`;
    if (!checkedNumbers.has(key)) {
        checkedNumbers.add(key);
        return true;
    } else {
        return false;
    }
};

const checkedNumbers = new Set(); 
findSymbol();

console.log(result.filter(num => num !== '').reduce((acc, curr) => Number(acc) + Number(curr), 0)) // 521601
