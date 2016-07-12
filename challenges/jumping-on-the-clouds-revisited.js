'use strict';

// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited

function main() {
    input = input.split('\n').map(line => line.split(' ').map(Number));
    const [n, k] = input[0];
    const clouds = input[1];
    let i = 0;
    let e = 100;
    do {
        i = (i + k) % n;
        e -= 1 + 2 * clouds[i];
    } while (i !== 0);
    process.stdout.write(e + '');
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
    8 2
    0 0 1 0 0 1 1 0
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
