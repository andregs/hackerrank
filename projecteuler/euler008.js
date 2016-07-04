'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler008
// tip: this is easy when you treat the big number as an array of digits

function processData(input) {
    for (let i = 0; i <= input.length - 2; i += 2) {
        const [n, k] = input[i].split(' ').map(Number);
        const thenumber = input[i + 1];
        let max = 0;
        for (let x = 0, y = k; y <= n; x++, y++) {
            const product = thenumber.slice(x, y)
                .split('')
                .map(Number)
                .reduce((a, b) => a * b);

            max = Math.max(max, product);
        }
        process.stdout.write(max + "\n");
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split("\n").slice(1));
});
