'use strict';

// https://www.hackerrank.com/challenges/icecream-parlor
// tip: if you want to save memory, then just use two nested loops to find the sum.
// here I use a hash so the solution runs faster

function processData(input) {
    for (let t = input.shift(); t > 0; t--) {
        const M = + input.shift();
        const N = + input.shift();
        const arr = input.shift().split(' ').map(Number);
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

process.stdin.on("end", function () {
   processData(_input.split("\n"));
});
