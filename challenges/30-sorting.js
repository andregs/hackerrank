'use strict';

// https://www.hackerrank.com/challenges/30-sorting

function main() {
    input = input.split('\n').slice(1)[0].split(' ').map(Number);
    let totalSwaps = 0;
    for (let i = 0; i < input.length; i++) {
        let sorted = true;
        for (let j = 0; j < input.length - 1; j++) {
            if (input[j] > input[j + 1]) {
                [input[j], input[j + 1]] = [input[j + 1], input[j]];
                sorted = false;
                totalSwaps++;
            }
        }
        if (sorted) break;
    }

    process.stdout.write(`Array is sorted in ${totalSwaps} swaps.\n`);
    process.stdout.write(`First Element: ${input[0]}\n`);
    process.stdout.write(`Last Element: ${input[input.length - 1]}`);
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
    3 2 1
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
