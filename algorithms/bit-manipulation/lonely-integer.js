'use strict';

// https://www.hackerrank.com/challenges/lonely-integer
// tip: a number XOR itself is always zero, therefore (1^2^3^1^2) === 3

function main() {
    let lonely = _input.split("\n")[1]
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

process.stdin.on("end", main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    _input = `
    9
    4 9 95 93 57 4 57 93 9
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
