'use strict';

// https://www.hackerrank.com/challenges/insertionsort2

function main() {
    input = input.split("\n");
    const size = +input.shift();
    const arr = input.shift().split(' ').map(Number);

    let output = '';
    for (let i = 1; i < size; i++) {
        const e = arr[i];
        for (var j = i - 1; e < arr[j]; j--) {
            arr[j + 1] = arr[j];
            arr[j] = e;
        }
        output += arr.join(' ') + '\n';
    }
    process.stdout.write(output);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
	6
    1 4 3 5 6 2
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
