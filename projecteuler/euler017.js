'use strict';

// https://www.hackerrank.com/contests/projecteuler/challenges/euler017
// tip: Math(10, 12) = Nine Trillion

function main() {
    input.split('\n').slice(1).map(Number).forEach(
        n => process.stdout.write(say(n) + '\n')
    );
}

function say(n) {
    function units(n) {
        return [
            'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
            'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
        ][+n];
    }

    function tens(n) {
        const sn = String(+n);
        const words = ['','', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
        if (sn[1] === '0') return words[sn[0]];
        return words[sn[0]] + ' ' + units(sn[1]);
    }

    function group(n) {
        let sn = String(+n);
        let words = '';
        if (sn > 99) words = units(sn[0]) + ' Hundred';
        if (sn.substr(-2) > 19) words += ' ' + tens(sn.substr(-2));
        else if (sn.substr(-2) > 0) words += ' ' + units(sn.substr(-2));
        return words.trim();
    }

    if (n < 20) return units(n);
    if (n < 100) return tens(n);

    const bigs = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
    let words = '', digits = n.toString();
    let groups = Math.ceil(digits.length / 3);

    for (let i = 0; i < groups; i++) {
        let g = group(digits.substr(-3));
        digits = digits.slice(0, digits.length - 3);
        if (g.length)
            if (groups) words = g + ' ' + bigs[i] + ' ' + words;
            else words = g;
    }

    return words;
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
    5
    0
    ${Math.floor(Math.random() * 1e12)}
    ${Math.floor(Math.random() * 1e12)}
    ${Math.floor(Math.random() * 1e12)}
    ${1e12}
    `.replace(/^\s+/mg, "").trim();
    process.stderr.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
