'use strict';

// https://www.hackerrank.com/contests/world-codesprint-5/challenges/camelcase

function main() {
    input = input.trim();
    for (var i = 1, count=1; i < input.length; i++) {
        const char = input[i].charCodeAt(0);
        count += (char >= 65 && char <= 90);
    }
    console.log(count);
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
    saveChangesInTheEditor
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
