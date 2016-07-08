'use strict';

// https://www.hackerrank.com/challenges/save-the-prisoner

function processData() {
    input
        .split('\n')
        .slice(1)
        .map(line => line.split(' ').map(Number))
        .forEach(line => processLine(...line));
}

function processLine(n, m, s) {
    process.stdout.write(`${1 + (n + m + s - 2) % n}\n`);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', processData);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    3
    5 2 1
    1000000000 1000000000 1000000000
    1 1 1
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    processData();
}
