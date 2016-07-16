'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler020.js

const BigNumber = require('bignumber.js');

function main() {
    process.stdout.write(
        input.trim()
            .split('\n')
            .slice(1)
            .map(n => new BigNumber(n))
            .map(factorial)
            .map(sumDigits)
            .join('\n')
    );
}

function factorial(n) {
    if (n.eq(0)) return 1;
    let f = new BigNumber(n);
    for (let i = 2; n.gt(i); i++) f = f.mul(i);
    return f;
}

function sumDigits(n) {
    let sum = 0;
    for (const d of n.toFixed()) sum += +d;
    return sum;
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
    3
    6
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
