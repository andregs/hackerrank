'use strict';

// https://www.hackerrank.com/challenges/30-exceptions-string-to-integer
// tip: you cannot use loops or conditional statements.

function main() {
    try {
        var answer = isNaN(+ input) ? null.throw : + input;
    } catch (e) {
        answer = 'Bad String';
    }
    process.stdout.write(answer.toString());
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', main);

// DO NOT submit this test case because it contains an 'if' statement

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = '7x768';
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
