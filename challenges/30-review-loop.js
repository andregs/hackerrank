'use strict';

// https://www.hackerrank.com/challenges/30-review-loop

function processData(input) {
    for (let t = input.shift(); t > 0; t--) {
        let even = false, evenIndexed = '', oddIndexed = '';
        for (let char of input.shift()) {
            if (even = !even)
                evenIndexed += char;
            else
                oddIndexed += char;
        }
        process.stdout.write(`${evenIndexed} ${oddIndexed}\n`);
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
