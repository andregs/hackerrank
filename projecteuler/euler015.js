'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler015
// tip: you have to compute combinatorics "(m+n) choose m" or "(m+n) choose n"
// tip: you are going to compute some huge factorial, so cache them

const BigNumber = require('bignumber.js');

function main() {
    input.split('\n').slice(1).map(l => l.split(' ').map(Number))
        .forEach(l => processLine(...l));
}

function processLine(m, n) {
    // (m + n)! / m! * n!
    const routes = factorial(m + n).div(factorial(m).mul(factorial(n)));
    process.stdout.write(`${routes.mod(1e9 + 7)}\n`);
}

const f = [new BigNumber(1), new BigNumber(1)];
function factorial(n) {
    if (f[n] !== undefined) return f[n];
    for (var i = 2, prev = f[i - 1]; i <= n; i++) {
        f[i] = prev = prev.mul(i);
    }
    return f[prev];
}
factorial(500 * 2); // initialize the cache

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
    2 2
    3 2
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
