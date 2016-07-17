'use strict';

// https://www.hackerrank.com/challenges/mandragora
// tip: eat the weakest mandragora and compute the experience for battling the
// others; then keep eating the weakest untill the computed experience starts
// to decrease.

const BigNumber = require('bignumber.js');

function main() {
    input = input.split('\n');
    let i = 2;
    for (let t = + input[0]; t > 0; t--) {
        defeat(input[i].split(' ')
            .map(Number)
            .sort((a, b) => a - b));
        i += 2;
    }
}

function defeat(mandragoras) {
    const xp = new BigNumber(mandragoras.reduce((a, b) => a + b));
    // process.stderr.write(`defeat ${mandragoras}\nif I eat 0 xp will be ${xp}\n`);
    let maxXP = xp, eaten = new BigNumber(0);
    for (let i = 1; i <= mandragoras.length; i++) {
        eaten = eaten.add(mandragoras[i - 1]);
        const newXP = xp.sub(eaten).mul(i + 1);
        // process.stderr.write(`if I eat ${eaten} xp will be ${newXP}\n`);
        if (newXP.lt(maxXP)) break;
        maxXP = newXP;
    }
    process.stdout.write(maxXP.toFixed() + '\n');
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
    4
    3
    3 2 2
    5
    2 5 3 1 4
    1
    0
    1
    6
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
