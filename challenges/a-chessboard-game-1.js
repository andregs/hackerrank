'use strict';

// https://www.hackerrank.com/challenges/a-chessboard-game-1
// tip: do it using pen & paper, start at index x=0 y=0 and you
// will quickly see an emerging pattern.

function main() {
    _input
        .split('\n')
        .slice(1)
        .map(line => line.split(' ').map(Number))
        .forEach(line => testCase(...line));
}

function testCase(x, y) {
    const answer
        = (y%4 === 0) || (y%4 === 3) || (x%4 === 0) || (x%4 === 3)
        ? 'First\n'
        : 'Second\n';

    process.stdout.write(answer);
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
    7
    5 2
    5 3
    8 8
    15 15
    1 1
    15 14
    14 15
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
