'use strict';

// https://www.hackerrank.com/challenges/30-dictionaries-and-maps
// tip: don't use array.shift() because it's too slow (it'll timeout)

function main() {
    input = input.split('\n');
    let book = new Map();
    let n = + input[0];
    for (let entry of input.slice(1, n + 1)) {
        entry = entry.split(' ');
        book.set(entry[0], entry[1]);
    }
    for (let key of input.slice(n + 1)) {
        let value = book.get(key);
        process.stdout.write(value ? `${key}=${value}\n` : `Not found\n`);
    }
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
    3
    sam 99912222
    tom 11122222
    harry 12299933
    sam
    edward
    harry
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
