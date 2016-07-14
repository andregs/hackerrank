'use strict';

// https://www.hackerrank.com/challenges/sherlock-and-array
// tip: first compute the sum of the array, then loop through
// it computing left and right

function main() {
    input = input.split('\n');
    let i = 2;
    for (let t = + input[0]; t > 0; t--) {
        processArray(input[i].split(' ').map(Number));
        i += 2;
    }
}

function processArray(array) {
    let answer = 'NO';
    let left = 0, right = array.reduce((a, b) => a + b);
    for (const element of array) {
        right -= element;
        if (left === right) {
            answer = 'YES';
            break;
        }
        left += element;
    }
    process.stdout.write(answer + '\n');
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
    3
    3
    1 2 3
    4
    1 2 3 3
    1
    4
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
