'use strict';

// https://www.hackerrank.com/challenges/30-running-time-and-complexity

function main() {
    process.stdout.write(
        input
            .split('\n')
            .slice(1)
            .map(Number)
            .map(isPrime)
            .join('\n')
    );
}

function isPrime(n) {
    if (n < 2) return 'Not prime';
    for (var i = 0; prime(i) <= Math.sqrt(n); i++) {
        if (n % prime(i) === 0) return 'Not prime';
    }
    return 'Prime';
}

function prime(n) {
    while (primesCache.length <= n) {
        primesCache.push(pgen.next().value);
    }
    return primesCache[n];
}

const pgen = primeGen();
const primesCache = [];

function* primeGen() {
    function* multgen(increment) {
        let multiple = increment;
        for (; ;) yield multiple += increment;
    }

    const skip = new Map();
    for (let i = 2; ; i++) {
        if (skip.has(i)) {
            const gen = skip.get(i);
            skip.delete(i);
            let multiple = gen.next().value;
            while (skip.has(multiple))
                multiple = gen.next().value;
            skip.set(multiple, gen);
        } else {
            yield i;
            const gen = multgen(i);
            skip.set(gen.next().value, gen);
        }
    }
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
    3
    12
    5
    7
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
