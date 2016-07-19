'use strict';

// https://www.hackerrank.com/contests/worldcodesprint/challenges/flatland-space-stations
// tip: first you have to sort the array of cities that have space stations.
// tip: then you can use binary search to find the nearest station for each city.

const _ = require('lodash');

function main() {
    input = input.split('\n').map(line => line.split(' ').map(Number));
    const n = input[0][0];
    const stations = input[1].sort((a, b) => a - b);

    let max = -Infinity;
    for (let i = 0; i < n; i++) {
        let prev = _.sortedIndex(stations, i) - 1;
        let next = prev + 1;
        prev = stations[prev] || stations[0];
        next = stations[next] || stations[stations.length - 1];
        const distance = Math.min(Math.abs(i - prev), Math.abs(i - next));
        max = Math.max(max, distance);
    }

    process.stdout.write(max + '');
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    5 2
    0 4
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
