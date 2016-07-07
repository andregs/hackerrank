'use strict';

// https://www.hackerrank.com/challenges/30-2d-arrays

function processData() {
    input = input.split('\n').map(line => line.split(' ').map(Number));
    let answer = -Infinity;
    for (let i = 0; i < input.length - 2; i++) {
        for (let j = 0; j < input.length - 2; j++) {
            let sum = input[i+0][j+0] + input[i+0][j+1] + input[i+0][j+2]
                    +                   input[i+1][j+1]
                    + input[i+2][j+0] + input[i+2][j+1] + input[i+2][j+2];
            answer = Math.max(answer, sum);
        }
    }
    process.stdout.write(answer + '');
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', processData);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    processData();
}
