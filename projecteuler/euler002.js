'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler002
// tip: you have to know how to efficiently generate fibonacci numbers
// spoiler: any even term E(n) can be expressed as E(n) = 4*E(n-1) + E(n-2)

const BigNumber = require('bignumber.js');

function processLine(line) {
    let n = new BigNumber(line);
    let sum = new BigNumber(0);
    for (let v = gen.next(true).value; v.lte(n); v = gen.next().value) {
        sum = sum.add(v);
    }
    process.stdout.write(sum + "\n");
}

let gen = evenfibonacci();

function* evenfibonacci() {
    let fn1 = new BigNumber(2);
    let fn2 = new BigNumber(0);
    for (;;) {
        let current = fn2;
        fn2 = fn1;
        fn1 = fn1.mul(4).add(current);
        let reset = yield current;
        if (reset) {
            fn1 = new BigNumber(2);
            fn2 = new BigNumber(0);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", main);
function main() {
    _input.split("\n").slice(1).forEach(processLine);
}

if (process.argv[2] === 'test') {
    process.stdin.pause();
    _input = `
    2
    10
    100
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
