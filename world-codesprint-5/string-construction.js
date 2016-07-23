'use strict';

// https://www.hackerrank.com/contests/world-codesprint-5/challenges/string-construction

function main() {
    let output = [];
    input.split('\n').slice(1).forEach(s => {
        let p = new Set();
        for (let char of s) p.add(char);
        output.push(p.size);
    });
    console.log(output.join('\n'));
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
    5
    abcd
    abab
    abcab
    abababab
    abacabab
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
