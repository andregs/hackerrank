'use strict';

// https://www.hackerrank.com/challenges/lonely-integer
// tip: a number XOR itself is always zero, therefore (1^2^3^1^2) === 3

function processData(input) {
    let lonely = input.split("\n")[1]
        .split(' ')
        .map(Number)
        .reduce((prev, curr) => prev ^ curr);

    process.stdout.write(lonely + "\n");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
