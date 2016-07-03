'use strict';

// https://www.hackerrank.com/challenges/30-factorial

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    process.stdout.write(factorial(+ _input) + "\n");
});
