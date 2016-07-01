'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler001
// tip: you have to know how to sum the elements of an arithmetic progression

const BigNumber = require('bignumber.js');

function processLine(line) {
    let n = new BigNumber(line).sub(1);
    
    let last3 = n.divToInt(3).mul(3),
        last5 = n.divToInt(5).mul(5),
        last15 = n.divToInt(15).mul(15);
    
    let sum = last3.add(3).mul(last3).div(6)
    .add(
        last5.add(5).mul(last5).div(10)
    )
    .sub(
        last15.add(15).mul(last15).div(30)
    );
    
    process.stdout.write(sum + "\n");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    _input.split("\n").slice(1).forEach(processLine);
});
