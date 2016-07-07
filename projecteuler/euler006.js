'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler006
// tip: there're formulas to solve this, but a simple loop may be fast enough

const BigNumber = require('bignumber.js');

// alternative solution: iterative approach
// let sum = [ new BigNumber(0) ],
//     squaresum = [ new BigNumber(0) ];
//
// for (let i = 1; i <= 10000; i++) {
//     let I = new BigNumber(i);
//     sum.push(I.add(sum[i - 1]));
//     squaresum.push(I.pow(2).add(squaresum[i - 1]));
// }

function processLine(n) {
    // let answer = sum[n].pow(2).sub(squaresum[n]).abs();
    let squareOfSum = n.add(1).mul(n).div(2).pow(2); // arithmetic progression
    let sumOfSquares = n.mul(n.add(1)).mul(n.mul(2).add(1)).div(6);
    process.stdout.write(squareOfSum.sub(sumOfSquares).abs() + "\n");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", main);
function main() {
   _input.split("\n").slice(1).map(n => new BigNumber(n)).forEach(processLine);
}

if (process.argv[2] === 'test') {
    process.stdin.pause();
    _input = `
    4
    3
    10
    1
    10000
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
