'use strict';

// https://www.hackerrank.com/challenges/beautiful-triplets
// tip: j=d+i & k=d+j
// tip: loop through 'a' only once, treating 'i' as a constant

function main() {
    input = input.trim().split('\n')
        .map(line => line.trim().split(' ').map(Number));

    const d = input[0][1];
    const a = input[1];

    let triplets = 0;
    for (let i of a)
        triplets += (a.includes(d + i) && a.includes(2 * d + i));

    process.stdout.write(triplets + '\n');
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
    7 3
    1 2 4 5 7 8 10
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
