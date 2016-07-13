'use strict';

// https://www.hackerrank.com/challenges/sherlock-and-squares
// tip: the number of integers between two numbers is b-a+1 (e.g. there're 3 ints between 3 & 5)
// tip: if "a" is square int then sqrt(a) is int.
// tip: so, the number of square ints between a & b is the number of ints between sqrt(a) & sqrt(b)

function main() {
    input.split('\n').slice(1).map(line => line.split(' ').map(Number))
        .forEach(line => processLine(...line));
}

function processLine(a, b) {
    const count = Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
    process.stdout.write(count + '\n');
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
    2
    3 9
    17 24
    16 16
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
