'use strict';

// https://www.hackerrank.com/challenges/funny-string
// tip: you can traverse the string and its reverse in a single loop.

function main() {
    input.split('\n').slice(1).forEach(
        function (str) {
            let funny = true;
            for (let i = 0; i < str.length - 1; i++) {
                let left = Math.abs(str.charCodeAt(i + 1) - str.charCodeAt(i));
                let right = Math.abs(str.charCodeAt(str.length - i - 1) - str.charCodeAt(str.length - i - 2));
                if (left !== right) {
                    funny = false;
                    break;
                }
            }
            process.stdout.write((funny ? 'Funny' : 'Not Funny') + '\n');
        }
    );
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
    2
    acxz
    bcxz
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
