'use strict';

// https://www.hackerrank.com/challenges/30-factorial

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", function () {
    process.stdout.write('' + factorial(+ input));
});

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = '5';
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    process.stdout.write('' + factorial(+ input));
}
