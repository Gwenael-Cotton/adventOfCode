const fs = require('fs');
const lines = 
    fs.readFileSync('input.txt', {encoding: 'utf8'}).split(/[\n]/g);

    const cards = [];
for(const line of lines) {
    const card = line.split(/[:|]/g)
    cards.push([card[1], card[2]]);
}

const separateNumbersList = (cards) => {
    const winNumber = [];
    const allNumber = [];
    for(let card of cards) {
        winNumber.push(card[0].trim())
        allNumber.push(card[1].trim())
    }

    return [winNumber, allNumber];
}

const transformStrToNumber = (cards) => {
    let allNumberParsed = [];
    let counter = 0;
    const [winNumber, allNumber] = separateNumbersList(cards);
    for(let n of allNumber) {
        const numbers = n.split(' ')
            for (let i = 0; i < numbers.length; i++) {
                if(Number(numbers[i]) !== 0) allNumberParsed.push(Number(numbers[i]))
            }

        let stackPoint = [];
        for(let all of allNumberParsed) {
            let point = 1;
            let win = winNumber[counter].split(' ');
            for (let i = 0; i < win.length; i++) {
                if(Number(win[i]) === all) {
                    stackPoint.push(point)
                }
            }
        }
        allCardPoint.push(stackPoint);
        counter++;
        allNumberParsed = [];
    }
}

const allCardPoint = [];

transformStrToNumber(cards);

const total = allCardPoint
  .filter(result => result.length > 0)
  .map(result => result.length === 1 ? 1 : result.length === 2 ? 2 : 2 ** (result.length - 1));

console.log(total.reduce((acc, curr) => acc + curr, 0)); // 23028