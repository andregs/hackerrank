'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler009
// tip: my solution isn't optimal since I'm generating all posible triples that
// satisfy the problem's constraints

function main() {
    _input.split("\n").slice(1).map(Number).forEach(n => {
        let answer = -1;
        if (pythagoreanTriples.has(n)) {
            answer = pythagoreanTriples.get(n).reduce((x, y) => x * y);
        }
        process.stdout.write(answer + "\n");
    });
}

// Generate 1203 pythagorean triples. I'm using the Euclid's formula. Rules:
// m must be greater than n; m - n must be odd; m and n must be coprimes.
// We won't find all the solutions if we generate less than 1203.

let pythagoreanTriples = new Map();
const minTriples = 1203, maxN = 3000;
let numOfTriples = 0;

for (let m = 2; numOfTriples < minTriples; m++)
    for (let n = 1 + (m % 2); n < m; n += 2)
        if (greatestCommonDivisor(m, n) === 1) {
            const a = m * m - n * n;
            const b = 2 * m * n;
            const c = m * m + n * n;
            for (let k = 1 ; a*k + b*k + c*k <= maxN; k++) {
                saveTriple(a*k, b*k, c*k);
                numOfTriples++;
            }
        }

function greatestCommonDivisor(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function saveTriple(a, b, c) {
    const sum = a + b + c;
    if (pythagoreanTriples.has(sum)) {
        let product = a * b * c;
        const oldValue = pythagoreanTriples.get(sum).reduce((x, y) => x * y);
        if (oldValue >= product) return;
    }
    pythagoreanTriples.set(sum, [a, b, c]);
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
    4
    12
    2886
    1
    3000
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
