'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler012
// tip: you need efficient algorithms to generate primes, triangles and also
// to calculate the number of divisors.
// 360 = 2^3 * 3^2 * 5^1
// (3+1) * (2+1) * (1+1) = 24 divisors

let triangles = [];

function processLine(n) {
    while (triangles[n] === undefined) {
        let triangle = tgen.next().value;
        let divisors = numOfDivisors(triangle);
        for (let i = triangles.length; i < divisors; i++)
            triangles[i] = triangle;
    }
    process.stdout.write(triangles[n] + "\n");
}

function numOfDivisors(n) {
    let divisorCount = 1;
    let primeIndex = 0;
    do {
        let prime = primes(primeIndex++);
        for (var i = 0; n % prime === 0; i++) n /= prime;
        divisorCount *= i + 1;
    } while (n > 1);
    return divisorCount;
}

function primes(i) {
    while (primesCache[i] === undefined)
        primesCache.push(pgen.next().value);
    return primesCache[i];
}

let tgen = triangleGen();
let pgen = primeGen();
let primesCache = [];

function* triangleGen() {
    let sum = 0;
    let i = 1;
    for (;;) yield sum += i++;
}

function* primeGen() {
    function* multgen(increment) {
        let multiple = increment;
        for (;;) yield multiple += increment;
    }

    let skip = new Map();
    for (let i = 2 ;; i++) {
        if (skip.has(i)) {
            let gen = skip.get(i);
            skip.delete(i);
            let multiple = gen.next().value;
            while (skip.has(multiple))
                multiple = gen.next().value;
            skip.set(multiple, gen);
        } else {
            yield i;
            let gen = multgen(i);
            skip.set(gen.next().value, gen);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", main);
function main() {
   _input.split("\n").slice(1).map(Number).forEach(processLine);
}

if (process.argv[2] === 'test') {
    process.stdin.pause();
    _input = `
    6
    0
    1
    2
    3
    4
    1000
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
