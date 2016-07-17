'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler022

function main() {
    input = input.split('\n');
    const n = + input.shift();
    const names = input.splice(0, n).sort();

    let output = '';
    input.slice(1).forEach(name => {
        const score = (names.indexOf(name) + 1) * valueOf(name);
        output += score + '\n';
    });

    process.stdout.write(output);
}

function valueOf(name) {
    let value = 0;
    for (let char of name)
        value += char.charCodeAt(0) - 64;
    return value;
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
    5
    ALEX
    LUIS
    JAMES
    BRIAN
    PAMELA
    1
    PAMELA
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
