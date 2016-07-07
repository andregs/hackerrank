'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler013

const BigNumber = require('bignumber.js');

function main() {
    const sum = input.split('\n').slice(1).reduce((a, b) => {
        return new BigNumber(a).add(new BigNumber(b));
    });
    process.stdout.write(sum.toFixed().slice(0, 10));
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
    37107287533902102798797998220837590246510135740250
    46376937677490009712648124896970078050417018260538
    74324986199524741059474233309513058123726617309629
    91942213363574161572522430563301811072406154908250
    23067588207539346171171980310421047513778063246676
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
