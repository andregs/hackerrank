'use strict';

// https://www.hackerrank.com/challenges/grid-challenge

function main() {
    input = input.split('\n');
    let output = '';
    const t = + input.shift();

    for (let i = 0; i < t; i++) {
        const n = + input.shift();
        const square = input.splice(0, n).map(line => line.split('').sort());
        output += isSorted(square) + '\n';
    }

    process.stdout.write(output);
}

function isSorted(square) {
    for (let i = 0; i < square.length; i++)
        for (let j = 0; j < square.length - 1; j++)
            if (square[j][i] > square[j + 1][i])
                return 'NO';

    return 'YES';
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    1
    5
    ebacd
    fghij
    olmkn
    trpqs
    xywuv
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
