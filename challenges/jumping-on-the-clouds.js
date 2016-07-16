'use strict';

// https://www.hackerrank.com/challenges/jumping-on-the-clouds
// tip: put a '\n' at the end of your output otherwise you'll fail some test cases

function main() {
    const [n, clouds] = input.trim().split('\n')
        .map(line => line.trim().split(' ').map(Number));

    let i = 0, jumps = 0;
    do {
        i += (clouds[i + 2] === 0) + 1;
        jumps++;
    } while (i < n - 1);
    process.stdout.write(jumps + '\n');
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
    0 0 1 0 0 1 0
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
