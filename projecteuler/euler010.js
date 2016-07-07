'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler010
// tip: create an efficient prime generator, like the Sieve of Eratosthenes

function processLine(n) {
    while (sum[n] === undefined) {
        const prime = gen.next().value;
        let lastKey = sum.length - 1;
        const lastValue = sum[lastKey];
        while (++lastKey < prime) sum[lastKey] = lastValue;
        sum[prime] = lastValue + prime;
    }
    process.stdout.write(sum[n] + "\n");
}

let gen = primegen();
let sum = [0];

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
    5
    10
    1
    1000000
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
