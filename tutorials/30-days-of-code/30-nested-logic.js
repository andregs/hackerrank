'use strict';

// https://www.hackerrank.com/challenges/30-nested-logic

function main() {
    input = input.split('\n').map(line => line.split(' ').map(Number).reverse());
    let [returned, expected] = input.map(line => (line[1]-- , new Date(...line)));

    const isSameYear = returned.getFullYear() === expected.getFullYear();
    const isSameMonth = returned.getMonth() === expected.getMonth();
    const isSameDay = returned.getDate() === expected.getDate();
    const isOverdue = returned > expected && !(isSameYear && isSameMonth && isSameDay);

    let fine = 0;
    if (isOverdue) {
        if (isSameYear && isSameMonth) fine = 15 * (returned.getDate() - expected.getDate());
        else if (isSameYear) fine = 500 * (returned.getMonth() - expected.getMonth());
        else fine = 1e4;
    }

    process.stdout.write(fine + '');
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
	9 6 2015
    6 6 2015
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
