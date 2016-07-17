'use strict';

// https://www.hackerrank.com/challenges/icecream-parlor
// tip: if you want to save memory, then just use two nested loops to find the sum.
// here I use a hash so the solution runs faster

function main() {
    _input = _input.split("\n");
    for (let t = _input.shift(); t > 0; t--) {
        const M = + _input.shift();
        const N = + _input.shift();
        const arr = _input.shift().split(' ').map(Number);
        const complement = {};
        for (let i = 0; i < N; i++) {
            if (arr[i] < M) {
                if (complement[arr[i]] === undefined) {
                    complement[M - arr[i]] = i;
                } else {
                    process.stdout.write(`${complement[arr[i]] + 1} ${i + 1}\n`);
                    break;
                }
            }
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    _input = `
	2
	4
	5
	1 4 5 3 2
	4
	4
	2 2 4 3
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
