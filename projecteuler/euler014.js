'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler014
// tip: this is all about improving performance without sacrificing memory

const start = new Date();

// I don't know why, but some test cases failed when max = 5e6
const max = 7e6;

function main() {
    computeLongestSteps();
    input.split('\n').slice(1).map(Number).forEach(processLine);
}

const longestStep = [0, 1];
let maxElement = 1, length = 2;

function computeLongestSteps() {
    for (let i = 2; i <= max; i++) {
        let s = steps(i);
        if (s >= maxElement) {
            maxElement = s;
            longestStep[length++] = i;
        }
    }
}

function processLine(n) {
    for (var i = 0; longestStep[i] <= n; i++);
    process.stdout.write(longestStep[i - 1] + '\n');
}

const stepsCache = [0, 1];

function steps(n) {
    if (n === 1) return 1;
    let chain = [], length = 0;
    for (var i = 0, j = n; j > 1; i++) {
        chain[length++] = j;
        if (stepsCache[j]) {
            i += stepsCache[j];
            break;
        } else {
            j = next(j);
        }
    }
    for (j = 0; j < length; j++) {
        if (chain[j] <= max && ! stepsCache[chain[j]]) {
            stepsCache[chain[j]] = i - j;
        }
    }
    return stepsCache[n];
}

function next(n) {
    return (n % 2 === 0) ? (n / 2) : (3 * n + 1);
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
    8
    0
    10 
    15
    20
    3
    4
    1
    ${max}
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
    const end = new Date();
    process.stderr.write((end - start) / 1000 + ' seconds\n');
}
