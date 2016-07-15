'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler019

// FIXME: this code does NOT pass on test cases #4 and above. Any suggestion is appreciated.

// tip: starting date & ending date can be out of order.
// tip: you can't use javascript's Date object because the input contains huge years.
// tip: use the zeller's congruence to calculate the day of the week.

const BigNumber = require('bignumber.js');

function main() {
    process.stderr.write('main\n');
    input = input.split('\n').slice(1).map(line => {
        line = line.split(' ');
        line[0] = new BigNumber(line[0]);
        line[1] = + line[1];
        line[2] = + line[2];
        return line;
    });

    for (let i = 0; i < input.length - 1; i += 2) {
        let begin = input[i], end = input[i + 1];

        // swap if given input is out of order
        if (toYMD(...begin).gt(toYMD(...end)))
            [begin, end] = [end, begin];

        let answer = 172 * centuries(begin, end);

        // chooses the strategy that is probably the fastest
        if (answer > 172) {
            if (toYMD(...centuryBegin(begin)).lt(toYMD(...begin)))
                answer -= sundays(centuryBegin(begin), begin);

            if (toYMD(...centuryEnd(end)).gt(toYMD(...end)))
                answer -= sundays(end, centuryEnd(end));

            if (begin[2] === 1 && dayOfWeek(...begin) === 0)
                answer++;

            if (end[2] === 1 && dayOfWeek(...end) === 0)
                answer++;
        } else {
            answer = sundays(begin, end);
        }

        process.stdout.write(`${answer}\n`);
    }
}

function toYMD(year, month, day) {
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    return new BigNumber('' + year + month + day);
}

function centuries(date1, date2) {
    date1 = centuryBegin(date1);
    date2 = centuryBegin(date2);
    return date2[0].sub(date1[0]).add(100).div(100).toNumber();
}

function centuryBegin(date) {
    return [date[0].sub(date[0].mod(100)), 1, 1];
}

function centuryEnd(date) {
    date = centuryBegin(date);
    return [date[0].add(99), 12, 31];
}

function sundays(begin, end) {
    let beginYMD = toYMD(...begin), endYMD = toYMD(...end);

    // process.stderr.write(`begin ${begin} ${dayOfWeek(...begin)} `);
    // process.stderr.write(`end ${end} ${dayOfWeek(...end)}\n`);

    let sundays = 0;
    let [year, month] = begin;
    let copyYMD = toYMD(year, month, 1);

    // process.stderr.write(`${copyYMD}\n${endYMD}\n`);

    while (copyYMD.lte(endYMD)) {
        if (dayOfWeek(year, month, 1) === 0)
            if (copyYMD.gte(beginYMD))
                sundays++;

        month = month % 12 + 1;
        if (month === 1) year = year.add(1);
        copyYMD = toYMD(year, month, 1);
    }

    return sundays;
}

function dayOfWeek(year, month, day) {
    if (month < 3) {
        month += 12;
        year = year.sub(1);
    }
    let h = new BigNumber(day);
    h = h.add(Math.trunc((month + 1) * 26 / 10));
    h = h.add(year);
    h = h.add(year.divToInt(4));
    h = h.add(year.divToInt(100).mul(6));
    h = h.add(year.divToInt(400));
    h = h.sub(1);
    return h.mod(7).toNumber();
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
    8
    1910 1 1
    1900 1 1
    2000 1 1
    2020 1 1
    1994 12 31
    1995 1 1
    1988 3 25
    1989 7 13
    1924 6 6
    1925 6 16
    1000000000000 2 2
    1000000001000 3 2
    2015 2 1
    2015 3 1
    10000000000000000 2 31
    9999999999999000 2 1
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
