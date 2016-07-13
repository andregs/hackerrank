'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler018
// tip: starting from the bottom, sum each element with its biggest children

function main() {
    input = input.split('\n');
    for (let t = + input.shift(); t > 0; t--) {
        let n = + input.shift();
        let triangle = input.slice(0, n)
            .map(line => line.split(' ').map(Number));
        input = input.slice(n);

        for (let i = n - 2; i >= 0; i--) {
            triangle[i] = triangle[i].map(
                (n, j) => n + Math.max(triangle[i + 1][j], triangle[i + 1][j + 1])
            );
        }

        process.stdout.write(triangle[0][0] + '\n');
    }
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
    4
       3
      7 4
     2 4 6
    8 5 9 3
    3
      1
     2 3
    4 5 6
    1
    0
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
