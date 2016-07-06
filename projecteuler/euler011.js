'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler011

function processData(input) {
    input = input.split('\n').map(line => '00 00 00 ' + line + ' 00 00 00');
    const zeros = '00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00';
    input.push(zeros);
    input.push(zeros);
    input.push(zeros);
    input = input.map(line => line.split(' ').map(Number));

    let answer = -Infinity;
    for (let i = 0; i < input.length - 3; i++) {
        for (let j = 0; j < input.length; j++) {
            let horiz = input[i+0][j+0] * input[i+0][j+1] * input[i+0][j+2] * input[i+0][j+3];
            let verti = input[i+0][j+0] * input[i+1][j+0] * input[i+2][j+0] * input[i+3][j+0];
            let diagl = input[i+0][j+0] * input[i+1][j+1] * input[i+2][j+2] * input[i+3][j+3];
            let diagr = input[i+0][j+3] * input[i+1][j+2] * input[i+2][j+1] * input[i+3][j+0];
            answer = Math.max(answer, horiz, verti, diagl, diagr);
        }
    }
    process.stdout.write(answer + '\n');
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    processData(input);
});
