'use strict';

// https://www.hackerrank.com/challenges/fibonacci-modified

const BigNumber = require('bignumber.js');
BigNumber.config({ POW_PRECISION: 0 });

function main() {
    let [a, b, n] = input.split(' ').map(Number);
    a = new BigNumber(a);
    b = new BigNumber(b);
    for (let i = 3; i <= n; i++) {
        var c = next(a, b);
        a = b, b = c;
    }
    process.stdout.write(c.toFixed());
}

function next(a, b) {
    return b.pow(2).add(a);
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
    0 1 5
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
