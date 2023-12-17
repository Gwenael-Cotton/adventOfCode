const fs = require('fs');
const input = 
    fs.readFileSync('input.txt', {encoding: 'utf8'})
    .split('\n')
    .map(x => x.split(':'));

const parse = (input) => {
    let runs = [];
    for (let i of input) {
        const values = i.slice(1)[0].trim().split(' ').filter(s => s !== '')
        runs.push(values);
    }
    return runs;
}

const searchNewsRecord = (time, distance) => {
    const newsRecords = [];
    let record = 0;
    for (let i = 0; i <= time; i++) {
        record = i * (time - i)
        record > distance ? newsRecords.push(record) : null
    }
    return newsRecords.length;
}

const part1 = (input) => {
    let newsRecords = [];
    let [times, distances] = parse(input);
    for (let i = 0; i < 4; i++) {
        newsRecords.push(searchNewsRecord(Number(times[i]), Number(distances[i])))
    }
    console.log('Part 1 :', newsRecords.reduce((a, b) => a * b))
}

const part2 = (input) => {
    let newsRecords = [];
    let [times, distances] = parse(input);
    newsRecords.push(searchNewsRecord(Number(times.join('')), Number(distances.join(''))))
    console.log('Part 2 :', newsRecords.reduce((a, b) => a * b))
}

part1(input)
part2(input)
