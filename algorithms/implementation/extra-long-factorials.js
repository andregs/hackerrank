'use strict';

// https://www.hackerrank.com/challenges/extra-long-factorials

const BigNumber = require('bignumber.js');

function main() {
    process.stdout.write(factorial(new BigNumber(input)).toFixed());
}

function factorial(n) {
    if (n.eq(0)) return 1;
    let f = new BigNumber(n);
    for (let i = 2; n.gt(i); i++) f = f.mul(i);
    return f;
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
    100
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
