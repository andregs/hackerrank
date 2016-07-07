'use strict';

// https://www.hackerrank.com/challenges/fair-rations
// tip: if the first is odd give bread, move to the next and
// repeat untill the penultimate. In the end, check if the last
// is odd

function processData(input) {
    let swaps = 0;
    for (var i = 0; i < input.length - 1; i++)
        if (input[i] % 2 !== 0) {
            swaps += 2;
            input[i + 1]++;
        }

    if (input[i] % 2 !== 0) swaps = 'NO';
    process.stdout.write('' + swaps);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    processData(input.split('\n')[1].split(' ').map(Number));
});
