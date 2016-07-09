'use strict';

// https://www.hackerrank.com/challenges/utopian-tree
// tip:       year   0     1     2      3       4
// tip:     height  0 1 . 2 3 . 6 7 . 14 15 . 30 31
// tip: 2^(year+1)   2     4     8     16      32

function main() {
    input.split('\n').slice(1).map(Number).forEach(
        function(n) {
            const height = Math.pow(2, 1 + Math.ceil(n / 2)) - n%2 - 1;
            process.stdout.write(height + '\n');
        }
    );
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
    3
    0
    1
    4
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
