'use strict';

// https://www.hackerrank.com/challenges/equal-stacks
// tip: pop one from the heighest stack untill they have same height

function main() {
    const stacks = input.split('\n').slice(1)
        .map(line => line.split(' ').reverse().map(Number));

    const heights = [];
    stacks.forEach(stack => heights.push(stack.reduce((a, b) => a + b)));

    for (let i = heighest(stacks, heights); i !== -1; i = heighest(stacks, heights)) {
        heights[i] -= stacks[i].pop();
    }

    process.stdout.write('' + height(stacks[0]));
}

function heighest(stacks, heights) {
    if (heights[0] === heights[1] && heights[0] === heights[2]) return -1;
    if (heights[0] >= heights[1] && heights[0] >= heights[2]) return 0;
    if (heights[1] >= heights[0] && heights[1] >= heights[2]) return 1;
    return 2;
}

function height(stack) {
    return stack.length && stack.reduce((a, b) => a + b);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    5 3 4
    3 2 1 1 1
    4 3 2
    1 1 4 1
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
