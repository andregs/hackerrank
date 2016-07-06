'use strict';

// https://www.hackerrank.com/challenges/minimum-distances

function main(A) {
    let min = Infinity;
    const distances = {};
    A.forEach((num, i) => {
        if (distances[num] === undefined)
            distances[num] = i;
        else
            min = Math.min(min, Math.abs(i - distances[num]));
    });
    if (min === Infinity) min = -1;
    process.stdout.write('' + min);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    main(input.slice(2).split(' ').map(Number));
});
