'use strict';

// https://www.hackerrank.com/challenges/find-digits

function main() {
    input.split('\n').slice(1).map(n => n.split('')).forEach(
        function (digits) {
            const count = digits.filter(d => digits.length % d === 0).length;
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
    2
    12
    1012
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
