'use strict';

// https://www.hackerrank.com/challenges/insertionsort1

function main() {
    _input = _input.split("\n");
    let size = _input.shift();
    let arr = _input.shift().split(' ');
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

process.stdin.on("end", main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    _input = `
	5
    2 4 6 8 3
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
