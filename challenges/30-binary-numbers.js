'use strict';

// https://www.hackerrank.com/challenges/30-binary-numbers
// tip: try to search the maximum in the same loop where you convert n to binary
// tip2: one-line solution, but cheating (it uses native function to convert to binary)
// Math.max(...Number(n).toString(2).split(/0+/).map(e => e.length))

function main() {
    let n = + input;
    let current = 0, answer = 0;
    while (n > 0) {
        let binaryDigit = n % 2;
        n = Math.trunc(n / 2);
        if (binaryDigit) answer = Math.max(answer, ++current);
        else current = 0;
    }

    process.stdout.write('' + answer);
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
    1000000
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
