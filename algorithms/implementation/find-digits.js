'use strict';

// https://www.hackerrank.com/challenges/find-digits
// tip: it's easier when you convert the number N into an array of digits

function main() {
    input.split('\n').slice(1).map(Number).forEach(
        function (n) {
            const count = n.toString().split('')
                .filter(digit => n % digit === 0).length;
            process.stdout.write(`${count}\n`);
        }
    );
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";
process.stdin.on("data", function (data) {
    input += data;
});

process.stdin.on("end", function () {
    main();
});

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    11
    123456789
    114108089
    110110015
    121
    33
    44
    55
    66
    77
    88
    106108048
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
