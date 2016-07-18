'use strict';

// https://www.hackerrank.com/challenges/game-of-stones-1
// tip:   n -> 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 ...
// tip: win -> SE FI FI FI FI FI SE SE FI FI FI FI FI SE SE ...
// tip: n%7 -> 01 02 03 04 05 06 00 01 02 03 04 05 06 00 01 ...

function main() {
    process.stdout.write(
        input
            .split('\n')
            .slice(1)
            .map(line => line.split(' ').map(Number))
            .map(n => n % 7 > 1 ? 'First' : 'Second')
            .join('\n')
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
    8
    1
    2
    3
    4
    5
    6
    7
    10
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
