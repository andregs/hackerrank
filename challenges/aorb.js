'use strict';

// https://www.hackerrank.com/challenges/aorb
// tip: be aware of HUGE numbers
// FIXME: this solution fails (timeout) for test cases #11 and above

const BigNumber = require('bignumber.js');

function main() {
    input = input.split('\n');
    for (let i = 1; --input[0] >= 0; i += 4) {
        // parse input
        let k = new BigNumber(input[i + 0], 10);
        let a = new BigNumber(input[i + 1], 16);
        let b = new BigNumber(input[i + 2], 16);
        let c = new BigNumber(input[i + 3], 16);
        process.stderr.write(`${k} ${a.toString(16)} ${b.toString(16)} ${c.toString(16)}\n`);

        a = a.toString(2);
        b = b.toString(2);
        c = c.toString(2);

        // add leading zeros, so all numbers have the same length
        const length = Math.max(a.length, b.length, c.length);
        a = padLeft(a, length).split('');
        b = padLeft(b, length).split('');
        c = padLeft(c, length).split('');
        process.stderr.write(`a ${a.join('')}\nb ${b.join('')}\nc ${c.join('')}\n`);

        // mandatory swaps
        let swaps = 0;
        for (let i = 0; i < length; i++) {
            if (c[i] === '0') {
                swaps += +a[i] + +b[i];
                a[i] = b[i] = '0';
            } else if (a[i] === '0' && b[i] === '0') {
                b[i] = '1';
                swaps++;
            }
        }

        process.stderr.write(`a ${a.join('')}\nb ${b.join('')}\nc ${c.join('')}\n= ${swaps}\n`);

        if (swaps <= k) {
            // reduce 'a' as much as possible
            for (let i = 0; i < length && swaps < k; i++) {
                if (c[i] === '1') {
                    if (a[i] === '1' && b[i] === '1') {
                        if (swaps < k) {
                            a[i] = '0';
                            swaps++;
                        }
                    } else if(b[i] === '0' && swaps < k - 1) {
                        a[i] = '0', b[i] = '1';
                        swaps += 2;
                    }
                }
            }

            process.stderr.write(`a ${a.join('')}\nb ${b.join('')}\nc ${c.join('')}\n= ${swaps}\n`);
            process.stdout.write(`${new BigNumber(a.join(''), 2).toString(16).toUpperCase()}\n`);
            process.stdout.write(`${new BigNumber(b.join(''), 2).toString(16).toUpperCase()}\n`);
        } else {
            process.stdout.write('-1\n');
        }
    }

}

function padLeft(n, zeros) {
    while (n.length < zeros) n = '0' + n;
    return n;
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    4
    8
    2B
    9F
    58
    5
    B9
    40
    5A
    5
    B9
    72
    5A
    2
    91
    BE
    A8
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
