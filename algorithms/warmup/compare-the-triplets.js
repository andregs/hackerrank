'use strict';

// https://www.hackerrank.com/challenges/compare-the-triplets

function main() {
    const [a, b] = input.trim().split('\n')
        .map(line => line.trim().split(' ').map(Number));
    const points = [
        (a[0] > b[0]) + (a[1] > b[1]) + (a[2] > b[2]),
        (a[0] < b[0]) + (a[1] < b[1]) + (a[2] < b[2])
    ];
    process.stdout.write(points.join(' '));
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
    5 6 7
    3 6 10
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
