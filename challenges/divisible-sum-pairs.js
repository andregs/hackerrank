'use strict';

// https://www.hackerrank.com/challenges/divisible-sum-pairs

function main() {
    input = input.split('\n');
    const k = + input[0].split(' ')[1];
    const arr = input[1].split(' ').map(Number);
    let answer = 0;
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++)
            if ((arr[i] + arr[j]) % k === 0)
                answer++;
    process.stdout.write(answer + '');
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
    10 3
    29 97 52 86 27 89 77 19 99 96
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
