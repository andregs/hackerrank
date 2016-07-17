'use strict';

// https://www.hackerrank.com/challenges/luck-balance
// tip: it's easier when you separate important contest from unimportant ones

function main() {
    input = input.split('\n');
    let k = + input[0].split(' ')[1];
    input = input.slice(1).map(line => line.split(' ').map(Number));

    let unimportant = input
        .filter(line => line[1] === 0)
        .map(line => line[0]);

    let important = input
        .filter(line => line[1] === 1)
        .map(line => line[0])
        .sort((a, b) => b - a);

    // process.stderr.write(`${k} ${important.length} ${unimportant.length}\n`);
    // process.stderr.write(`${important.join(' ')}\n`);

    let balance = 0;
    if (unimportant.length)
        balance += unimportant.reduce((a, b) => a + b);
    if (important.length)
        balance += important.reduce((a, b) => (k-- > 0) ? (a + b) : (a - b), 0);

    process.stdout.write('' + balance);
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
    6 3
    1 1
    8 1
    2 1
    5 1
    10 0
    5 0
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
