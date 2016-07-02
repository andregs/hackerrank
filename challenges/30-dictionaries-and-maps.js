'use strict';

// https://www.hackerrank.com/challenges/30-dictionaries-and-maps
// tip: don't use array.shift() because it's too slow (it'll timeout)

function processData(input) {
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
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split("\n"));
});
