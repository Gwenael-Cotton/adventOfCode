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

const part2 = (total) => {
    const copy = {}
    for (let i = 0; i < total.length; i++) {
        copy[i] = 1;
    }
    for (let i = 0; i < total.length - 1; i++) {
        for (let j = 1; j <= total[i].length; j++) {
            copy[i + j] += copy[i];
        }
    }
    console.log(Object.values(copy).reduce((acc, curr) => acc + curr, 0))
}

part2(total) // exepted : 9236992