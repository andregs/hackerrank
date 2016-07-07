'use strict';

// https://www.hackerrank.com/challenges/the-love-letter-mystery
// tip: 'a'.charCodeAt(0) === 97, 'b'.charCodeAt(0) === 98, 'z'.charCodeAt(0) === 122

function processLine(str) {
    let operations = 0;
    for (let left = 0, right = str.length - 1; left < right; left++, right--) {
        operations += Math.abs(str.charCodeAt(left) - str.charCodeAt(right));
    }
    process.stdout.write(operations + "\n");
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
	abc
	abcba
	abcd
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
