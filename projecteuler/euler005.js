'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler005
// tip: break each number into primes - look at this example for input N=6
// 6 5 4 3 2 / 2
// 3 5 2 3 1 / 2
// 3 5 1 3 1 / 3
// 1 5 1 1 1 / 5
// 1 1 1 1 1 => 60 (coz 2*2*3*5)

function processLine(n) {
    let range = [...Array(n + 1).keys()].slice(2); // [2,3,4, ... n]
    let answer = range.reduce(smallestMultiple, [1]).reduce((a,b) => a * b);
    process.stdout.write(answer + "\n");
}

function smallestMultiple(factors, current) {
    for (let factor of factors)
        if (current % factor === 0)
            current /= factor;

    if (current > 1)
        for (let prime of primes)
            if (current % prime === 0)
                factors.push(prime);

    return factors;
}

let gen = primegen();
let primes = [];
for (let p = gen.next().value; p < 40; p = gen.next().value) {
    primes.push(p);
}

function* primegen() {
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
    4
    3
    10
    1
    40
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
