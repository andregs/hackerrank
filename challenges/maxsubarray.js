'use strict';

// https://www.hackerrank.com/challenges/maxsubarray/
// tip: https://en.wikipedia.org/wiki/Maximum_subarray_problem

const BigNumber = require('bignumber.js');

function processData(input) {
    for (let i = 2; i < input.length; i += 2) {
        let arr = input[i].split(' ');

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

process.stdin.on("end", function () {
   processData(_input.split("\n"));
});
