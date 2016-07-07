'use strict';

// https://www.hackerrank.com/challenges/kangaroo
// tip: the simplest solution is to make them jump (loop) and
// see if they meet. However, there's a formula to calculate
// this without any loop:
// x2 + numOfJumps * v2 = x1 + numOfJumps * v1 (if they meet)
// x2 - x1 = numOfJumps*v1 - numOfJumps*v2
// x2 - x1 = numOfJumps*(v1 - v2)
// (x2 - x1) / (v1 - v2) = numOfJumps
// (x2 - x1) % (v1 - v2) === 0
// let yes = v2 < v1 && (x2 - x1) % (v1 - v2) === 0;

function main() {
    const [x1, v1, x2, v2] = input.split(' ').map(Number);
    let yes = v2 < v1 && jump(x1, v1, x2, v2);
    process.stdout.write(yes ? 'YES' : 'NO');
}

function jump (x1, v1, x2, v2) {
    while (x1 < x2) {
        x1 += v1;
        x2 += v2;
    }
    return x1 === x2;
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
    input = '0 3 4 2';
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
