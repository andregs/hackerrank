'use strict';

// https://www.hackerrank.com/challenges/minimum-distances

function main() {
    const A = input.slice(2).split(' ').map(Number);
    let min = Infinity;
    const distances = {};
    A.forEach((num, i) => {
        if (distances[num] === undefined)
            distances[num] = i;
        else
            min = Math.min(min, Math.abs(i - distances[num]));
    });
    if (min === Infinity) min = -1;
    process.stdout.write('' + min);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    6
    7 1 3 4 1 7
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
