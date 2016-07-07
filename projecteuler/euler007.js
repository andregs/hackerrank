'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler007
// tip: create an efficient prime generator, like the Sieve of Eratosthenes

function processLine(n) {
    while (primes.length < n)
        primes.push(gen.next().value);

    process.stdout.write(primes[n - 1] + "\n");
}

let gen = primegen();
let primes = [];

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
    6
    1
    10000
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
