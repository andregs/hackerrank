'use strict';

// https://www.hackerrank.com/challenges/reduced-string

function main() {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i+1]) {
            input = input.replace(input[i] + input[i+1], '');
            i = -1;
        }
    }
    process.stdout.write(input === '' ? 'Empty String' : input);
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
    aaabccddd
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
