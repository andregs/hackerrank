'use strict';

// https://www.hackerrank.com/challenges/maxsubarray/
// tip: https://en.wikipedia.org/wiki/Maximum_subarray_problem

const BigNumber = require('bignumber.js');

function main() {
    _input = _input.split("\n");
    for (let i = 2; i < _input.length; i += 2) {
        let arr = _input[i].split(' ');

        // continguous
        let ans = new BigNumber(arr[0]);
        let sum = new BigNumber(arr[0]);
        // non contiguous
        let ncontsum = new BigNumber(arr[0] > 0 ? arr[0] : 0);
        let ncontmax = new BigNumber(arr[0]);

        for (let j = 1; j < arr.length; j++) {
            // contiguous
            sum = BigNumber.max(arr[j], sum.add(arr[j]));
            ans = BigNumber.max(sum, ans);
            // non contiguous
            if(arr[j] > 0) ncontsum = ncontsum.add(arr[j]);
            ncontmax = BigNumber.max(ncontmax, arr[j]);
        }

        process.stdout.write(`${ans} ${ncontsum > 0 ? ncontsum : ncontmax}\n`);
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
	1 2 3 4
	6
	2 -1 2 3 4 -5
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
