'use strict';

// https://www.hackerrank.com/challenges/insertionsort1

function processData(input) {
    let size = input.shift();
    let arr = input.shift().split(' ');
    let e = arr[size - 1];

    for (var i = size - 2; arr[i] > e; i--) {
        arr[i + 1] = arr[i];
        process.stdout.write(arr.join(' ') + "\n");
    }

    arr[i + 1] = e;
    process.stdout.write(arr.join(' ') + "\n");
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
