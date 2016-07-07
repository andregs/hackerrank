'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler004
// tip: the easy way - find all the palindromes and sort them

const _ = require('lodash');

let palindromes = [];
for (let i = 100; i <= 999; i++) {
    for (let j = i; j <= 999; j++) {
        let product = i * j + '';
        let reverse = String(product).split('').reverse().join('');
        if (product === reverse && product.length === 6) {
            let index = _.sortedIndex(palindromes, product);
            if (palindromes[index] !== product)
                palindromes.splice(index, 0, product);
        }
    }
}

function processLine(n) {
    let output = palindromes[palindromes.length - 1];
    for (let i = 0; i < palindromes.length; i++) {
        if (palindromes[i] >= n) {
            output = palindromes[i - 1];
            break;
        }
    }
    process.stdout.write(output + "\n");
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
    4
	101110
	800000
	999999
	888888
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${_input}\n\nOutput:\n`);
    main();
}
