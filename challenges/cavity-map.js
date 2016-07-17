'use strict';

// https://www.hackerrank.com/challenges/cavity-map

function main() {
    const square = input.trim().split('\n').slice(1)
        .map(line => line.trim().split('').map(Number));

    const n = square[0].length;

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            const check = (x, y) =>
                square[x][y] !== 'X' && square[x][y] < cell;

            const cell = square[i][j];
            const cavity =
                check(i - 0, j - 1) &&
                check(i - 1, j - 0) &&
                check(i + 0, j + 1) &&
                check(i + 1, j + 0);

            if (cavity) square[i][j] = 'X';
        }
    }

    const output = square.map(line => line.join('')).join('\n');
    process.stdout.write(output);
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
    2
12
11
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
