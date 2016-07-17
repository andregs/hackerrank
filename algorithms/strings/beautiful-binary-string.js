'use strict';

// https://www.hackerrank.com/challenges/beautiful-binary-string
// tip: transform each 010 into 011

function main() {
    input = input.split('\n').slice(1)[0];
    let steps = 0;
    if (input.length >= 3)
        for (let i = 0; i < input.length - 2; i++)
            if (input.substr(i, 3) === '010')
                steps++, i += 2;

    process.stdout.write(steps + '');
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
    7
    0101010
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
