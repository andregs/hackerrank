'use strict';

// https://www.hackerrank.com/challenges/30-review-loop

function main() {
    _input = _input.split('\n');
    for (let t = _input.shift(); t > 0; t--) {
        let even = false, evenIndexed = '', oddIndexed = '';
        for (let char of _input.shift()) {
            if (even = !even)
                evenIndexed += char;
            else
                oddIndexed += char;
        }
        process.stdout.write(`${evenIndexed} ${oddIndexed}\n`);
    }
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
    2
    Hacker
    Rank
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
