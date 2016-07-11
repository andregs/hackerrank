'use strict';

// https://www.hackerrank.com/challenges/non-divisible-subset
// tip: if (a + b) % k === 0 then a%k + b%k === k
// tip: if (a%k === i) then "a" can't be paired with a "b" such that (b%k === k - i)
// tip: the subset must contain at max one number "n" such that (n%k === 0)
// tip: the subset must contain at max one number "n" such that (n%k === k/2)

function main() {
    input = input.split('\n').map(l => l.split(' ').map(Number));
    const k = input[0][1];
    const nums = input[1];
    let zero = nums.some(n => n % k === 0);
    let half = nums.some(n => n % k === k / 2);
    let subset = zero + half;
    // process.stderr.write(`${zero} ${half} ${zero + half}\n`);
    for (let i = 1; i < k - i; i++) {
        let a = nums.filter(n => n % k === i).length;
        let b = nums.filter(n => n % k === k - i).length;
        // process.stderr.write(`${a}x${b} `);
        subset += a > b ? a : b;
    }
    // process.stderr.write(`\n`);
    process.stdout.write(`${subset}\n`);
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
    4 3
    1 7 2 4
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
