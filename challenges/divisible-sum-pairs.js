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
