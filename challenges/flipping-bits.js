'use strict';

// https://www.hackerrank.com/challenges/flipping-bits

function main() {
    const ones = Math.pow(2, 32) - 1; // 111111...
    input.split('\n').slice(1).map(Number).forEach(
        n => process.stdout.write(`${ones - n}\n`)
    );
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    3 
    2147483647 
    1 
    0
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
