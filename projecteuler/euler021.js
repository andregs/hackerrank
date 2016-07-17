'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler021
// tip: you need an efficient way to find all proper divisors of a number
// tip: if n is divisible by x and x <= sqrt(n) then n is also divisible by n / x
// tip: the first amicable number is 220

function main() {
    const amicables = generateAmicables(1e5);

    let output = '';
    input.split("\n").slice(1).map(Number).forEach(n => {
        let sum = 0;
        for (let i = 0; amicables[i] < n; i++)
            sum += amicables[i];
        output += sum + '\n';
    });

    process.stdout.write(output);
}

function generateAmicables(max) {
    const amicables = new Set();
    for (let a = 220; a <= max; a++) {
        const b = sumOfDivisors(a);
        const sumOfB = sumOfDivisors(b);
        if (a === sumOfB && a !== b) {
            amicables.add(a);
            amicables.add(b);
        }
    }
    return Array.from(amicables).sort((a, b) => a - b);
}

const cache = {};
function sumOfDivisors(n) {
    if (cache[n]) return cache[n];
    let divisors = 1, sqrt = Math.ceil(Math.sqrt(n));
    for (var i = 2; i < sqrt; i++)
        if (n % i === 0) divisors += i + n / i;
    if (i === Math.sqrt(n)) divisors += i;
    return cache[n] = divisors;
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
    1
    28
    36
    300
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
