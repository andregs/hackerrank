'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler003
// tip: you have to know how to efficiently generate prime numbers (the Sieve of Eratosthenes)

function processLine(n) {
    let largestPrimeFactor;

    // try to divide n by all the primes we already know
    for (let prime of primes) {
        if (n % prime === 0) {
            largestPrimeFactor = prime;
            while (n > 1 && n % largestPrimeFactor === 0)
                n /= largestPrimeFactor;
        }
    }

    // keep generating primes and dividing n by them
    while (n > 1 && Math.sqrt(n) > primes[primes.length - 1]) {
        let prime = gen.next().value;
        primes.push(prime);
        if (n % prime === 0) {
            largestPrimeFactor = prime;
            while (n > 1 && n % largestPrimeFactor === 0)
                n /= largestPrimeFactor;
        }
    }

    // n is prime because we went beyond its square root
    if (n > 1) largestPrimeFactor = n;

    process.stdout.write(largestPrimeFactor + "\n");
}

let gen = primegen();
let primes = [ gen.next().value ];

function* primegen() {
    function* multgen(increment) {
        let multiple = increment;
        for (;;) yield multiple += increment;
    }

    let skip = {};
    for (let i = 2 ;; i++) {
        if (skip[i] === undefined) {
            yield i;
            let gen = multgen(i);
            skip[gen.next().value] = gen;
        } else {
            let gen = skip[i];
            skip[i] = undefined; // because 'delete skip[i]' is too slow
            let multiple = gen.next().value;
            while (skip[multiple] !== undefined)
                multiple = gen.next().value;
            skip[multiple] = gen;
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
    _input.split("\n").slice(1).forEach(processLine);
}

if (process.argv[2] === 'test') {
    process.stdin.pause();
    _input = `
    3
	10
	17
	${Math.pow(10,12) - 1}
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
