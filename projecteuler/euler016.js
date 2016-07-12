'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler016
// tip: this is trivial if you use bignumber.js with POW_PRECISION = 0

const BigNumber = require('bignumber.js');
BigNumber.config({ POW_PRECISION: 0 });

function main() {
    input.split('\n').slice(1).map(Number).forEach(processLine);
}

function processLine(n) {
    process.stdout.write(
        new BigNumber(2).pow(n)
            .toFixed().split('').map(Number)
            .reduce((a, b) => a + b) + '\n'
    );
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
    5
    0
    1
    2
    3
    ${1e4}
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
